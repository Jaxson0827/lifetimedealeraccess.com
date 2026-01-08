import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Turo Fleet Investment Program | Lifetime Auto Sales",
  description: "Build your Turo fleet at wholesale prices. Access dealer-only auctions to source high-demand rental vehicles with ROI-optimized selection and lifetime protection.",
};

export default function TuroInvestorPage() {
  const investmentFeatures = [
    {
      title: "Wholesale Pricing Advantage",
      description: "Access dealer-only auctions to build your fleet at true wholesale prices — the same prices dealers pay.",
      highlights: [
        "No retail markups or hidden fees",
        "Direct access to nationwide auctions",
        "ROI-optimized vehicle selection",
      ],
    },
    {
      title: "Fleet Building Strategy",
      description: "Professional guidance on selecting vehicles that maximize rental income and minimize maintenance costs.",
      highlights: [
        "High-demand vehicle identification",
        "Market analysis and pricing insights",
        "Fleet diversification strategies",
      ],
    },
    {
      title: "Lifetime Protection",
      description: "Built-in warranty coverage that protects your investment long after purchase.",
      highlights: [
        "Lifetime warranty on qualifying vehicles",
        "Maintenance coverage included",
        "Nationwide protection network",
      ],
    },
    {
      title: "Expert Buying Consultant",
      description: "Dedicated consultant representing your interests — not pushing inventory or commissions.",
      highlights: [
        "Flat fee buyer representation",
        "No commissioned sales pressure",
        "Transparent bidding process",
      ],
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Investment Strategy Session",
      description: "We analyze your investment goals, budget, and target fleet size to create a customized sourcing strategy.",
    },
    {
      number: "02",
      title: "Vehicle Sourcing & Analysis",
      description: "Our technology scans nationwide dealer-only auctions, pre-screening vehicles for condition, rental demand, and ROI potential.",
    },
    {
      number: "03",
      title: "Bid Approval & Execution",
      description: "You review condition reports and approve every bid before it's placed. Full transparency, full control.",
    },
    {
      number: "04",
      title: "Fleet Delivery & Setup",
      description: "We coordinate transport, inspection, title work, and delivery — your vehicles ready for Turo listing.",
    },
  ];

  const benefits = [
    {
      title: "Maximize Rental Income",
      description: "Source vehicles that command premium rental rates on Turo. Our market analysis identifies high-demand models that generate stronger returns.",
    },
    {
      title: "Minimize Acquisition Costs",
      description: "Buy at wholesale prices instead of retail. Every dollar saved on purchase price directly improves your ROI and cash flow.",
    },
    {
      title: "Reduce Maintenance Risk",
      description: "Pre-screened vehicles with condition reports and history checks. Lifetime warranty coverage protects against unexpected repair costs.",
    },
    {
      title: "Scale Your Fleet Efficiently",
      description: "Build your Turo fleet systematically with professional guidance. No guesswork, no bad deals — just strategic growth.",
    },
  ];

  const competitiveAdvantages = [
    {
      title: "Dealer-Only Auction Access",
      description: "Access hundreds of wholesale auctions nationwide that are typically restricted to licensed dealers. This exclusive access gives you pricing advantages unavailable to retail buyers.",
    },
    {
      title: "ROI-Focused Selection",
      description: "We don't just find vehicles — we find vehicles that make financial sense for Turo rentals. Our analysis considers rental demand, maintenance costs, and resale value.",
    },
    {
      title: "No Commission Conflicts",
      description: "Our flat-fee model means we're aligned with your success. We only win when you win — no pressure to close deals that don't make sense.",
    },
  ];

  return (
    <main className="bg-navy-dark">
      <Header />

      {/* Hero Section */}
      <section
        className="relative pt-[65px] overflow-hidden min-h-[85vh] flex items-center"
        style={{
          background: `
            radial-gradient(
              ellipse 100% 80% at 50% 20%,
              #3355a8 0%,
              #1F3E8E 30%,
              #14306b 60%,
              #0a1a40 100%
            ),
            radial-gradient(
              circle at 10% 90%,
              rgba(201, 162, 39, 0.08) 0%,
              transparent 50%
            ),
            radial-gradient(
              circle at 90% 10%,
              rgba(201, 162, 39, 0.05) 0%,
              transparent 40%
            )
          `,
        }}
      >
        <div className="relative z-10 max-w-[1400px] mx-auto px-8 lg:px-16 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column - Text Content */}
            <div>
              {/* Eyebrow badge */}
              <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/25 rounded-full px-5 py-2 mb-8">
                <span className="text-gold text-[13px] font-semibold tracking-wide uppercase">Turo Fleet Investment</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-[48px] lg:text-[64px] xl:text-[76px] leading-[1.02] tracking-[-0.03em] mb-6">
                <span className="text-gold font-serif italic font-bold">Build Your Fleet.</span>
                <br />
                <span className="text-white font-serif italic">Maximize Your ROI.</span>
              </h1>

              {/* Subheadline */}
              <p className="text-white/90 text-[20px] lg:text-[26px] font-light leading-snug mb-8 max-w-[650px]">
                Access Dealer-Only Auctions to Source High-Demand Rental Vehicles at Wholesale Prices
              </p>

              {/* Body copy */}
              <p className="text-white/60 text-[16px] lg:text-[18px] leading-relaxed mb-10 max-w-[550px]">
                Build your Turo fleet with vehicles sourced from dealer-only wholesale auctions. Professional buying guidance, ROI-optimized selection, and lifetime protection — all at true wholesale pricing.
              </p>

              {/* CTA Button */}
              <a
                href="/get-started"
                className="inline-block bg-cta-red text-white text-[16px] lg:text-[17px] font-semibold px-10 lg:px-12 py-4 lg:py-5 rounded-[6px] hover:bg-red-700 hover:scale-[1.02] hover:shadow-[0_10px_40px_-10px_rgba(216,19,38,0.5)] transition-all duration-300 mb-4"
              >
                Get Started
              </a>

              {/* Trust line */}
              <p className="text-white/50 text-[14px]">
                Flat fee. No commissions. Buyer representation only.
              </p>
            </div>

            {/* Right Column - Image */}
            <div className="relative h-[300px] lg:h-[450px] overflow-hidden rounded-tl-[60px] rounded-br-[60px] rounded-tr-[20px] rounded-bl-[20px] ring-1 ring-white/15"
              style={{
                boxShadow: "0 25px 60px -15px rgba(0, 0, 0, 0.55)"
              }}
            >
              <Image
                src="/sections/fleet.png"
                alt="Dealer auction lot"
                fill
                priority
                className="object-cover"
                style={{ objectPosition: "center" }}
              />
            </div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0a1a40] to-transparent" />
      </section>

      {/* Investment Opportunity Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-[#0a1a40]">
        <div className="relative z-10 max-w-[1200px] mx-auto px-8 lg:px-16">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-gold/80 text-[14px] uppercase tracking-wider mb-4 font-medium">
              The Investment Opportunity
            </p>
            <h2 className="text-white text-[38px] lg:text-[48px] xl:text-[54px] font-bold leading-[1.1] mb-6">
              Build Your Turo Fleet at Wholesale Prices
            </h2>
            <p className="text-white/60 text-[17px] lg:text-[19px] max-w-[600px] mx-auto">
              Access dealer-only auctions to source vehicles that maximize rental income while minimizing acquisition costs.
            </p>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {investmentFeatures.map((feature) => (
              <div
                key={feature.title}
                className="group relative bg-gradient-to-b from-white/[0.04] to-transparent border border-white/10 rounded-2xl p-8 hover:border-[#C9A227]/40 hover:from-[#C9A227]/[0.03] transition-all duration-500"
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#C9A227]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Title */}
                <h3 className="text-white text-[22px] lg:text-[26px] font-bold mb-3">
                  {feature.title}
                </h3>
                
                {/* Description */}
                <p className="text-white/70 text-[15px] lg:text-[16px] leading-relaxed mb-5">
                  {feature.description}
                </p>
                
                {/* Highlights list */}
                {feature.highlights && feature.highlights.length > 0 && (
                  <ul className="space-y-2.5">
                    {feature.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#C9A227]/20 flex items-center justify-center mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-[#C9A227]" />
                        </div>
                        <span className="text-white/70 text-[14px] lg:text-[15px]">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
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
          {/* Section Heading */}
          <h2 className="text-white text-[40px] lg:text-[46px] xl:text-[50px] font-serif italic text-center mb-4">
            How It Works
          </h2>

          {/* Subheading */}
          <p className="text-white/90 text-[18px] lg:text-[20px] text-center mb-6 italic">
            A streamlined process designed for Turo investors.
          </p>

          {/* Decorative line with dots */}
          <div className="flex items-center justify-center gap-4 mb-16">
            <div className="w-24 lg:w-32 h-px bg-gradient-to-r from-transparent to-white/30" />
            <div className="flex gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
              <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
            </div>
            <div className="w-24 lg:w-32 h-px bg-gradient-to-l from-transparent to-white/30" />
          </div>

          {/* Steps */}
          <div className="max-w-[900px] mx-auto space-y-10">
            {processSteps.map((step, index) => (
              <div key={step.number}>
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-cta-red flex items-center justify-center">
                      <span className="text-white text-[18px] lg:text-[20px] font-bold">{step.number}</span>
                    </div>
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="text-white text-[22px] lg:text-[26px] font-bold mb-3">
                      {step.title}
                    </h3>
                    <p className="text-white/70 text-[15px] lg:text-[17px] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {index < processSteps.length - 1 && (
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-14 lg:w-16 flex items-center justify-center">
                      <div className="w-0.5 h-8 bg-white/20" />
                    </div>
                    <div />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-[#0a1a40]">
        <div className="relative z-10 max-w-[1200px] mx-auto px-8 lg:px-16">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-white text-[38px] lg:text-[48px] font-serif italic mb-4">
              Why This <span className="text-gold">Works</span>
            </h2>
            <p className="text-white/60 text-[17px] lg:text-[19px] max-w-[600px] mx-auto">
              The benefits that make this investment model effective.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="group relative bg-gradient-to-b from-white/[0.06] to-transparent border border-white/10 rounded-2xl p-8 hover:border-gold/25 transition-all duration-500"
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Title */}
                <h3 className="text-white text-[22px] lg:text-[26px] font-serif italic mb-3">
                  {benefit.title}
                </h3>
                
                {/* Description */}
                <p className="text-white/70 text-[15px] lg:text-[16px] leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why This Works Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, #1F3E8E 0%, #152d68 50%, #14306b 100%)`,
          }}
        />

        <div className="relative z-10 max-w-[1200px] mx-auto px-8 lg:px-16">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-gold text-[40px] lg:text-[52px] xl:text-[58px] font-serif italic mb-6">
              Competitive Advantages
            </h2>
            <p className="text-white/80 text-[17px] lg:text-[19px] leading-relaxed mb-10 max-w-[700px] mx-auto">
              What sets this investment approach apart from traditional vehicle acquisition methods.
            </p>
          </div>

          {/* Advantages List */}
          <div className="space-y-6 max-w-[900px] mx-auto">
            {competitiveAdvantages.map((advantage, index) => (
              <div
                key={advantage.title}
                className="flex gap-6 items-start bg-gradient-to-r from-white/[0.04] to-transparent border border-white/10 rounded-2xl p-6 lg:p-8 hover:border-gold/20 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center text-gold font-serif italic text-[20px]">
                  {index + 1}
                </div>
                <div>
                  <h4 className="text-white text-[18px] lg:text-[20px] font-semibold mb-2">
                    {advantage.title}
                  </h4>
                  <p className="text-white/60 text-[15px] lg:text-[16px]">
                    {advantage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Image Section */}
          <div className="mt-16 relative h-[300px] lg:h-[400px] overflow-hidden rounded-2xl ring-1 ring-white/15">
            <Image
              src="/sections/hero.png"
              alt="Investment opportunity"
              fill
              className="object-cover"
              style={{ objectPosition: "center" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a40]/80 via-[#0a1a40]/40 to-transparent" />
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section
        className="relative py-24 lg:py-32 overflow-hidden"
        style={{
          background: `
            radial-gradient(
              ellipse 90% 70% at 50% 50%,
              #2a4a9a 0%,
              #1F3E8E 30%,
              #152d68 65%,
              #0a1a40 100%
            )
          `,
        }}
      >
        {/* Decorative glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gold/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-[850px] mx-auto px-8 lg:px-16 text-center">
          {/* Main Headline */}
          <h2 className="text-gold text-[42px] lg:text-[56px] xl:text-[64px] font-serif italic leading-[1.1] mb-6">
            Start Building Your Fleet Today.
          </h2>

          {/* Body copy */}
          <div className="space-y-4 mb-10">
            <p className="text-white/80 text-[18px] lg:text-[20px]">
              Access dealer-only auctions. Source high-demand vehicles. Maximize your Turo rental income.
            </p>
            <p className="text-white text-[18px] lg:text-[20px] font-medium">
              All at true wholesale pricing with professional guidance every step of the way.
            </p>
          </div>

          {/* Taglines */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <span className="text-gold text-[16px] lg:text-[18px] font-medium">Wholesale pricing.</span>
            <span className="text-gold text-[16px] lg:text-[18px] font-medium">ROI-focused selection.</span>
            <span className="text-white/80 text-[16px] lg:text-[18px]">Lifetime protection.</span>
          </div>

          {/* CTA Button */}
          <a
            href="/get-started"
            className="inline-block bg-cta-red text-white text-[17px] lg:text-[18px] font-semibold px-12 lg:px-16 py-5 lg:py-6 rounded-[6px] hover:bg-red-700 hover:scale-[1.03] hover:shadow-[0_15px_50px_-10px_rgba(216,19,38,0.6)] transition-all duration-300 mb-6"
          >
            Get Started
          </a>

          {/* Trust line */}
          <p className="text-white/50 text-[14px] lg:text-[15px] italic">
            No pressure. Just clarity. Flat fee buyer representation.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
