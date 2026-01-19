import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import WinItem from "@/components/WinItem";
import ProcessStep from "@/components/ProcessStep";
import WarrantyBullet from "@/components/WarrantyBullet";
import AuctionLogos from "@/components/AuctionLogos";
import VideoLightbox from "@/components/VideoLightbox";

export const metadata: Metadata = {
  title: "Lifetime Auto Sales - Access True Wholesale Pricing",
  description: "Access true wholesale pricing through dealer-only auctions with a dedicated buying consultant guiding every step. No commissioned salespeople - flat fee buyer representation.",
};

export default function Home() {
  const youWinItems = [
    {
      title: "True wholesale pricing",
      description: "You pay what dealers pay — no retail markups, no games.",
    },
    {
      title: "Buyer representation",
      description:
        "We represent you as your buying consultant — not negotiating against you.",
    },
    {
      title: "Nationwide access",
      description:
        "Choose from dealer-only auctions across the country — not just local inventory.",
    },
    {
      title: "Total transparency",
      description:
        "Condition reports, pricing logic, and bids reviewed before you commit.",
    },
  ];

  const weWinItems = [
    {
      title: "Low overhead, no inventory debt",
      description: "No floor plans. No aging inventory. No pressure pricing.",
    },
    {
      title: "Lifetime relationships",
      description:
        "Built on trust, repeat business, and referrals — not one-time transactions.",
    },
    {
      title: "A scalable model",
      description:
        "Not limited by lot size, geography, or inventory constraints.",
    },
    {
      title: "Aligned incentives",
      description:
        "We only win when you win — no commissions pushing bad deals.",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Strategy Session",
      description:
        "We define your vehicle goals, budget, timeline, and financing approach before sourcing begins.",
    },
    {
      number: "02",
      title: "Insider Sourcing",
      description:
        "We use institutional-grade technology and advanced analytics to scan nationwide dealer-only auctions, pre-screening vehicles for condition, history, and market value.",
    },
    {
      number: "03",
      title: "Bid Approval & Control",
      description:
        "You participate in live auctions with real-time guidance and approve every bid before it's placed.",
    },
    {
      number: "04",
      title: "Delivery & Execution",
      description:
        "We coordinate transport, inspection, reconditioning (if needed), title work, and delivery — ready to drive.",
    },
  ];

  const warrantyBullets = [
    {
      title: "Lifetime Warranty Coverage",
      description: "Lifetime protection on qualifying vehicles — offering peace of mind that often exceeds new-car coverage.",
    },
    {
      title: "Maintenance Coverage",
      description: "Included maintenance benefits that can save up to $600+ per year, encouraging proper care without budget stress.",
    },
    {
      title: "Nationwide Protection",
      description: "Coverage valid across the U.S. and Canada — protection that follows you wherever life takes you.",
    },
    {
      title: "24/7 Roadside Assistance",
      description: "Help when and where you need it most — adding confidence beyond the driveway.",
    },
  ];

  return (
    <main className="bg-navy-dark">
      <Header />

      {/* Hero Section */}
      <section
        id="services"
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
        {/* Content - two-column layout */}
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-16 pt-10 sm:pt-12 lg:pt-20 pb-8 sm:pb-10 lg:pb-14">
          {/* Two-column grid layout */}
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center mb-8 lg:mb-10">
            {/* Left Column - Text Content */}
            <div className="max-w-[600px] lg:max-w-[650px]">
              {/* Main Headline - italic first part, lighter second part */}
              <h1 className="text-white text-[30px] sm:text-[32px] lg:text-[42px] xl:text-[46px] leading-[1.12] lg:leading-[1.08] tracking-[-0.03em] mb-4 sm:mb-5">
                <span className="font-serif italic font-black">
                  Access true wholesale pricing
                </span>{" "}
                <span className="font-light text-white">
                  through dealer-only auctions —
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-white text-[16px] sm:text-[17px] lg:text-[19px] xl:text-[21px] font-normal leading-snug mb-4 sm:mb-5">
                with a dedicated buying consultant guiding every step.
              </p>

              {/* Supporting Copy */}
              <p className="text-white/70 text-[14px] sm:text-[15px] lg:text-[16px] leading-relaxed mb-5 sm:mb-6">
                No commissioned salespeople. Our consultants represent
                <br className="hidden lg:block" />
                you for a flat fee.
              </p>

              {/* CTA Button - matches header CTA */}
              <a
                href="/get-started"
                className="inline-block bg-cta-red text-white text-[14px] lg:text-[15px] font-semibold px-6 lg:px-7 py-3.5 lg:py-4 rounded-[6px] mb-3 sm:mb-4 hover:bg-red-700 transition-colors duration-200"
              >
                Get Started
              </a>

              {/* Trust Line */}
              <p className="text-white/50 text-[12px] sm:text-[13px] lg:text-[14px]">
                Flat fee. No sales pressure. Buyer representation only.
              </p>
            </div>

            {/* Right Column - Image Container with asymmetric rounded rectangle */}
            <div
              className="relative h-[240px] sm:h-[280px] lg:h-[380px] xl:h-[450px] overflow-hidden rounded-tl-[50px] sm:rounded-tl-[60px] rounded-br-[50px] sm:rounded-br-[60px] rounded-tr-[18px] rounded-bl-[18px] ring-1 ring-white/15"
              style={{
                boxShadow: "0 25px 60px -15px rgba(0, 0, 0, 0.55)"
              }}
            >
              <Image
                src="/sections/hero.png"
                alt="Car auction lot"
                fill
                priority
                className="object-cover"
                style={{ objectPosition: "center" }}
              />
              <VideoLightbox videoId="HotO_1aVdt4" label="Watch our story" />
            </div>
          </div>

          {/* Auction Logos and Text - integrated into hero */}
          <div className="max-w-[1200px] mx-auto">
            {/* Headline */}
            <h2 className="text-white text-[20px] sm:text-[22px] lg:text-[26px] xl:text-[30px] font-bold text-center mb-6 sm:mb-8 lg:mb-10">
              Access Hundreds of Dealer-Only Wholesale Auctions Nationwide
            </h2>

            {/* Logos Row */}
            <div className="mb-6 sm:mb-8 lg:mb-10">
              <AuctionLogos />
            </div>

            {/* Horizontal separator */}
            <div className="w-full max-w-[800px] mx-auto h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-6 sm:mb-8" />

            {/* Descriptive Text */}
            <p className="text-white/70 text-[13px] sm:text-[14px] lg:text-[15px] leading-relaxed text-center max-w-[700px] mx-auto">
              Lifetime consultants leverage institutional technology to source
              the best-priced vehicles from hundreds of dealer-only auctions
              nationwide.
            </p>
          </div>
        </div>
      </section>

      {/* Our Rule: Win-Win or No Deal Section */}
      <section id="about" className="relative py-16 sm:py-20 lg:py-32 overflow-hidden">
        {/* Background image layer */}
        <Image
          src="/sections/winwin.png"
          alt=""
          fill
          className="object-cover"
          style={{ objectPosition: "center" }}
        />

        {/* Overlay layers - lighter to show more background */}
        <div className="absolute inset-0 bg-[#1F3E8E]/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1F3E8E]/50 via-[#1F3E8E]/35 to-[#1F3E8E]/50" />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-16">
          {/* Main Title - styled like the design: "Our Rule:" white, "Win-Win" gold italic, "or No Deal" white */}
          <h2 className="text-[32px] sm:text-[36px] lg:text-[48px] xl:text-[52px] font-serif text-center mb-3 sm:mb-4 leading-tight">
            <span className="text-white">Our Rule: </span>
            <span className="text-gold italic">Win–Win</span>
            <span className="text-white"> or No Deal</span>
          </h2>

          {/* Subheadline */}
          <p className="text-white text-[16px] sm:text-[17px] lg:text-[20px] text-center mb-5 sm:mb-6 italic">
            If it doesn&apos;t make sense for you, we don&apos;t do the deal.
            Period.
          </p>

          {/* Decorative line with dots */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-12">
            <div className="w-24 lg:w-32 h-px bg-gradient-to-r from-transparent to-gold/50" />
            <div className="flex gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-gold/60" />
              <div className="w-1.5 h-1.5 rounded-full bg-gold/60" />
            </div>
            <div className="w-24 lg:w-32 h-px bg-gradient-to-l from-transparent to-gold/50" />
          </div>

          {/* Two-Column Layout */}
          <div className="grid md:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 max-w-[1200px] mx-auto relative">
            {/* Subtle vertical divider between columns */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 transform -translate-x-1/2" />

            {/* Left Column: You Win */}
            <div>
              <h3 className="text-gold text-[24px] sm:text-[26px] lg:text-[32px] font-serif italic mb-6 sm:mb-8">
                You Win
              </h3>

              <div className="space-y-5 sm:space-y-6">
                {youWinItems.map((item) => (
                  <WinItem
                    key={item.title}
                    title={item.title}
                    description={item.description}
                  />
                ))}
              </div>
            </div>

            {/* Right Column: We Win */}
            <div>
              <h3 className="text-gold text-[24px] sm:text-[26px] lg:text-[32px] font-serif italic mb-6 sm:mb-8">
                We Win
              </h3>

              <div className="space-y-5 sm:space-y-6">
                {weWinItems.map((item) => (
                  <WinItem
                    key={item.title}
                    title={item.title}
                    description={item.description}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Concluding Statement */}
          <p className="text-gold text-[16px] sm:text-[18px] lg:text-[20px] text-center mt-12 sm:mt-16 font-serif italic font-semibold">
            When you win, we win — and that&apos;s the only way we do business.
          </p>
        </div>
      </section>

      {/* How You Win Section */}
      <section
        id="how-it-works"
        className="relative py-16 sm:py-20 lg:py-32 overflow-hidden"
      >
        {/* Background image layer */}
        <Image
          src="/sections/process.png"
          alt=""
          fill
          className="object-cover"
          style={{ objectPosition: "right center" }}
        />

        {/* Overlay layers - lighter to show more background */}
        <div className="absolute inset-0 bg-[#1F3E8E]/35" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1F3E8E]/55 via-[#1F3E8E]/40 to-[#1F3E8E]/45" />

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-16">
          {/* Section Heading - italic serif */}
          <h2 className="text-white text-[30px] sm:text-[34px] lg:text-[46px] xl:text-[50px] font-serif italic text-center mb-3 sm:mb-4 leading-tight">
            How You Win
          </h2>

          {/* Subheading */}
          <p className="text-white/90 text-[16px] sm:text-[17px] lg:text-[20px] text-center mb-5 sm:mb-6 italic">
            Wholesale buying made simple, transparent, and controlled.
          </p>

          {/* Decorative line with dots */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-14 lg:mb-16">
            <div className="w-24 lg:w-32 h-px bg-gradient-to-r from-transparent to-white/30" />
            <div className="flex gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
              <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
            </div>
            <div className="w-24 lg:w-32 h-px bg-gradient-to-l from-transparent to-white/30" />
          </div>

          {/* Steps */}
          <div className="max-w-[900px] mx-auto space-y-8 sm:space-y-10">
            {processSteps.map((step, index) => (
              <ProcessStep
                key={step.number}
                number={step.number}
                title={step.title}
                description={step.description}
                showConnector={index < processSteps.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Lifetime Warranty Section */}
      <section
        id="contact"
        className="relative py-14 sm:py-16 lg:py-20 overflow-hidden"
      >
        {/* Background image layer */}
        <Image
          src="/sections/warranty.png"
          alt=""
          fill
          className="object-cover"
          style={{ objectPosition: "right center" }}
        />

        {/* Overlay layers - lighter to show more background */}
        <div className="absolute inset-0 bg-[#1F3E8E]/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1F3E8E]/60 via-[#1F3E8E]/40 to-transparent" />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-16">
          {/* Top Section - Main Title and Subtitle */}
          <div className="text-center mb-7 sm:mb-8 lg:mb-10">
            <h2 className="text-gold text-[30px] sm:text-[34px] lg:text-[48px] xl:text-[52px] font-serif italic mb-2 leading-tight">
              Built-In Protection for Long-Term Confidence
            </h2>
            <p className="text-white text-[16px] sm:text-[18px] lg:text-[21px] xl:text-[23px]">
              Protection That Goes Beyond the Purchase
            </p>
          </div>

          {/* Main Content - Shield and Benefits */}
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-start lg:items-center mb-8 sm:mb-10 lg:mb-12">
            {/* Left side - Warranty Badge Graphic */}
            <div className="flex justify-center lg:justify-start w-full lg:w-auto flex-shrink-0">
              <div className="relative">
                <Image
                  src="/images/shield.png"
                  alt="Lifetime Warranty Shield"
                  width={2400}
                  height={2800}
                  className="w-full max-w-[360px] sm:max-w-[450px] lg:max-w-[600px] xl:max-w-[700px] h-auto drop-shadow-[0_32px_70px_-14px_rgba(0,0,0,0.48)]"
                  priority
                />
              </div>
            </div>

            {/* Right side - Benefits List */}
            <div className="flex-1 max-w-[600px] lg:max-w-none">
              <div className="space-y-4 sm:space-y-5 lg:space-y-6">
                {warrantyBullets.map((bullet) => (
                  <WarrantyBullet
                    key={bullet.title}
                    title={bullet.title}
                    description={bullet.description}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Section - Confidence After You Own */}
          <div className="text-center max-w-[900px] mx-auto">
            <h3 className="text-gold text-[24px] sm:text-[28px] lg:text-[38px] xl:text-[42px] font-serif italic mb-2 sm:mb-3">
              Confidence After You Own
            </h3>
            <p className="text-white text-[15px] sm:text-[16px] lg:text-[19px] leading-relaxed mb-5 sm:mb-6">
              Your Wholesale Car Buying Consultant helps you buy right — and ensures you&apos;re protected long after the purchase.
            </p>

            {/* CTA Button */}
            <a
              id="schedule"
              href="/get-started"
              className="inline-block bg-cta-red text-white text-[14px] lg:text-[15px] font-semibold px-6 lg:px-7 py-3.5 lg:py-4 rounded-[6px] mb-3 sm:mb-4 hover:bg-red-700 transition-colors duration-200 leading-tight"
            >
              Get Started
            </a>

            <p className="text-white/70 text-[13px] sm:text-[14px] lg:text-[15px] mb-5 sm:mb-6 italic">
              No obligation. Just clarity.
            </p>

            {/* Disclaimer */}
            <p className="text-white/60 text-[12px] sm:text-[12.5px] lg:text-[13px] leading-relaxed italic">
              Warranty availability varies by vehicle. Coverage details reviewed prior to purchase.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
