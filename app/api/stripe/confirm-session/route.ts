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
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/b5521433-4fef-47a3-91d1-de50e108800b',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({sessionId:'debug-session',runId:'pre-fix',hypothesisId:'H1',location:'app/api/stripe/confirm-session/route.ts:GET:entry',message:'confirm-session GET called',data:{hasUrl:typeof request?.url==='string',hasNextUrl:!!(request as any)?.nextUrl},timestamp:Date.now()})}).catch(()=>{});
    // #endregion agent log

    const sessionId = request.nextUrl.searchParams.get("session_id");

    if (!sessionId) {
      // #region agent log
      fetch('http://127.0.0.1:7242/ingest/b5521433-4fef-47a3-91d1-de50e108800b',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({sessionId:'debug-session',runId:'pre-fix',hypothesisId:'H1',location:'app/api/stripe/confirm-session/route.ts:GET:missing_session_id',message:'missing session_id query param',data:{},timestamp:Date.now()})}).catch(()=>{});
      // #endregion agent log

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
      // #region agent log
      fetch('http://127.0.0.1:7242/ingest/b5521433-4fef-47a3-91d1-de50e108800b',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({sessionId:'debug-session',runId:'pre-fix',hypothesisId:'H1',location:'app/api/stripe/confirm-session/route.ts:GET:not_paid',message:'session not paid',data:{paymentStatus,paymentIntentStatus:paymentIntent?.status ?? null},timestamp:Date.now()})}).catch(()=>{});
      // #endregion agent log

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

    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/b5521433-4fef-47a3-91d1-de50e108800b',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({sessionId:'debug-session',runId:'pre-fix',hypothesisId:'H1',location:'app/api/stripe/confirm-session/route.ts:GET:paid',message:'session paid',data:{hasAmountTotal:session.amount_total!=null,currency:session.currency ?? null,hasPaymentIntentId:typeof session.payment_intent==='string'||!!session.payment_intent?.id},timestamp:Date.now()})}).catch(()=>{});
    // #endregion agent log

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

    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/b5521433-4fef-47a3-91d1-de50e108800b',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({sessionId:'debug-session',runId:'pre-fix',hypothesisId:'H1',location:'app/api/stripe/confirm-session/route.ts:GET:catch',message:'exception thrown',data:{errorName:error instanceof Error?error.name:'unknown',errorMessage:error instanceof Error?error.message:String(error)},timestamp:Date.now()})}).catch(()=>{});
    // #endregion agent log

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

