import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export const dynamic = "force-dynamic";

function getStripeClient() {
  const secretKey = process.env.STRIPE_SECRET_KEY;

  if (!secretKey) {
    throw new Error("STRIPE_SECRET_KEY is not configured");
  }

  return new Stripe(secretKey, {
    apiVersion: "2023-10-16" as any,
  });
}

export async function GET(request: NextRequest) {
  try {
    const sessionId = request.nextUrl.searchParams.get("session_id");

    if (!sessionId) {
      return NextResponse.json(
        { paid: false, error: "Missing session_id" },
        { status: 400 }
      );
    }

    const stripe = getStripeClient();

    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ["payment_intent"],
    });

    const paymentStatus = session.payment_status;

    const paymentIntent =
      typeof session.payment_intent === "string"
        ? null
        : session.payment_intent;

    const isPaid =
      paymentStatus === "paid" ||
      paymentIntent?.status === "succeeded" ||
      paymentIntent?.status === "requires_capture";

    if (!isPaid) {
      return NextResponse.json(
        {
          paid: false,
          error: "Payment not completed",
          paymentStatus,
          paymentIntentStatus: paymentIntent?.status,
        },
        { status: 400 }
      );
    }

    return NextResponse.json({
      paid: true,
      amountTotal: session.amount_total,
      currency: session.currency,
      sessionId: session.id,
      paymentIntentId:
        typeof session.payment_intent === "string"
          ? session.payment_intent
          : session.payment_intent?.id,
    });
  } catch (error) {
    console.error("Error confirming Stripe session:", error);

    if (error instanceof Error && error.message.includes("STRIPE_SECRET_KEY")) {
      return NextResponse.json(
        {
          paid: false,
          error: "Stripe secret key is not configured on the server",
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { paid: false, error: "Failed to confirm Stripe session" },
      { status: 500 }
    );
  }
}

