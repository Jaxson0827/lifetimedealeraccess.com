import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

function getStripeClient() {
  const secretKey = process.env.STRIPE_SECRET_KEY;

  if (!secretKey) {
    throw new Error("STRIPE_SECRET_KEY is not configured");
  }

  return new Stripe(secretKey, {
    // Cast to satisfy TypeScript without tying to a specific apiVersion union
    apiVersion: "2023-10-16" as any,
  });
}

export async function POST(request: NextRequest) {
  try {
    const stripe = getStripeClient();

    const origin = request.nextUrl.origin;

    const priceId = process.env.STRIPE_SETUP_DEPOSIT_PRICE_ID;

    const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = priceId
      ? [
          {
            price: priceId,
            quantity: 1,
          },
        ]
      : [
          {
            price_data: {
              currency: "usd",
              product_data: {
                name: "Setup Deposit",
                description:
                  "Applied directly toward your total consultant fee (not an additional charge).",
              },
              // $100.00 in cents
              unit_amount: 10000,
            },
            quantity: 1,
          },
        ];

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: lineItems,
      success_url: `${origin}/payment/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/payment?canceled=1`,
    });

    if (!session.url) {
      return NextResponse.json(
        { error: "Unable to create Stripe Checkout session" },
        { status: 500 }
      );
    }

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Error creating Stripe Checkout session:", error);

    if (error instanceof Error && error.message.includes("STRIPE_SECRET_KEY")) {
      return NextResponse.json(
        { error: "Stripe secret key is not configured on the server" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { error: "Failed to create Stripe Checkout session" },
      { status: 500 }
    );
  }
}

