import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import CheckIcon from "@/components/CheckIcon";

export default function HowYouWinPage() {
  return (
    <main className="bg-navy-dark">
      <Header />

      {/* Page Header - Hero Section */}
      <section className="relative pt-[65px] h-[500px] lg:h-[600px] overflow-hidden">
        {/* Background image layer */}
        <Image
          src="/sections/how-you-win-hero.png"
          alt=""
          fill
          className="object-cover"
          style={{ objectPosition: "center" }}
        />

        {/* Overlay layers for text clarity */}
        <div className="absolute inset-0 bg-[#1F3E8E]/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1F3E8E]/60 via-[#1F3E8E]/50 to-[#1F3E8E]/60" />

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-[1400px] mx-auto w-full px-8 lg:px-16">
            <h1 className="text-gold text-[42px] lg:text-[52px] xl:text-[58px] font-serif italic mb-4">
              How You Win
            </h1>
            <p className="text-white text-[18px] lg:text-[21px] xl:text-[23px] leading-relaxed max-w-[700px]">
              Your path from consultation to keys — without pressure or markups.
            </p>
          </div>
        </div>
      </section>

      {/* Intro Line Section */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-8 lg:px-16">
          <p className="text-gray-700 text-[17px] lg:text-[19px] leading-relaxed text-center max-w-[800px] mx-auto">
            This process is designed to give you clarity, control, and confidence at every step.
            You always know what&apos;s happening, what it costs, and what comes next.
          </p>
          
          {/* Light divider */}
          <div className="w-full max-w-[600px] mx-auto h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mt-10" />
        </div>
      </section>

      {/* The Process - Expanded Steps */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        {/* Background image layer */}
        <Image
          src="/sections/process.png"
          alt=""
          fill
          className="object-cover"
          style={{ objectPosition: "right center" }}
        />

        {/* Overlay layers */}
        <div className="absolute inset-0 bg-[#1F3E8E]/35" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1F3E8E]/55 via-[#1F3E8E]/40 to-[#1F3E8E]/45" />

        <div className="relative z-10 max-w-[1200px] mx-auto px-8 lg:px-16">
          {/* Section Header */}
          <h2 className="text-white text-[36px] lg:text-[42px] xl:text-[46px] font-serif italic text-center mb-16">
            How the Process Works
          </h2>

          {/* Steps Container */}
          <div className="max-w-[900px] mx-auto space-y-16 lg:space-y-20">
            {/* Step 01 - Free Strategy Session */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-cta-red flex items-center justify-center">
                  <span className="text-white text-[18px] lg:text-[20px] font-bold">01</span>
                </div>
              </div>
              <div className="flex-1 pt-1">
                <h3 className="text-white text-[24px] lg:text-[28px] xl:text-[32px] font-bold mb-4">
                  Free Strategy Session
                </h3>
                <p className="text-white/90 text-[16px] lg:text-[18px] leading-relaxed mb-4">
                  We begin with a no-pressure strategy session focused on understanding exactly what you&apos;re looking for.
                </p>
                <p className="text-white/90 text-[16px] lg:text-[18px] leading-relaxed mb-4">
                  Together, we walk through:
                </p>
                <ul className="space-y-2 text-white/90 text-[16px] lg:text-[18px] leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span className="text-gold mt-1.5">•</span>
                    <span>Vehicle type and preferences</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold mt-1.5">•</span>
                    <span>Budget and comfort range</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold mt-1.5">•</span>
                    <span>Timeline and urgency</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold mt-1.5">•</span>
                    <span>Financing considerations that fit your situation</span>
                  </li>
                </ul>
                <p className="text-white/90 text-[16px] lg:text-[18px] leading-relaxed mt-4">
                  This session is informational and exploratory — designed to give you clarity before any decisions are made.
                </p>
              </div>
            </div>

            {/* Connector */}
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-14 lg:w-16 flex items-center justify-center">
                <div className="w-0.5 h-12 bg-white/30" />
              </div>
              <div />
            </div>

            {/* Step 02 - Transparent Flat Service Fee */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-cta-red flex items-center justify-center">
                  <span className="text-white text-[18px] lg:text-[20px] font-bold">02</span>
                </div>
              </div>
              <div className="flex-1 pt-1">
                <h3 className="text-white text-[24px] lg:text-[28px] xl:text-[32px] font-bold mb-4">
                  Transparent Flat Service Fee
                </h3>
                <p className="text-white/90 text-[16px] lg:text-[18px] leading-relaxed mb-4">
                  Based on your goals and the complexity of the search, your consultant provides a clear, upfront flat service fee.
                </p>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-6 py-4 mb-4 inline-block">
                  <p className="text-gold text-[20px] lg:text-[24px] font-bold">
                    Typical range: $500–$1,500
                  </p>
                </div>
                <p className="text-white/90 text-[16px] lg:text-[18px] leading-relaxed mb-2">
                  There are:
                </p>
                <ul className="space-y-2 text-white/90 text-[16px] lg:text-[18px] leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span className="text-gold mt-1.5">•</span>
                    <span>No commissions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold mt-1.5">•</span>
                    <span>No incentives to inflate price</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold mt-1.5">•</span>
                    <span>No surprise charges</span>
                  </li>
                </ul>
                <p className="text-white/90 text-[16px] lg:text-[18px] leading-relaxed mt-4">
                  Everything is explained clearly before moving forward.
                </p>
              </div>
            </div>

            {/* Connector */}
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-14 lg:w-16 flex items-center justify-center">
                <div className="w-0.5 h-12 bg-white/30" />
              </div>
              <div />
            </div>

            {/* Step 03 - Get Started for Just $100 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-cta-red flex items-center justify-center">
                  <span className="text-white text-[18px] lg:text-[20px] font-bold">03</span>
                </div>
              </div>
              <div className="flex-1 pt-1">
                <h3 className="text-white text-[24px] lg:text-[28px] xl:text-[32px] font-bold mb-4">
                  Get Started for Just $100
                </h3>
                <p className="text-white/90 text-[16px] lg:text-[18px] leading-relaxed mb-4">
                  When you&apos;re ready to proceed, you place a $100 deposit to begin the search.
                </p>
                <p className="text-white/90 text-[16px] lg:text-[18px] leading-relaxed mb-2">
                  This deposit:
                </p>
                <ul className="space-y-2 text-white/90 text-[16px] lg:text-[18px] leading-relaxed mb-4">
                  <li className="flex items-start gap-3">
                    <CheckIcon className="text-gold mt-0.5 flex-shrink-0" />
                    <span>Is applied toward your service fee</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="text-gold mt-0.5 flex-shrink-0" />
                    <span>Is not an additional charge</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="text-gold mt-0.5 flex-shrink-0" />
                    <span>Simply confirms you&apos;d like to move forward</span>
                  </li>
                </ul>
                <p className="text-white/90 text-[16px] lg:text-[18px] leading-relaxed">
                  You remain in control and can pause or stop at any point.
                </p>
              </div>
            </div>

            {/* Connector */}
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-14 lg:w-16 flex items-center justify-center">
                <div className="w-0.5 h-12 bg-white/30" />
              </div>
              <div />
            </div>

            {/* Step 04 - Nationwide Dealer-Only Search */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-cta-red flex items-center justify-center">
                  <span className="text-white text-[18px] lg:text-[20px] font-bold">04</span>
                </div>
              </div>
              <div className="flex-1 pt-1">
                <h3 className="text-white text-[24px] lg:text-[28px] xl:text-[32px] font-bold mb-4">
                  Nationwide Dealer-Only Search
                </h3>
                <p className="text-white/90 text-[16px] lg:text-[18px] leading-relaxed mb-4">
                  Your consultant conducts a nationwide search through dealer-only auctions and professional networks.
                </p>
                <p className="text-white/90 text-[16px] lg:text-[18px] leading-relaxed mb-2">
                  You receive carefully curated vehicle options that include:
                </p>
                <ul className="space-y-2 text-white/90 text-[16px] lg:text-[18px] leading-relaxed mb-4">
                  <li className="flex items-start gap-3">
                    <span className="text-gold mt-1.5">•</span>
                    <span>Condition and history reports</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold mt-1.5">•</span>
                    <span>Market context and pricing insights</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold mt-1.5">•</span>
                    <span>Clear maximum-bid guidance</span>
                  </li>
                </ul>
                <p className="text-white/90 text-[16px] lg:text-[18px] leading-relaxed">
                  You review each option at your own pace and decide when — or if — to move forward.
                </p>
                <p className="text-white/90 text-[16px] lg:text-[18px] leading-relaxed mt-2">
                  You stay in control at every step.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Section - Reassurance + CTA */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-8 lg:px-16 text-center">
          <h2 className="text-navy-dark text-[36px] lg:text-[44px] xl:text-[48px] font-serif italic mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-gray-700 text-[18px] lg:text-[20px] leading-relaxed mb-8 max-w-[600px] mx-auto">
            It begins with a simple conversation.
            <br />
            No pressure. No obligation.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/get-started"
              className="inline-block bg-cta-red text-white text-[15px] lg:text-[16px] font-semibold px-8 lg:px-10 py-4 lg:py-5 rounded-[6px] hover:bg-red-700 transition-colors duration-200"
            >
              Book Your Free Strategy Session
            </a>
            <a
              href="/get-started"
              className="inline-block bg-white text-navy-dark text-[15px] lg:text-[16px] font-semibold px-8 lg:px-10 py-4 lg:py-5 rounded-[6px] border-2 border-navy-dark hover:bg-navy-dark hover:text-white transition-colors duration-200"
            >
              Get Started for $100
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

