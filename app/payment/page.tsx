"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { loadIntakeData } from "@/lib/intake-types";
import { getAttributionFormFields } from "@/lib/attribution";

export default function PaymentPage() {
  const router = useRouter();
  const [agreed, setAgreed] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Verify we have intake data
    const data = loadIntakeData();
    if (!data) {
      router.replace("/intake");
      return;
    }
    setIsLoaded(true);
  }, [router]);

  const handlePayment = async () => {
    if (!agreed || isSubmitting) return;
    
    setIsSubmitting(true);
    
    try {
      // Get attribution data for the payment record
      const attributionFields = getAttributionFormFields();
      const intakeData = loadIntakeData();
      
      // TODO: Integrate with Stripe or payment processor
      // After payment is successfully processed, submit to GoHighLevel
      // For now, simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Submit payment data to GoHighLevel
      try {
        const response = await fetch("/api/gohighlevel/payment", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            amount: 100,
            paymentMethod: "setup_deposit",
            transactionId: `TXN-${Date.now()}`, // Replace with actual transaction ID from payment processor
            intakeData: intakeData || {},
            attributionFields,
          }),
        });

        if (!response.ok) {
          console.error("Failed to submit payment to GoHighLevel");
          // Don't block user flow if GoHighLevel submission fails
        }
      } catch (error) {
        console.error("Error submitting payment to GoHighLevel:", error);
        // Don't block user flow if GoHighLevel submission fails
      }
      
      // Redirect to success page (or show success state)
      alert("Payment successful! A consultant will be in touch shortly.");
      router.push("/");
    } catch (error) {
      console.error("Payment processing error:", error);
      alert("There was an error processing your payment. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isLoaded) {
    return (
      <main className="min-h-screen bg-[#f8fafc]">
        <Header />
        <div className="pt-[65px] min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#1F3E8E]"></div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0a1a40]">
      <Header />

      <div className="pt-[65px] min-h-screen flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-[600px]">
          {/* Payment Card */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-[#1F3E8E] to-[#152d68] px-8 py-6">
              <h1 className="text-white text-[26px] lg:text-[30px] font-bold">
                Secure Setup & Start Sourcing
              </h1>
            </div>

            {/* Body */}
            <div className="px-8 py-8">
              {/* Setup Deposit */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-[#1F3E8E] text-[22px] font-bold">
                    Setup Deposit
                  </h2>
                  <span className="text-[#1F3E8E] text-[28px] font-bold">
                    $100
                  </span>
                </div>
                
                <p className="text-gray-700 text-[15px] lg:text-[16px] leading-relaxed">
                  This $100 setup deposit, which is applied directly toward your total consultant fee and is not an additional charge, authorizes your consultant to begin sourcing and verifying wholesale vehicles that match your wish list.
                </p>
              </div>

              {/* What This Covers */}
              <div className="mb-8">
                <h3 className="text-gray-800 text-[16px] font-semibold mb-4">
                  What this covers:
                </h3>
                <ul className="space-y-3">
                  {[
                    "Initial sourcing",
                    "Market research",
                    "Vehicle reporting",
                    "Applied directly toward your total consultant fee",
                    "Not an additional charge",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-[15px]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Refund Policy */}
              <div className="mb-8 bg-gray-50 rounded-xl p-6">
                <h3 className="text-gray-800 text-[16px] font-semibold mb-3">
                  Refund Policy
                </h3>
                <div className="text-gray-600 text-[14px] lg:text-[15px] leading-relaxed space-y-3">
                  <p>
                    You have a <strong>24-hour grace period</strong> after submitting your setup deposit to request a full refund.
                  </p>
                  <p>
                    After 24 hours, or once your consultant begins sending vehicle reports or market findings (whichever comes first), the setup deposit becomes non-refundable, as services have started.
                  </p>
                </div>
              </div>

              {/* Agreement Checkbox */}
              <div className="mb-8">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="mt-1 w-5 h-5 text-[#1F3E8E] border-gray-300 rounded focus:ring-[#1F3E8E] cursor-pointer"
                  />
                  <span className="text-gray-700 text-[15px] group-hover:text-gray-900 transition-colors">
                    I understand and agree to the terms above
                  </span>
                </label>
              </div>

              {/* Payment Button */}
              <button
                onClick={handlePayment}
                disabled={!agreed || isSubmitting}
                className={`w-full py-4 rounded-lg text-[17px] font-semibold transition-all duration-200 ${
                  agreed && !isSubmitting
                    ? "bg-cta-red text-white hover:bg-red-700 cursor-pointer shadow-lg"
                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Processing...
                  </span>
                ) : (
                  "Pay $100 & Start Sourcing"
                )}
              </button>

              {/* Security Note */}
              <div className="mt-6 flex items-center justify-center gap-2 text-gray-400 text-[13px]">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span>Secure payment processing</span>
              </div>
            </div>
          </div>

          {/* Back Link */}
          <div className="mt-6 text-center">
            <a
              href="/results"
              className="text-white/60 text-[14px] hover:text-white transition-colors"
            >
              ← Back to summary
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

