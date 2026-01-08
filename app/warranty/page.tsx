import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import CostCard from "@/components/CostCard";
import ValueCallout from "@/components/ValueCallout";

export const metadata: Metadata = {
  title: "Lifetime Auto Lifetime Warranty | Lifetime Auto Sales",
  description: "Protection that lasts as long as you own the vehicle. Lifetime warranty coverage on qualifying vehicles with nationwide protection and maintenance benefits.",
};

export default function WarrantyPage() {
  return (
    <main className="bg-navy-dark">
      <Header />

      {/* Screen 1: Hero / Overview */}
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
                  <span className="text-gold">Lifetime Auto</span> Lifetime Warranty
                </span>
              </h1>

              <p className="text-white text-[17px] lg:text-[19px] xl:text-[21px] font-normal leading-snug mb-5 italic">
                Protection that lasts as long as you own the vehicle —
              </p>

              <p className="text-white/90 text-[15px] lg:text-[17px] leading-relaxed mb-6">
                Buying pre-owned shouldn&apos;t feel risky.
                <br className="hidden lg:block" />
                That&apos;s why qualifying vehicles may include a Lifetime Warranty.
              </p>

              {/* Bullets */}
              <ul className="space-y-3 text-white/90 text-[15px] lg:text-[16px]">
                <li className="flex items-start gap-2">
                  <span className="text-white/60 mt-1">•</span>
                  <span>Lifetime coverage on qualifying vehicles</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white/60 mt-1">•</span>
                  <span>Nationwide protection & support</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white/60 mt-1">•</span>
                  <span>Reviewed with you before you buy</span>
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

      {/* Screen 2: Built for Long-Term Ownership */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        {/* Background image layer */}
        <Image
          src="/sections/warranty.png"
          alt=""
          fill
          className="object-cover"
          style={{ objectPosition: "right center" }}
        />

        {/* Overlay layers */}
        <div className="absolute inset-0 bg-[#1F3E8E]/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1F3E8E]/60 via-[#1F3E8E]/40 to-transparent" />

        <div className="relative z-10 max-w-[1400px] mx-auto px-8 lg:px-16">
          <h2 className="text-gold text-[42px] lg:text-[48px] xl:text-[52px] font-serif italic text-center mb-12 lg:mb-16">
            Built for Long-Term Ownership
          </h2>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-[1200px] mx-auto mb-10">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 lg:p-8 backdrop-blur-sm">
              <h3 className="text-white text-[18px] lg:text-[20px] font-semibold mb-2">
                No mileage limits on covered components
              </h3>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 lg:p-8 backdrop-blur-sm">
              <h3 className="text-white text-[18px] lg:text-[20px] font-semibold mb-2">
                Coverage lasts as long as you own the vehicle
              </h3>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 lg:p-8 backdrop-blur-sm">
              <h3 className="text-white text-[18px] lg:text-[20px] font-semibold mb-2">
                Valid throughout the U.S. & Canada
              </h3>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 lg:p-8 backdrop-blur-sm">
              <h3 className="text-white text-[18px] lg:text-[20px] font-semibold mb-2">
                Buyer-first review before you commit
              </h3>
            </div>
          </div>

          <p className="text-white text-[18px] lg:text-[20px] text-center italic">
            No guessing. No surprises.
          </p>
        </div>
      </section>

      {/* Screen 3: Coverage Levels */}
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
            Three Coverage Levels — Built for How Long You Own Your Vehicle
          </h2>
          <p className="text-white text-[18px] lg:text-[20px] text-center mb-12 lg:mb-16">
            Every Lifetime Warranty starts with Powertrain protection, with optional upgrades.
          </p>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            <div className="relative rounded-2xl p-6 lg:p-8 bg-white/5 border border-white/10 transition-all duration-300">
              <h3 className="text-white text-[24px] lg:text-[28px] font-serif italic mb-2">
                Powertrain Coverage
              </h3>
              <p className="text-white/70 text-[14px] lg:text-[15px] italic mb-6">
                Major mechanical protection for life
              </p>
              <ul className="space-y-2">
                <li className="text-white/90 text-[14px] lg:text-[15px] flex items-start gap-2">
                  <span className="text-white/60 mt-1">•</span>
                  <span>Engine, transmission, drive axles</span>
                </li>
              </ul>
            </div>
            <div className="relative rounded-2xl p-6 lg:p-8 bg-white/5 border border-white/10 transition-all duration-300">
              <h3 className="text-white text-[24px] lg:text-[28px] font-serif italic mb-2">
                Expanded Coverage
              </h3>
              <p className="text-white/70 text-[14px] lg:text-[15px] italic">
                Adds protection beyond the powertrain
              </p>
            </div>
            <div className="relative rounded-2xl p-6 lg:p-8 bg-white/5 border border-white/10 transition-all duration-300">
              <h3 className="text-white text-[24px] lg:text-[28px] font-serif italic mb-2">
                Plus Coverage
              </h3>
              <p className="text-white/70 text-[14px] lg:text-[15px] italic mb-6">
                Our most comprehensive protection
              </p>
              <ul className="space-y-2">
                <li className="text-white/90 text-[14px] lg:text-[15px] flex items-start gap-2">
                  <span className="text-white/60 mt-1">•</span>
                  <span>Steering & suspension components</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Screen 4: Annual Value */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        {/* Background image layer */}
        <Image
          src="/sections/process.png"
          alt=""
          fill
          className="object-cover"
          style={{ objectPosition: "center" }}
        />

        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-[#1F3E8E]/25" />

        <div className="relative z-10 max-w-[900px] mx-auto px-8 lg:px-16">
          <h2 className="text-gold text-[42px] lg:text-[48px] xl:text-[52px] font-serif italic text-center mb-4">
            Real Value You Use Every Year
          </h2>
          <p className="text-gold text-[42px] lg:text-[48px] xl:text-[52px] font-serif italic text-center mb-6">
            Not Just When Something Breaks
          </p>

          <p className="text-white text-[17px] lg:text-[19px] text-center mb-10 leading-relaxed">
            Your Lifetime Warranty includes real, paid-for maintenance benefits — not discounts.
          </p>

          <div className="flex justify-center mb-10">
            <ValueCallout value="$600+" label="per year" size="large" />
          </div>

          <p className="text-white/70 text-[15px] lg:text-[16px] text-center italic">
            For many drivers, these benefits alone can exceed $600+ per year
          </p>
        </div>
      </section>

      {/* Screen 5: Maintenance Benefits */}
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
        <div className="relative z-10 max-w-[800px] mx-auto px-8 lg:px-16">
          <h2 className="text-gold text-[42px] lg:text-[48px] xl:text-[52px] font-serif italic text-center mb-12 lg:mb-16">
            Maintenance Benefits — Included with Your Lifetime Warranty
          </h2>

          <ul className="space-y-5 lg:space-y-6">
            <li className="text-white text-[18px] lg:text-[20px] font-semibold flex items-start gap-2">
              <span className="text-white/60 mt-1">•</span>
              <span>Oil & Filter Changes</span>
            </li>
            <li className="text-white text-[18px] lg:text-[20px] font-semibold flex items-start gap-2">
              <span className="text-white/60 mt-1">•</span>
              <span>Brake Pad Replacement</span>
            </li>
            <li className="text-white text-[18px] lg:text-[20px] font-semibold flex items-start gap-2">
              <span className="text-white/60 mt-1">•</span>
              <span>Battery Replacement</span>
            </li>
            <li className="text-white text-[18px] lg:text-[20px] font-semibold flex items-start gap-2">
              <span className="text-white/60 mt-1">•</span>
              <span>Tire Rotations</span>
            </li>
            <li className="text-white text-[18px] lg:text-[20px] font-semibold flex items-start gap-2">
              <span className="text-white/60 mt-1">•</span>
              <span>Annual Inspection</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Screen 6: Why This Matters */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        {/* Background image layer */}
        <Image
          src="/sections/repairs.png"
          alt=""
          fill
          className="object-cover"
          style={{ objectPosition: "center" }}
        />

        {/* Overlay layers */}
        <div className="absolute inset-0 bg-[#1F3E8E]/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1F3E8E]/50 via-[#1F3E8E]/35 to-[#1F3E8E]/50" />

        <div className="relative z-10 max-w-[1200px] mx-auto px-8 lg:px-16">
          <h2 className="text-gold text-[42px] lg:text-[48px] xl:text-[52px] font-serif italic text-center mb-4">
            Why This Matters — Big Repairs Are Expensive
          </h2>
          <p className="text-white text-[18px] lg:text-[20px] text-center mb-12 lg:mb-16 italic">
            Your Lifetime Warranty covers major breakdowns, like:
          </p>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-10">
            <CostCard component="Engine" cost="$6,500+" />
            <CostCard component="Transmission" cost="$3,500+" />
            <CostCard component="Air Conditioning" cost="$1,500+" />
          </div>

          <p className="text-white text-[18px] lg:text-[20px] text-center italic">
            With us, you&apos;re protected from these costs.
          </p>
        </div>
      </section>

      {/* Screen 7: Coverage Confidence */}
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
            Coverage Wherever Life Takes You
          </h2>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 lg:p-8">
              <h3 className="text-white text-[18px] lg:text-[20px] font-semibold mb-2">
                U.S. & Canada Coverage
              </h3>
              <p className="text-white/90 text-[15px] lg:text-[16px]">
                Nationwide and cross-border protection
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 lg:p-8">
              <h3 className="text-white text-[18px] lg:text-[20px] font-semibold mb-2">
                Nationwide Repair Facilities
              </h3>
              <p className="text-white/90 text-[15px] lg:text-[16px]">
                Access to authorized service locations across the country
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 lg:p-8">
              <h3 className="text-white text-[18px] lg:text-[20px] font-semibold mb-2">
                24/7 Roadside Assistance
              </h3>
              <p className="text-white/90 text-[15px] lg:text-[16px]">
                Help available anytime, anywhere
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Screen 8: Vehicle Replacement Benefit */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        {/* Background image layer */}
        <Image
          src="/sections/replacement.png"
          alt=""
          fill
          className="object-cover"
          style={{ objectPosition: "center" }}
        />

        {/* Overlay layers */}
        <div className="absolute inset-0 bg-[#1F3E8E]/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1F3E8E]/60 via-[#1F3E8E]/40 to-transparent" />

        <div className="relative z-10 max-w-[1400px] mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column - Featured Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative h-[300px] lg:h-[400px] xl:h-[450px] w-full max-w-[400px] lg:max-w-[500px] overflow-hidden rounded-tl-[60px] rounded-br-[60px] rounded-tr-[20px] rounded-bl-[20px] ring-1 ring-white/15"
                style={{
                  boxShadow: "0 25px 60px -15px rgba(0, 0, 0, 0.55)"
                }}
              >
                <Image
                  src="/sections/hero.png"
                  alt=""
                  fill
                  className="object-cover"
                  style={{ objectPosition: "center" }}
                />
              </div>
            </div>

            {/* Right Column - Content */}
            <div>
              <h2 className="text-gold text-[42px] lg:text-[48px] xl:text-[52px] font-serif italic mb-4">
                Vehicle Replacement Benefit
              </h2>
              <p className="text-white text-[18px] lg:text-[20px] mb-4">
                Extra protection when the unexpected happens
              </p>
              <p className="text-white text-[17px] lg:text-[19px] mb-6 leading-relaxed">
                If your vehicle experiences a qualifying total loss or catastrophic failure:
              </p>

              {/* Highlight box */}
              <div className="bg-white/10 border-2 border-gold rounded-2xl p-6 lg:p-8 mb-6">
                <p className="text-gold text-[20px] lg:text-[24px] font-bold">
                  $2,000 toward a replacement vehicle from Lifetime Auto
                </p>
              </div>

              <p className="text-white text-[18px] lg:text-[20px] italic">
                A safety net designed to keep you moving forward — not starting over.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Screen 9: Call to Action */}
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
            Ready to Secure Your Lifetime Warranty?
          </h2>
          <p className="text-white text-[18px] lg:text-[20px] mb-10 italic">
            A quick conversation. Clear answers.
          </p>

          <a
            href="/get-started"
            className="inline-block bg-cta-red text-white text-[15px] lg:text-[16px] font-semibold px-10 py-5 rounded-[6px] mb-6 hover:bg-red-700 transition-colors duration-200"
          >
            Schedule a 10-Minute Buying Consultation
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
        </div>
      </section>

      <Footer />
    </main>
  );
}
