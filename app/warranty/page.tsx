import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import WarrantyFaq from "@/components/WarrantyFaq";

export const metadata: Metadata = {
  title: "Lifetime Auto Warranty | Lifetime Auto Sales",
  description:
    "Lifetime Warranty protection included on qualifying vehicles as part of your out-the-door price, with coverage tiers, maintenance benefits, and nationwide support.",
};

export default function WarrantyPage() {
  return (
    <main className="bg-navy-dark">
      <Header />

      {/* Hero / Overview */}
      <section
        className="relative pt-[65px] overflow-hidden"
        style={{
          background: `
            radial-gradient(
              ellipse 80% 60% at 50% 45%,
              #3355a8 0%,
              #1F3E8E 35%,
              #14306b 70%,
              #0a1a40 100%
            ),
            radial-gradient(
              circle at 0% 0%,
              #060d20 0%,
              transparent 40%
            ),
            radial-gradient(
              circle at 100% 0%,
              #070e25 0%,
              transparent 35%
            ),
            radial-gradient(
              circle at 100% 100%,
              #050c1c 0%,
              transparent 45%
            ),
            radial-gradient(
              circle at 0% 100%,
              #060d20 0%,
              transparent 40%
            )
          `,
        }}
      >
        <div className="relative z-10 max-w-[1400px] mx-auto px-8 lg:px-16 pt-14 lg:pt-20 pb-20 lg:pb-24">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
            {/* Left Column - Text Content */}
            <div className="max-w-[600px] lg:max-w-[650px]">
              <h1 className="text-white text-[42px] lg:text-[48px] xl:text-[52px] leading-[1.08] tracking-[-0.03em] mb-5">
                <span className="font-serif italic font-black">
                  <span className="text-gold">Lifetime Auto</span> Warranty — Coverage{" "}
                  {"&"} Benefits
                </span>
              </h1>

              <p className="text-white/90 text-[15px] lg:text-[17px] leading-relaxed mb-6">
                Every qualifying vehicle includes Lifetime Warranty protection as
                part of your out-the-door price. Your consultant will help you
                compare protection levels and determine which option best fits
                your driving habits and ownership goals.
              </p>

              {/* Bullets */}
              <ul className="space-y-3 text-white/90 text-[15px] lg:text-[16px]">
                <li className="flex items-start gap-2">
                  <span className="text-white/60 mt-1">•</span>
                  <span>Coverage tiers for different ownership needs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white/60 mt-1">•</span>
                  <span>Maintenance benefits to reduce long-term costs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white/60 mt-1">•</span>
                  <span>Nationwide coverage and support (U.S. and Canada)</span>
                </li>
              </ul>
            </div>

            {/* Right Column - Image */}
            <div className="flex justify-center lg:justify-start">
              <Image
                src="/images/shield.png"
                alt="Lifetime Warranty Shield"
                width={2400}
                height={2800}
                className="w-full max-w-[500px] lg:max-w-[600px] xl:max-w-[700px] h-auto drop-shadow-[0_32px_70px_-14px_rgba(0,0,0,0.48)]"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Tiers */}
      <section
        className="relative py-24 lg:py-32 overflow-hidden"
        style={{
          background: `
            radial-gradient(
              ellipse 80% 70% at 50% 40%,
              #2a4a9a 0%,
              #1F3E8E 30%,
              #152d68 60%,
              #0a1a40 100%
            )
          `,
        }}
      >
        <div className="relative z-10 max-w-[1400px] mx-auto px-8 lg:px-16">
          <h2 className="text-gold text-[42px] lg:text-[48px] xl:text-[52px] font-serif italic text-center mb-4">
            Coverage Tiers
          </h2>
          <p className="text-white text-[18px] lg:text-[20px] text-center mb-12 lg:mb-16">
            Your consultant will help you compare protection levels and select
            the right fit.
          </p>

          {/* Center the 3 tier cards on large screens */}
          <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="relative rounded-2xl p-6 lg:p-8 bg-white/5 border border-white/10 transition-all duration-300">
              <h3 className="text-white text-[24px] lg:text-[28px] font-serif italic mb-2">
                Powertrain Coverage
              </h3>
              <p className="text-white/70 text-[14px] lg:text-[15px] italic mb-6">
                Protects core mechanical systems, including:
              </p>
              <ul className="space-y-2">
                <li className="text-white/90 text-[14px] lg:text-[15px] flex items-start gap-2">
                  <span className="text-white/60 mt-1">•</span>
                  <span>Engine components (internally lubricated parts)</span>
                </li>
                <li className="text-white/90 text-[14px] lg:text-[15px] flex items-start gap-2">
                  <span className="text-white/60 mt-1">•</span>
                  <span>
                    Transmission components (internally lubricated parts)
                  </span>
                </li>
                <li className="text-white/90 text-[14px] lg:text-[15px] flex items-start gap-2">
                  <span className="text-white/60 mt-1">•</span>
                  <span>Drive axle &amp; transfer case components</span>
                </li>
                <li className="text-white/90 text-[14px] lg:text-[15px] flex items-start gap-2">
                  <span className="text-white/60 mt-1">•</span>
                  <span>Turbocharger or supercharger components</span>
                </li>
                <li className="text-white/90 text-[14px] lg:text-[15px] flex items-start gap-2">
                  <span className="text-white/60 mt-1">•</span>
                  <span>Fuel system components</span>
                </li>
                <li className="text-white/90 text-[14px] lg:text-[15px] flex items-start gap-2">
                  <span className="text-white/60 mt-1">•</span>
                  <span>Cooling system components</span>
                </li>
              </ul>
            </div>
            <div className="relative rounded-2xl p-6 lg:p-8 bg-white/5 border border-white/10 transition-all duration-300">
              <h3 className="text-white text-[24px] lg:text-[28px] font-serif italic mb-2">
                Essentials Coverage
              </h3>
              <p className="text-white/70 text-[14px] lg:text-[15px] italic mb-6">
                (Adds to Powertrain)
              </p>
              <ul className="space-y-2">
                <li className="text-white/90 text-[14px] lg:text-[15px] flex items-start gap-2">
                  <span className="text-white/60 mt-1">•</span>
                  <span>Air conditioning system components</span>
                </li>
                <li className="text-white/90 text-[14px] lg:text-[15px] flex items-start gap-2">
                  <span className="text-white/60 mt-1">•</span>
                  <span>Steering &amp; suspension components</span>
                </li>
                <li className="text-white/90 text-[14px] lg:text-[15px] flex items-start gap-2">
                  <span className="text-white/60 mt-1">•</span>
                  <span>Brake system components</span>
                </li>
                <li className="text-white/90 text-[14px] lg:text-[15px] flex items-start gap-2">
                  <span className="text-white/60 mt-1">•</span>
                  <span>
                    Electrical components (windows, seats, locks, sensors,
                    ignition)
                  </span>
                </li>
                <li className="text-white/90 text-[14px] lg:text-[15px] flex items-start gap-2">
                  <span className="text-white/60 mt-1">•</span>
                  <span>Rental car reimbursement (benefit included)</span>
                </li>
              </ul>
            </div>
            <div className="relative rounded-2xl p-6 lg:p-8 bg-white/5 border border-white/10 transition-all duration-300">
              <h3 className="text-white text-[24px] lg:text-[28px] font-serif italic mb-2">
                Plus Coverage
              </h3>
              <p className="text-white/70 text-[14px] lg:text-[15px] italic mb-6">
                (Adds to Essentials)
              </p>
              <ul className="space-y-2">
                <li className="text-white/90 text-[14px] lg:text-[15px] flex items-start gap-2">
                  <span className="text-white/60 mt-1">•</span>
                  <span>Expanded cooling system components</span>
                </li>
                <li className="text-white/90 text-[14px] lg:text-[15px] flex items-start gap-2">
                  <span className="text-white/60 mt-1">•</span>
                  <span>Expanded suspension components</span>
                </li>
                <li className="text-white/90 text-[14px] lg:text-[15px] flex items-start gap-2">
                  <span className="text-white/60 mt-1">•</span>
                  <span>Additional fuel system components</span>
                </li>
                <li className="text-white/90 text-[14px] lg:text-[15px] flex items-start gap-2">
                  <span className="text-white/60 mt-1">•</span>
                  <span>Cruise control system components</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Full-width EV & Hybrid block below */}
          <div className="mt-6 lg:mt-8">
            <div className="relative rounded-2xl p-6 lg:p-8 bg-white/5 border border-white/10 transition-all duration-300">
              <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 items-start">
                <div className="lg:col-span-1">
                  <h3 className="text-white text-[24px] lg:text-[28px] font-serif italic mb-2">
                    {"EV & Hybrid"} Coverage
                  </h3>
                  <p className="text-white/70 text-[14px] lg:text-[15px] italic">
                    Qualifying EV and Hybrid vehicles receive specialized
                    protection, including:
                  </p>
                </div>
                <div className="lg:col-span-2">
                  <ul className="space-y-2">
                    <li className="text-white/90 text-[14px] lg:text-[15px] flex items-start gap-2">
                      <span className="text-white/60 mt-1">•</span>
                      <span>Drive battery &amp; electric motor</span>
                    </li>
                    <li className="text-white/90 text-[14px] lg:text-[15px] flex items-start gap-2">
                      <span className="text-white/60 mt-1">•</span>
                      <span>Electronic control modules &amp; ECU systems</span>
                    </li>
                    <li className="text-white/90 text-[14px] lg:text-[15px] flex items-start gap-2">
                      <span className="text-white/60 mt-1">•</span>
                      <span>Wiring harnesses &amp; sensors</span>
                    </li>
                    <li className="text-white/90 text-[14px] lg:text-[15px] flex items-start gap-2">
                      <span className="text-white/60 mt-1">•</span>
                      <span>Gearbox &amp; hybrid drivetrain components</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Benefits */}
      <section
        className="relative py-24 lg:py-32 overflow-hidden"
        style={{
          background: `
            radial-gradient(
              ellipse 80% 70% at 50% 40%,
              #2a4a9a 0%,
              #1F3E8E 30%,
              #152d68 60%,
              #0a1a40 100%
            )
          `,
        }}
      >
        <div className="relative z-10 max-w-[900px] mx-auto px-8 lg:px-16">
          <h2 className="text-gold text-[42px] lg:text-[48px] xl:text-[52px] font-serif italic text-center mb-12 lg:mb-16">
            Maintenance Benefits
          </h2>

          <p className="text-white text-[18px] lg:text-[20px] text-center mb-10">
            Designed to reduce long-term ownership costs and support proper
            vehicle care:
          </p>

          <ul className="space-y-4 lg:space-y-5 max-w-[720px] mx-auto">
            <li className="text-white text-[17px] lg:text-[19px] font-semibold flex items-start gap-2">
              <span className="text-white/60 mt-1">•</span>
              <span>Oil &amp; filter changes</span>
            </li>
            <li className="text-white text-[17px] lg:text-[19px] font-semibold flex items-start gap-2">
              <span className="text-white/60 mt-1">•</span>
              <span>Tire rotation</span>
            </li>
            <li className="text-white text-[17px] lg:text-[19px] font-semibold flex items-start gap-2">
              <span className="text-white/60 mt-1">•</span>
              <span>Wheel alignment</span>
            </li>
            <li className="text-white text-[17px] lg:text-[19px] font-semibold flex items-start gap-2">
              <span className="text-white/60 mt-1">•</span>
              <span>Cooling system service</span>
            </li>
            <li className="text-white text-[17px] lg:text-[19px] font-semibold flex items-start gap-2">
              <span className="text-white/60 mt-1">•</span>
              <span>Battery replacement (one-time)</span>
            </li>
            <li className="text-white text-[17px] lg:text-[19px] font-semibold flex items-start gap-2">
              <span className="text-white/60 mt-1">•</span>
              <span>Brake pads/shoes (one-time parts benefit)</span>
            </li>
            <li className="text-white text-[17px] lg:text-[19px] font-semibold flex items-start gap-2">
              <span className="text-white/60 mt-1">•</span>
              <span>Front wiper blade replacement</span>
            </li>
          </ul>

          <p className="text-white/70 text-[14px] lg:text-[15px] text-center italic mt-10">
            Additional Hi-Line upgrade available
          </p>
        </div>
      </section>

      {/* Additional Ownership Benefits */}
      <section
        className="relative py-24 lg:py-32 overflow-hidden"
        style={{
          background: `
            radial-gradient(
              ellipse 80% 70% at 50% 40%,
              #2a4a9a 0%,
              #1F3E8E 30%,
              #152d68 60%,
              #0a1a40 100%
            )
          `,
        }}
      >
        <div className="relative z-10 max-w-[1200px] mx-auto px-8 lg:px-16">
          <h2 className="text-gold text-[42px] lg:text-[48px] xl:text-[52px] font-serif italic text-center mb-12 lg:mb-16">
            Additional Ownership Benefits
          </h2>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 lg:p-8">
              <h3 className="text-white text-[18px] lg:text-[20px] font-semibold mb-2">
                24/7 Roadside Assistance
              </h3>
              <p className="text-white/90 text-[15px] lg:text-[16px]">
                Towing, lockout, jump start, and flat tire support
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 lg:p-8">
              <h3 className="text-white text-[18px] lg:text-[20px] font-semibold mb-2">
                Auto Deductible Reimbursement (ADR)
              </h3>
              <p className="text-white/90 text-[15px] lg:text-[16px]">
                Help offset deductible costs for qualifying events
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 lg:p-8">
              <h3 className="text-white text-[18px] lg:text-[20px] font-semibold mb-2">
                Vehicle Replacement Benefit
              </h3>
              <p className="text-white/90 text-[15px] lg:text-[16px]">
                Replacement benefit may apply for qualifying loss events
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 lg:p-8 md:col-span-3">
              <h3 className="text-white text-[18px] lg:text-[20px] font-semibold mb-2">
                Nationwide Coverage
              </h3>
              <p className="text-white/90 text-[15px] lg:text-[16px]">
                Coverage throughout the U.S. and Canada
              </p>
            </div>
          </div>
        </div>
      </section>

      <WarrantyFaq />

      {/* Eligibility Review */}
      <section
        className="relative py-24 lg:py-32 overflow-hidden"
        style={{
          background: `
            radial-gradient(
              ellipse 80% 70% at 50% 40%,
              #2a4a9a 0%,
              #1F3E8E 30%,
              #152d68 60%,
              #0a1a40 100%
            )
          `,
        }}
      >
        <div className="relative z-10 max-w-[900px] mx-auto px-8 lg:px-16">
          <h2 className="text-gold text-[42px] lg:text-[48px] xl:text-[52px] font-serif italic text-center mb-10">
            Eligibility Review
          </h2>

          <p className="text-white text-[18px] lg:text-[20px] text-center mb-10">
            Your consultant will review:
          </p>

          <ul className="space-y-3 max-w-[760px] mx-auto text-white/90 text-[15px] lg:text-[16px]">
            <li className="flex items-start gap-2">
              <span className="text-white/60 mt-1">•</span>
              <span>Vehicle year, mileage, and condition</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-white/60 mt-1">•</span>
              <span>Vehicle history and disclosures</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-white/60 mt-1">•</span>
              <span>Use case (personal vs. commercial)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-white/60 mt-1">•</span>
              <span>
                Custom modifications (e.g., lift kits, oversized tires)
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-white/60 mt-1">•</span>
              <span>EV vs. ICE qualification</span>
            </li>
          </ul>

          <p className="text-white/80 text-[14px] lg:text-[15px] text-center italic mt-10">
            Only vehicles that meet program standards are eligible for Lifetime
            Warranty coverage.
          </p>
        </div>
      </section>

      {/* Repair & Claims Process */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="relative z-10 max-w-[900px] mx-auto px-8 lg:px-16">
          <h2 className="text-gold text-[42px] lg:text-[48px] xl:text-[52px] font-serif italic text-center mb-10">
            Repair &amp; Claims Process
          </h2>

          <p className="text-white text-[18px] lg:text-[20px] text-center mb-10">
            Covered repairs may be performed through:
          </p>

          <ul className="space-y-3 max-w-[760px] mx-auto text-white/90 text-[15px] lg:text-[16px]">
            <li className="flex items-start gap-2">
              <span className="text-white/60 mt-1">•</span>
              <span>ASE-certified repair facilities</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-white/60 mt-1">•</span>
              <span>Dealership service centers</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-white/60 mt-1">•</span>
              <span>
                Specialized EV/Hybrid service facilities (where applicable)
              </span>
            </li>
          </ul>

          <p className="text-white/80 text-[14px] lg:text-[15px] text-center italic mt-10">
            Claims are submitted through licensed repair facilities and
            processed according to contract terms.
          </p>
        </div>
      </section>

      {/* Pricing Transparency */}
      <section
        className="relative py-24 lg:py-32 overflow-hidden"
        style={{
          background: `
            radial-gradient(
              ellipse 80% 70% at 50% 40%,
              #2a4a9a 0%,
              #1F3E8E 30%,
              #152d68 60%,
              #0a1a40 100%
            )
          `,
        }}
      >
        <div className="relative z-10 max-w-[900px] mx-auto px-8 lg:px-16">
          <h2 className="text-gold text-[42px] lg:text-[48px] xl:text-[52px] font-serif italic text-center mb-10">
            Pricing Transparency
          </h2>

          <p className="text-white text-[18px] lg:text-[20px] text-center mb-10">
            When vehicle options are presented, you will receive a clear line-item
            breakdown that includes:
          </p>

          <ul className="space-y-3 max-w-[760px] mx-auto text-white/90 text-[15px] lg:text-[16px]">
            <li className="flex items-start gap-2">
              <span className="text-white/60 mt-1">•</span>
              <span>Vehicle acquisition cost</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-white/60 mt-1">•</span>
              <span>Auction fees</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-white/60 mt-1">•</span>
              <span>Transportation</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-white/60 mt-1">•</span>
              <span>Reconditioning (if needed and approved)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-white/60 mt-1">•</span>
              <span>Warranty protection</span>
            </li>
          </ul>

          <p className="text-white/80 text-[14px] lg:text-[15px] text-center italic mt-10">
            This provides clarity before any purchase decision.
          </p>
        </div>
      </section>

      {/* Call to Action (keep identical to other pages) */}
      <section
        className="relative py-24 lg:py-32 overflow-hidden"
        style={{
          background: `
            radial-gradient(
              ellipse 80% 70% at 50% 40%,
              #2a4a9a 0%,
              #1F3E8E 30%,
              #152d68 60%,
              #0a1a40 100%
            )
          `,
        }}
      >
        <div className="relative z-10 max-w-[900px] mx-auto px-8 lg:px-16 text-center">
          <h2 className="text-gold text-[42px] lg:text-[48px] xl:text-[52px] font-serif italic mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-white text-[18px] lg:text-[20px] mb-10 italic">
            A quick conversation. Clear answers.
          </p>

          <a
            href="/get-started"
            className="inline-block bg-cta-red text-white text-[14px] lg:text-[15px] font-semibold px-6 lg:px-7 py-3.5 lg:py-4 rounded-[6px] mb-6 hover:bg-red-700 transition-colors duration-200"
          >
            Get Started
          </a>

          <div className="space-y-2">
            <p className="text-white/70 text-[13px] lg:text-[14px] italic">
              No obligation. Just clarity.
            </p>
            <p className="text-white/70 text-[13px] lg:text-[14px] italic">
              Warranty availability varies by vehicle.
            </p>
            <p className="text-white/70 text-[13px] lg:text-[14px] italic">
              Coverage details reviewed prior to purchase.
            </p>
          </div>

          <p className="text-white/60 text-[12px] lg:text-[13px] leading-relaxed italic mt-10">
            Coverage summaries are provided for informational purposes only. All
            coverage is subject to eligibility, terms, conditions, limitations,
            and exclusions. Refer to your service agreement for complete
            details.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
