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
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/b5521433-4fef-47a3-91d1-de50e108800b',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({sessionId:'debug-session',runId:'pre-fix',hypothesisId:'H4',location:'app/api/stripe/create-checkout-session/route.ts:POST:entry',message:'create-checkout-session called',data:{hasStripeSecret:!!process.env.STRIPE_SECRET_KEY,hasPriceId:!!process.env.STRIPE_SETUP_DEPOSIT_PRICE_ID},timestamp:Date.now()})}).catch(()=>{});
    // #endregion agent log

    const key = process.env.STRIPE_SECRET_KEY;
    const keyType =
      typeof key === "string"
        ? key.startsWith("sk_live_")
          ? "sk_live"
          : key.startsWith("sk_test_")
            ? "sk_test"
            : "unknown"
        : "missing";

    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/b5521433-4fef-47a3-91d1-de50e108800b',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({sessionId:'debug-session',runId:'pre-fix',hypothesisId:'H9',location:'app/api/stripe/create-checkout-session/route.ts:POST:key_type',message:'Stripe secret key type (redacted)',data:{keyType},timestamp:Date.now()})}).catch(()=>{});
    // #endregion agent log

    const stripe = getStripeClient();

    const origin = request.nextUrl.origin;

    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/b5521433-4fef-47a3-91d1-de50e108800b',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({sessionId:'debug-session',runId:'pre-fix',hypothesisId:'H7',location:'app/api/stripe/create-checkout-session/route.ts:POST:origin',message:'computed origin for redirect URLs',data:{origin},timestamp:Date.now()})}).catch(()=>{});
    // #endregion agent log

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
      // #region agent log
      fetch('http://127.0.0.1:7242/ingest/b5521433-4fef-47a3-91d1-de50e108800b',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({sessionId:'debug-session',runId:'pre-fix',hypothesisId:'H4',location:'app/api/stripe/create-checkout-session/route.ts:POST:no_url',message:'Stripe session created but missing url',data:{hasId:!!session.id},timestamp:Date.now()})}).catch(()=>{});
      // #endregion agent log

      return NextResponse.json(
        { error: "Unable to create Stripe Checkout session" },
        { status: 500 }
      );
    }

    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/b5521433-4fef-47a3-91d1-de50e108800b',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({sessionId:'debug-session',runId:'pre-fix',hypothesisId:'H4',location:'app/api/stripe/create-checkout-session/route.ts:POST:success',message:'Stripe session created with url',data:{hasId:!!session.id},timestamp:Date.now()})}).catch(()=>{});
    // #endregion agent log

    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/b5521433-4fef-47a3-91d1-de50e108800b',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({sessionId:'debug-session',runId:'pre-fix',hypothesisId:'H9',location:'app/api/stripe/create-checkout-session/route.ts:POST:session_mode',message:'Stripe session mode flags',data:{livemode:!!(session as any).livemode,mode:session.mode ?? null},timestamp:Date.now()})}).catch(()=>{});
    // #endregion agent log

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Error creating Stripe Checkout session:", error);

    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/b5521433-4fef-47a3-91d1-de50e108800b',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({sessionId:'debug-session',runId:'pre-fix',hypothesisId:'H4',location:'app/api/stripe/create-checkout-session/route.ts:POST:catch',message:'exception thrown',data:{errorName:error instanceof Error?error.name:'unknown',errorMessage:error instanceof Error?error.message:String(error)},timestamp:Date.now()})}).catch(()=>{});
    // #endregion agent log

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

