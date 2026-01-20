"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getAttributionFormFields } from "@/lib/attribution";
import { loadSearchIntakeData } from "@/lib/search-intake";
import { SITE_PHONE_DISPLAY, SITE_PHONE_TEL } from "@/lib/site-contact";

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

  useEffect(() => {
    const run = async () => {
      const sessionId = searchParams?.get("session_id");

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

        const intakeData = loadSearchIntakeData();
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
        setMessage("You’re all set! Your search is now active.");
      } catch (error) {
        console.error("Error during payment success handling:", error);

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
    <main className="min-h-screen bg-black">
      <Header />

      <div className="pt-[65px] min-h-screen flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-[600px]">
          <div className="border border-blue-500/30 bg-black/60 rounded-2xl shadow-2xl overflow-hidden">
            <div className="px-8 py-8">
              {isLoading && (
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-400" />
                  <p className="text-blue-200/80 text-[15px]">
                    Confirming your payment and updating your account...
                  </p>
                </div>
              )}

              {!isLoading && (
                <>
                  <h1 className="text-blue-400 text-[26px] lg:text-[30px] font-bold mb-2">
                    {status === "success"
                      ? "You’re All Set! Your Search is Now Active."
                      : "Payment Status"}
                  </h1>
                  <p className="text-blue-200/80 text-[15px] leading-relaxed mb-6">
                    {status === "success"
                      ? "We’ve received your $100 setup deposit, which has been credited to your account."
                      : message}
                  </p>

                  {status === "success" && (
                    <div className="space-y-4">
                      <div className="border border-blue-500/20 rounded-xl p-5 bg-black/40">
                        <h2 className="text-blue-300 font-semibold mb-3">
                          What Happens Next
                        </h2>
                        <ul className="space-y-3 text-blue-200/80 text-[14px] leading-relaxed">
                          <li>
                            <span className="text-blue-300 font-semibold">
                              Expert Review:
                            </span>{" "}
                            One of our professional wholesale buyers is reviewing
                            your vehicle interests right now.
                          </li>
                          <li>
                            <span className="text-blue-300 font-semibold">
                              The Interview:
                            </span>{" "}
                            We will call you at the number provided within{" "}
                            <span className="text-blue-200 font-semibold">
                              24 business hours
                            </span>{" "}
                            to conduct your detailed “Wish List” interview.
                          </li>
                          <li>
                            <span className="text-blue-300 font-semibold">
                              The Hunt Begins:
                            </span>{" "}
                            Once we have your exact specs, we hit the wholesale
                            markets to find your match.
                          </li>
                        </ul>
                      </div>

                      <p className="text-blue-200/70 text-[13px] leading-relaxed">
                        Pro-Tip: If you have a specific question before we call,
                        feel free to reply to your confirmation email or call us
                        at{" "}
                        <a
                          href={`tel:${SITE_PHONE_TEL}`}
                          className="text-blue-300 hover:text-blue-200 underline underline-offset-2"
                        >
                          {SITE_PHONE_DISPLAY}
                        </a>
                        .
                      </p>

                      <button
                        onClick={() => router.push("/")}
                        className="w-full py-3.5 rounded-lg bg-blue-500 text-black text-[16px] font-semibold hover:bg-blue-400 transition-colors duration-200"
                      >
                        Return to Home
                      </button>
                    </div>
                  )}

                  {status !== "success" && (
                    <div className="space-y-3">
                      <button
                        onClick={() => router.push("/payment")}
                        className="w-full py-3.5 rounded-lg bg-blue-500 text-black text-[16px] font-semibold hover:bg-blue-400 transition-colors duration-200"
                      >
                        Go Back to Payment
                      </button>
                      <button
                        onClick={() => router.push("/contact")}
                        className="w-full py-3.5 rounded-lg border border-blue-500/30 text-[15px] font-semibold text-blue-200 hover:bg-blue-500/10 transition-colors duration-200"
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

