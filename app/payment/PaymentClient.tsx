"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FeeScheduleTable from "@/components/FeeScheduleTable";
import {
  type SearchIntakeData,
  saveSearchIntakeData,
} from "@/lib/search-intake";
import { searchIntakeSchema, sanitizeSearchIntake } from "@/lib/search-intake-validation";

export default function PaymentClient() {
  const [agreed, setAgreed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const searchParams = useSearchParams();
  const [form, setForm] = useState<SearchIntakeData>({
    name: "",
    email: "",
    phone: "",
    vehicleLookingFor: "",
  });
  const [touched, setTouched] = useState<{
    name: boolean;
    email: boolean;
    phone: boolean;
    vehicleLookingFor: boolean;
    agreed: boolean;
  }>({
    name: false,
    email: false,
    phone: false,
    vehicleLookingFor: false,
    agreed: false,
  });

  const wasCanceled = searchParams?.get("canceled") === "1";

  const parsed = searchIntakeSchema.safeParse(form);
  const fieldErrors = parsed.success ? {} : parsed.error.flatten().fieldErrors;
  const canProceed = agreed && parsed.success && !isSubmitting;

  const showError = (field: keyof typeof touched) =>
    Boolean((touched[field] || submitAttempted) && (fieldErrors as any)?.[field]?.[0]);

  const getError = (field: keyof typeof touched) =>
    ((fieldErrors as any)?.[field]?.[0] as string | undefined) || "";

  const handlePayment = async () => {
    setSubmitAttempted(true);

    if (isSubmitting) return;

    if (!agreed) {
      setTouched((p) => ({ ...p, agreed: true }));
      return;
    }

    if (!parsed.success) {
      setTouched((p) => ({
        ...p,
        name: true,
        email: true,
        phone: true,
        vehicleLookingFor: true,
      }));
      return;
    }

    setIsSubmitting(true);

    try {
      const sanitized = sanitizeSearchIntake({
        ...form,
        submittedAt: new Date().toISOString(),
      });

      // Persist the form so the success page can log it.
      saveSearchIntakeData({
        ...sanitized,
      });

      // Create a Stripe Checkout Session and redirect the user
      const response = await fetch("/api/stripe/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: sanitized.name,
          email: sanitized.email,
          phone: sanitized.phone,
          vehicleLookingFor: sanitized.vehicleLookingFor,
        }),
      });

      if (!response.ok) {
        console.error("Failed to create Stripe Checkout session");
        alert(
          "We couldn't start your secure payment. Please try again or contact support."
        );
        return;
      }

      const data = await response.json();

      if (!data?.url) {
        console.error("Stripe Checkout session response missing url");
        alert(
          "We couldn't start your secure payment. Please try again or contact support."
        );
        return;
      }

      // Redirect to Stripe-hosted Checkout
      window.location.href = data.url;
    } catch (error) {
      console.error("Error starting Stripe Checkout session:", error);
      alert(
        "There was an error starting your payment. Please refresh and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#0a1a40]">
      <Header />

      <div className="pt-[65px] min-h-screen flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-[980px]">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* Header / Hook */}
            <div className="bg-gradient-to-r from-[#1F3E8E] to-[#152d68] px-8 py-8">
              <h1 className="text-white text-[28px] lg:text-[34px] font-bold">
                Secure Your Wholesale Advantage
              </h1>
              <p className="text-white/80 text-[15px] lg:text-[16px] mt-2 leading-relaxed">
                Stop overpaying at retail dealerships. Your $100 setup deposit
                secures a dedicated expert to source and verify vehicles for
                you—and it is fully credited toward your final consultant fee.
              </p>
            </div>

            <div className="px-6 lg:px-10 py-8">
              {wasCanceled && (
                <div className="mb-6 rounded-lg border border-yellow-300 bg-yellow-50 px-4 py-3 text-[14px] text-yellow-800">
                  Your payment was canceled on the secure checkout page. You can
                  try again below when you&apos;re ready.
                </div>
              )}

              <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
                {/* Left: Form + Pricing */}
                <div>
                  {/* Contact & Intent */}
                  <h2 className="text-[#1F3E8E] text-[20px] lg:text-[22px] font-bold mb-4">
                    Contact &amp; Intent
                  </h2>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="sm:col-span-2">
                      <label className="block text-gray-800 text-[14px] font-semibold mb-2">
                        Name <span className="text-red-600">*</span>
                      </label>
                      <input
                        value={form.name}
                        onChange={(e) =>
                          setForm((p) => ({ ...p, name: e.target.value }))
                        }
                        onBlur={() => setTouched((p) => ({ ...p, name: true }))}
                        required
                        aria-required="true"
                        aria-invalid={showError("name")}
                        aria-describedby={showError("name") ? "name-error" : undefined}
                        className={`w-full px-4 py-3 border rounded-lg text-[15px] focus:ring-2 outline-none ${
                          showError("name")
                            ? "border-red-400 focus:ring-red-200 focus:border-red-500"
                            : "border-gray-300 focus:ring-[#1F3E8E] focus:border-[#1F3E8E]"
                        }`}
                        placeholder="Full name"
                        autoComplete="name"
                      />
                      {showError("name") && (
                        <p id="name-error" className="mt-2 text-[12px] text-red-600">
                          {getError("name")}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-gray-800 text-[14px] font-semibold mb-2">
                        Email <span className="text-red-600">*</span>
                      </label>
                      <input
                        value={form.email}
                        onChange={(e) =>
                          setForm((p) => ({ ...p, email: e.target.value }))
                        }
                        onBlur={() => setTouched((p) => ({ ...p, email: true }))}
                        required
                        aria-required="true"
                        aria-invalid={showError("email")}
                        aria-describedby={showError("email") ? "email-error" : undefined}
                        className={`w-full px-4 py-3 border rounded-lg text-[15px] focus:ring-2 outline-none ${
                          showError("email")
                            ? "border-red-400 focus:ring-red-200 focus:border-red-500"
                            : "border-gray-300 focus:ring-[#1F3E8E] focus:border-[#1F3E8E]"
                        }`}
                        placeholder="you@email.com"
                        autoComplete="email"
                        inputMode="email"
                      />
                      {showError("email") && (
                        <p id="email-error" className="mt-2 text-[12px] text-red-600">
                          {getError("email")}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-gray-800 text-[14px] font-semibold mb-2">
                        Phone <span className="text-red-600">*</span>
                      </label>
                      <input
                        value={form.phone}
                        onChange={(e) =>
                          setForm((p) => ({ ...p, phone: e.target.value }))
                        }
                        onBlur={() => setTouched((p) => ({ ...p, phone: true }))}
                        required
                        aria-required="true"
                        aria-invalid={showError("phone")}
                        aria-describedby={showError("phone") ? "phone-error" : undefined}
                        className={`w-full px-4 py-3 border rounded-lg text-[15px] focus:ring-2 outline-none ${
                          showError("phone")
                            ? "border-red-400 focus:ring-red-200 focus:border-red-500"
                            : "border-gray-300 focus:ring-[#1F3E8E] focus:border-[#1F3E8E]"
                        }`}
                        placeholder="(555) 555-5555"
                        autoComplete="tel"
                        inputMode="tel"
                      />
                      {showError("phone") && (
                        <p id="phone-error" className="mt-2 text-[12px] text-red-600">
                          {getError("phone")}
                        </p>
                      )}
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-gray-800 text-[14px] font-semibold mb-2">
                        What vehicle are you looking for?{" "}
                        <span className="text-red-600">*</span>
                      </label>
                      <textarea
                        value={form.vehicleLookingFor}
                        onChange={(e) =>
                          setForm((p) => ({
                            ...p,
                            vehicleLookingFor: e.target.value,
                          }))
                        }
                        onBlur={() =>
                          setTouched((p) => ({ ...p, vehicleLookingFor: true }))
                        }
                        rows={4}
                        required
                        aria-required="true"
                        aria-invalid={showError("vehicleLookingFor")}
                        aria-describedby={
                          showError("vehicleLookingFor")
                            ? "vehicleLookingFor-error"
                            : undefined
                        }
                        className={`w-full px-4 py-3 border rounded-lg text-[15px] focus:ring-2 outline-none resize-none ${
                          showError("vehicleLookingFor")
                            ? "border-red-400 focus:ring-red-200 focus:border-red-500"
                            : "border-gray-300 focus:ring-[#1F3E8E] focus:border-[#1F3E8E]"
                        }`}
                        placeholder="Tell us the basics (Year, Make, Model, or Budget). Your consultant will call you to finalize the exact specs once your search is activated."
                      />
                      {showError("vehicleLookingFor") && (
                        <p
                          id="vehicleLookingFor-error"
                          className="mt-2 text-[12px] text-red-600"
                        >
                          {getError("vehicleLookingFor")}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Fee Schedule */}
                  <div className="mt-10">
                    <h2 className="text-[#1F3E8E] text-[20px] lg:text-[22px] font-bold mb-4">
                      Full Transparency: Consultant Fee Schedule
                    </h2>
                    <FeeScheduleTable />
                  </div>

                  {/* Transparent Pricing / Examples */}
                  <div className="mt-10 bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <h3 className="text-gray-900 text-[16px] font-semibold mb-3">
                      Transparent Pricing (Examples)
                    </h3>
                    <ul className="space-y-2 text-gray-700 text-[14px] lg:text-[15px]">
                      <li className="flex items-start gap-2">
                        <span className="text-gray-500 mt-1">•</span>
                        <span>
                          Vehicles up to $8,000: <strong>$500 Fee</strong>
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-gray-500 mt-1">•</span>
                        <span>
                          $8,001 - $12,000: <strong>$600 Fee</strong>
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-gray-500 mt-1">•</span>
                        <span>
                          $12,001 - $16,000: <strong>$800 Fee</strong>
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-gray-500 mt-1">•</span>
                        <span>
                          $25,000+: <strong>$1,500 Fee</strong>
                        </span>
                      </li>
                    </ul>
                    <p className="text-gray-600 text-[13px] lg:text-[14px] leading-relaxed mt-4">
                      Note: Our fee is a one-time flat fee based on the vehicle
                      price you choose. There are no commissions or dealer
                      markups. You stay in control by approving the final price
                      before we move forward.
                    </p>
                  </div>
                </div>

                {/* Right: Payment */}
                <div>
                  <h2 className="text-[#1F3E8E] text-[20px] lg:text-[22px] font-bold mb-4">
                    Final Step: Secure Setup &amp; Payment
                  </h2>

                  <div className="bg-white border border-gray-200 rounded-2xl p-6 lg:p-7 shadow-sm">
                    <div className="flex items-center justify-between mb-3">
                      <p className="text-gray-900 text-[16px] font-semibold">
                        Setup Deposit
                      </p>
                      <p className="text-[#1F3E8E] text-[28px] font-bold">$100</p>
                    </div>

                    <div className="text-gray-700 text-[14px] lg:text-[15px] leading-relaxed space-y-3">
                      <p>
                        <strong>What this covers:</strong> Initial sourcing,
                        market research, and vehicle reporting.
                      </p>
                      <p>
                        <strong>Credit confirmation:</strong> This $100 deposit
                        is applied directly toward your total consultant fee and
                        is not an additional charge.
                      </p>
                      <p>
                        <strong>Refund policy:</strong> 24-hour grace period for
                        a full refund before sourcing begins.
                      </p>
                    </div>

                    {/* Agreement Checkbox */}
                    <div className="mt-6">
                      <label className="flex items-start gap-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          checked={agreed}
                          onChange={(e) => {
                            setAgreed(e.target.checked);
                            setTouched((p) => ({ ...p, agreed: true }));
                          }}
                          className="mt-1 w-5 h-5 text-[#1F3E8E] border-gray-300 rounded focus:ring-[#1F3E8E] cursor-pointer"
                        />
                        <span className="text-gray-700 text-[14px] group-hover:text-gray-900 transition-colors">
                          I understand and agree to the terms and fee schedule
                          above.
                        </span>
                      </label>
                      {submitAttempted && !agreed && (
                        <p className="mt-2 text-[12px] text-red-600">
                          Please confirm the agreement to continue.
                        </p>
                      )}
                    </div>

                    {/* Payment Button */}
                    <button
                      onClick={handlePayment}
                      disabled={isSubmitting}
                      aria-disabled={!canProceed}
                      className={`mt-6 w-full py-4 rounded-lg text-[16px] font-semibold transition-all duration-200 ${
                        canProceed
                          ? "bg-cta-red text-white hover:bg-red-700 cursor-pointer shadow-lg"
                          : "bg-gray-200 text-gray-600 cursor-pointer"
                      }`}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                              fill="none"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                          </svg>
                          Processing...
                        </span>
                      ) : (
                        "Pay $100 Setup Deposit & Begin Search"
                      )}
                    </button>

                    <div className="mt-5 flex items-center justify-center gap-2 text-gray-400 text-[13px]">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                      </svg>
                      <span>Secure card payment processing</span>
                    </div>

                    {!canProceed && (
                      <p className="mt-3 text-[12px] text-gray-500 text-center">
                        Complete the form and check the agreement box to
                        continue.
                      </p>
                    )}
                  </div>

                  <div className="mt-6 text-center">
                    <a
                      href="/get-started"
                      className="text-white/60 text-[14px] hover:text-white transition-colors"
                    >
                      ← Back
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

