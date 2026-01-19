"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { hasAttribution, getAttributionParams } from "@/lib/attribution";

export default function ChoiceHubPage() {
  const router = useRouter();

  // Redirect to attribution gate if no attribution captured
  useEffect(() => {
    if (!hasAttribution()) {
      router.replace("/get-started");
    }
  }, [router]);

  // Build Calendly URL with attribution params
  // TODO: CLIENT ACTION REQUIRED - Replace with actual Calendly link
  const calendlyBaseUrl = "https://calendly.com/your-calendly-link";
  const attributionParams = getAttributionParams();
  const calendlyUrl = `${calendlyBaseUrl}?${attributionParams.toString()}`;

  return (
    <main className="min-h-screen bg-[#0a1a40]">
      <Header />

      <div className="pt-[65px] min-h-screen flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-[700px]">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-white text-[36px] lg:text-[44px] font-bold mb-3">
              Let&apos;s Get Started
            </h1>
            <p className="text-white/70 text-[17px] lg:text-[19px]">
              Choose the option that works best for you. Most clients start with the intake — it only takes a few minutes.
            </p>
          </div>

          {/* Options */}
          <div className="space-y-5">
            {/* OPTION 1 — PRIMARY: Intake Form */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-gold">
              <div className="bg-gold/10 px-6 py-2">
                <span className="text-gold text-[12px] font-bold uppercase tracking-wider">
                  Recommended
                </span>
              </div>
              <div className="px-8 py-6">
                <h2 className="text-[#1F3E8E] text-[22px] lg:text-[24px] font-bold mb-2">
                  Start Your Vehicle Search (Quick Intake)
                </h2>
                <p className="text-gray-600 text-[15px] lg:text-[16px] mb-5">
                  Complete a short intake, review the fee schedule, and submit the $100 setup deposit to activate your search.
                </p>
                <a
                  href="/payment"
                  className="inline-block w-full text-center bg-cta-red text-white text-[16px] font-semibold py-4 rounded-lg hover:bg-red-700 transition-colors duration-200"
                >
                  Pay $100 Setup Deposit & Begin Search
                </a>
              </div>
            </div>

            {/* OPTION 2 — SECONDARY: Schedule a Call */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="px-8 py-6">
                <h2 className="text-[#1F3E8E] text-[20px] lg:text-[22px] font-bold mb-2">
                  Schedule a Call
                </h2>
                <p className="text-gray-600 text-[15px] lg:text-[16px] mb-5">
                  Prefer to talk first? Book a quick call with a buying consultant.
                </p>
                <a
                  href={calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full text-center bg-[#1F3E8E] text-white text-[16px] font-semibold py-3.5 rounded-lg hover:bg-[#152d68] transition-colors duration-200"
                >
                  Schedule a Call
                </a>
              </div>
            </div>

            {/* OPTION 3 — TERTIARY: Send a Message */}
            <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
              <div className="px-8 py-6">
                <h2 className="text-white text-[18px] lg:text-[20px] font-bold mb-2">
                  Send Us a Message
                </h2>
                <p className="text-white/60 text-[14px] lg:text-[15px] mb-4">
                  Have a quick question? Send us a message and we&apos;ll follow up.
                </p>
                <a
                  href="/contact/message"
                  className="inline-block w-full text-center border border-white/30 text-white text-[15px] font-semibold py-3 rounded-lg hover:bg-white/10 transition-colors duration-200"
                >
                  Send a Message
                </a>
              </div>
            </div>
          </div>

          {/* Footer Contact Info (Low Emphasis) */}
          <div className="mt-10 text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-white/50 text-[14px]">
              <a 
                href="tel:+18005551234" 
                className="flex items-center gap-2 hover:text-white/70 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (800) 555-1234
              </a>
              <a 
                href="mailto:support@lifetimeauto.com" 
                className="flex items-center gap-2 hover:text-white/70 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                support@lifetimeauto.com
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

