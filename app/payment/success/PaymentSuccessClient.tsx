"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { loadIntakeData } from "@/lib/intake-types";
import { getAttributionFormFields } from "@/lib/attribution";

type Status =
  | "checking"
  | "unpaid"
  | "submitting_ghl"
  | "success"
  | "error";

export default function PaymentSuccessClient() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [status, setStatus] = useState<Status>("checking");
  const [message, setMessage] = useState<string>("");

  // #region agent log
  fetch('http://127.0.0.1:7242/ingest/b5521433-4fef-47a3-91d1-de50e108800b',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({sessionId:'debug-session',runId:'pre-fix',hypothesisId:'H3',location:'app/payment/success/PaymentSuccessClient.tsx:render',message:'rendering PaymentSuccessClient',data:{hasSearchParams:!!searchParams},timestamp:Date.now()})}).catch(()=>{});
  // #endregion agent log

  useEffect(() => {
    const run = async () => {
      const sessionId = searchParams?.get("session_id");

      // #region agent log
      fetch('http://127.0.0.1:7242/ingest/b5521433-4fef-47a3-91d1-de50e108800b',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({sessionId:'debug-session',runId:'pre-fix',hypothesisId:'H3',location:'app/payment/success/PaymentSuccessClient.tsx:run:init',message:'starting success handler',data:{hasSessionId:!!sessionId},timestamp:Date.now()})}).catch(()=>{});
      // #endregion agent log

      if (!sessionId) {
        setStatus("error");
        setMessage(
          "We could not verify your payment because a session ID was not provided."
        );
        return;
      }

      // Avoid double-submitting to GoHighLevel if the page is refreshed
      const submittedKey = `stripe_session_${sessionId}_ghl_submitted`;
      const alreadySubmitted =
        typeof window !== "undefined" &&
        sessionStorage.getItem(submittedKey) === "1";

      try {
        // 1) Confirm payment with Stripe
        const confirmRes = await fetch(
          `/api/stripe/confirm-session?session_id=${encodeURIComponent(
            sessionId
          )}`
        );

        const confirmData = await confirmRes.json();

        // #region agent log
        fetch('http://127.0.0.1:7242/ingest/b5521433-4fef-47a3-91d1-de50e108800b',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({sessionId:'debug-session',runId:'pre-fix',hypothesisId:'H5',location:'app/payment/success/PaymentSuccessClient.tsx:confirm:result',message:'confirm-session response received',data:{ok:confirmRes.ok,status:confirmRes.status,paid:!!confirmData?.paid},timestamp:Date.now()})}).catch(()=>{});
        // #endregion agent log

        if (!confirmRes.ok || !confirmData?.paid) {
          setStatus("unpaid");
          setMessage(
            "Your payment has not been marked as completed yet. If you just paid, please wait a moment and refresh, or contact support."
          );
          return;
        }

        // If we've already recorded this payment in GoHighLevel, just show success
        if (alreadySubmitted) {
          setStatus("success");
          setMessage(
            "Your payment was already recorded. A consultant will be in touch shortly."
          );
          return;
        }

        // 2) Submit payment info to GoHighLevel
        setStatus("submitting_ghl");

        const intakeData = loadIntakeData();
        const attributionFields = getAttributionFormFields();

        const ghlRes = await fetch("/api/gohighlevel/payment", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            amount: 100,
            paymentMethod: "setup_deposit_stripe",
            transactionId:
              confirmData.paymentIntentId || confirmData.sessionId || sessionId,
            intakeData: intakeData || {},
            attributionFields,
          }),
        });

        // #region agent log
        fetch('http://127.0.0.1:7242/ingest/b5521433-4fef-47a3-91d1-de50e108800b',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({sessionId:'debug-session',runId:'pre-fix',hypothesisId:'H6',location:'app/payment/success/PaymentSuccessClient.tsx:ghl:result',message:'gohighlevel payment response received',data:{ok:ghlRes.ok,status:ghlRes.status},timestamp:Date.now()})}).catch(()=>{});
        // #endregion agent log

        if (!ghlRes.ok) {
          console.error("Failed to submit payment to GoHighLevel");
          setStatus("error");
          setMessage(
            "Your payment was successful, but we were unable to log it in our system automatically. A consultant will still be able to assist you—please contact support if you have questions."
          );
          return;
        }

        if (typeof window !== "undefined") {
          sessionStorage.setItem(submittedKey, "1");
        }

        setStatus("success");
        setMessage(
          "Payment successful! Your setup deposit has been received. A consultant will be in touch shortly."
        );
      } catch (error) {
        console.error("Error during payment success handling:", error);

        // #region agent log
        fetch('http://127.0.0.1:7242/ingest/b5521433-4fef-47a3-91d1-de50e108800b',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({sessionId:'debug-session',runId:'pre-fix',hypothesisId:'H5',location:'app/payment/success/PaymentSuccessClient.tsx:run:catch',message:'exception thrown during success handling',data:{errorName:error instanceof Error?error.name:'unknown',errorMessage:error instanceof Error?error.message:String(error)},timestamp:Date.now()})}).catch(()=>{});
        // #endregion agent log

        setStatus("error");
        setMessage(
          "Your payment may have gone through, but we hit an error while confirming it. Please contact support so we can verify and finalize your account."
        );
      }
    };

    run();
    // Intentionally exclude dependencies to run only on mount with initial searchParams
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isLoading = status === "checking" || status === "submitting_ghl";

  return (
    <main className="min-h-screen bg-[#0a1a40]">
      <Header />

      <div className="pt-[65px] min-h-screen flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-[600px]">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-[#1F3E8E] to-[#152d68] px-8 py-6">
              <h1 className="text-white text-[26px] lg:text-[30px] font-bold">
                Payment Status
              </h1>
            </div>

            <div className="px-8 py-8">
              {isLoading && (
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#1F3E8E]" />
                  <p className="text-gray-600 text-[15px]">
                    Confirming your payment and updating your account...
                  </p>
                </div>
              )}

              {!isLoading && (
                <>
                  <p className="text-gray-800 text-[15px] leading-relaxed mb-6">
                    {message}
                  </p>

                  {status === "success" && (
                    <div className="space-y-4">
                      <p className="text-gray-700 text-[15px]">
                        You&apos;re all set. We&apos;ll begin sourcing and
                        verifying wholesale vehicles that match your wish list.
                      </p>
                      <button
                        onClick={() => router.push("/")}
                        className="w-full py-3.5 rounded-lg bg-cta-red text-white text-[16px] font-semibold hover:bg-red-700 transition-colors duration-200"
                      >
                        Return to Home
                      </button>
                    </div>
                  )}

                  {status !== "success" && (
                    <div className="space-y-3">
                      <button
                        onClick={() => router.push("/payment")}
                        className="w-full py-3.5 rounded-lg bg-[#1F3E8E] text-white text-[16px] font-semibold hover:bg-[#152d68] transition-colors duration-200"
                      >
                        Go Back to Payment
                      </button>
                      <button
                        onClick={() => router.push("/contact")}
                        className="w-full py-3.5 rounded-lg border border-gray-300 text-[15px] font-semibold text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                      >
                        Contact Support
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

