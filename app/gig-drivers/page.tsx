import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Gig Driver Program - Stop Renting, Start Owning | Lifetime Auto Sales",
  description: "A smarter vehicle path for Uber, Lyft, and delivery drivers. Stop throwing money away on rentals and start building equity with our gig driver ownership program.",
};

export default function GigDriversPage() {
  const rentalProblems = [
    {
      title: "Weekly payments that build zero equity",
      description: "Every dollar goes out. None of it comes back.",
    },
    {
      title: "Costs that reset every single week",
      description: "No progress. No payoff. Just another bill due Monday.",
    },
    {
      title: "No ownership path",
      description: "You're paying to keep driving, not paying toward something you own.",
    },
  ];

  const programFeatures = [
    {
      title: "Vehicles optimized for gig work",
      description: "Comfortable, reliable, and efficient — built to earn more per mile.",
    },
    {
      title: "Approved for Uber, Lyft, and delivery",
      description: "No guessing. No mismatches. Just vehicles that work where you work.",
    },
    {
      title: "Luxury experience riders prefer",
      description: "Better ratings. Better tips. Stronger long-term earnings.",
    },
    {
      title: "Payments designed to move you forward",
      description: "Every week worked brings you closer to ownership — not back to zero.",
    },
  ];

  const teslaBenefits = [
    {
      title: "Lower operating costs",
      description: "Compared to gas vehicles, save significantly on fuel and maintenance.",
    },
    {
      title: "Premium ride experience",
      description: "Riders notice the difference — and reward it with higher ratings and tips.",
    },
    {
      title: "Strong performance for long shifts",
      description: "Comfort and capability that lasts through your busiest days.",
    },
    {
      title: "Long-term durability",
      description: "Built for high mileage — designed to perform mile after mile.",
    },
  ];

  const driverQualities = [
    "Your work ethic",
    "Your consistency",
    "Your willingness to show up and drive",
  ];

  const assetBenefits = [
    {
      title: "Your vehicle becomes a long-term asset",
      description: "Not a weekly expense that vanishes into someone else's balance sheet.",
    },
    {
      title: "You build momentum instead of restarting",
      description: "Every payment moves you forward, not back to square one.",
    },
    {
      title: "You move toward ownership with a clear path",
      description: "A defined timeline. A real goal. An achievable outcome.",
    },
  ];

  const eligibilityCriteria = [
    "Are tired of throwing money away on rentals",
    "Want to keep more of what they earn",
    "Drive consistently and take their work seriously",
    "Want a smarter long-term strategy — not shortcuts",
  ];

  return (
    <main className="bg-navy-dark">
      <Header />

      {/* Section 1: Hero */}
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
        {/* Subtle grid pattern overlay like Ramp */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />

        <div className="relative z-10 max-w-[1400px] mx-auto px-8 lg:px-16 py-16 lg:py-24">
          <div className="max-w-[850px]">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/25 rounded-full px-5 py-2 mb-8 animate-pulse-border">
              <span className="text-gold text-[13px] font-semibold tracking-wide uppercase">Gig Driver Program</span>
            </div>

            {/* Main Headline - Ramp-style bold */}
            <h1 className="text-[48px] lg:text-[64px] xl:text-[76px] leading-[1.02] tracking-[-0.03em] mb-6">
              <span className="text-gold font-serif italic font-bold">Stop Renting.</span>
              <br />
              <span className="text-white font-serif italic">Start Owning.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-white/90 text-[20px] lg:text-[26px] font-light leading-snug mb-8 max-w-[650px]">
              A Smarter Vehicle Path for Gig Drivers Ready to Win
            </p>

            {/* Body copy */}
            <p className="text-white/60 text-[16px] lg:text-[18px] leading-relaxed mb-10 max-w-[550px]">
              If you drive for Uber, Lyft, delivery apps, or other gig platforms, chances are you&apos;ve been told renting is the &quot;easy&quot; option.
              <br /><br />
              <span className="text-white/80 italic">Easy to start. Easy to stay stuck.</span>
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
              No credit check required to see if you qualify.
            </p>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0a1a40] to-transparent" />
      </section>

      {/* Section 2: The Problem With Renting */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-[#0a1a40]">
        <div className="relative z-10 max-w-[1200px] mx-auto px-8 lg:px-16">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-gold/80 text-[14px] uppercase tracking-wider mb-4 font-medium">
              What no one explains upfront
            </p>
            <h2 className="text-white text-[38px] lg:text-[48px] xl:text-[54px] font-bold leading-[1.1] mb-6">
              The Problem With Renting
            </h2>
            <p className="text-white/60 text-[17px] lg:text-[19px] max-w-[600px] mx-auto">
              Most gig drivers don&apos;t realize how expensive renting really is until months — or years — have passed.
            </p>
          </div>

          {/* Problem Cards */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-14">
            {rentalProblems.map((problem) => (
              <div
                key={problem.title}
                className="group relative bg-gradient-to-b from-white/[0.04] to-transparent border border-white/10 rounded-2xl p-8 hover:border-cta-red/30 hover:from-cta-red/[0.03] transition-all duration-500"
              >
                {/* Title */}
                <h3 className="text-white text-[18px] lg:text-[20px] font-semibold mb-3 leading-tight">
                  {problem.title}
                </h3>
                
                {/* Description */}
                <p className="text-white/60 text-[15px] leading-relaxed">
                  {problem.description}
                </p>
              </div>
            ))}
          </div>

          {/* Tagline */}
          <div className="text-center">
            <div className="inline-block bg-white/5 border border-white/10 rounded-xl px-8 py-5">
              <p className="text-[20px] lg:text-[24px]">
                <span className="text-white/80">You stay busy.</span>
                <span className="text-gold font-serif italic ml-3">They build the asset.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: The Smarter Alternative */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(180deg, #0a1a40 0%, #152d68 50%, #1F3E8E 100%)
            `,
          }}
        />

        <div className="relative z-10 max-w-[900px] mx-auto px-8 lg:px-16 text-center">
          {/* Section Header */}
          <p className="text-white/60 text-[17px] lg:text-[19px] mb-4">
            There&apos;s a better way.
          </p>
          
          <h2 className="text-gold text-[40px] lg:text-[52px] xl:text-[58px] font-serif italic mb-6">
            Drive With a Plan
          </h2>

          <p className="text-white/80 text-[17px] lg:text-[19px] leading-relaxed mb-10 max-w-[700px] mx-auto">
            Instead of renting endlessly, we offer a clear path designed specifically for working drivers — people who actually put in the miles.
          </p>

          {/* Key Message Box */}
          <div className="relative bg-gold/10 border border-gold/25 rounded-2xl p-8 lg:p-10 animate-pulse-border">
            <p className="text-gold text-[22px] lg:text-[28px] font-serif italic leading-snug">
              This isn&apos;t about credit scores.
              <br />
              <span className="text-white/90">It&apos;s about consistency, effort, and earning power.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: What Makes This Different */}
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
            <h2 className="text-white text-[38px] lg:text-[48px] font-serif italic mb-4">
              What Makes This <span className="text-gold">Different</span>
            </h2>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {programFeatures.map((feature) => (
              <div
                key={feature.title}
                className="group relative bg-gradient-to-b from-white/[0.06] to-transparent border border-white/10 rounded-2xl p-8 hover:border-gold/25 transition-all duration-500"
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Title */}
                <h3 className="text-white text-[22px] lg:text-[26px] font-serif italic mb-3">
                  {feature.title}
                </h3>
                
                {/* Description */}
                <p className="text-white/70 text-[15px] lg:text-[16px] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Why Tesla */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-[#0a1a40]">
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-navy-secondary/30 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-[1200px] mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Column - Content */}
            <div>
              <p className="text-gold/80 text-[14px] uppercase tracking-wider mb-4 font-medium">
                The vehicle advantage
              </p>
              <h2 className="text-white text-[40px] lg:text-[50px] font-serif italic mb-6">
                Why <span className="text-gold">Tesla</span>?
              </h2>

              <p className="text-white/70 text-[16px] lg:text-[18px] leading-relaxed mb-10">
                Gig drivers need more than just &quot;a car.&quot; They need a tool that maximizes earnings. Tesla vehicles are uniquely suited for gig work.
              </p>

              {/* Benefits List */}
              <div className="space-y-5">
                {teslaBenefits.map((benefit) => (
                  <div key={benefit.title}>
                    <h4 className="text-white text-[17px] lg:text-[18px] font-semibold mb-1">
                      {benefit.title}
                    </h4>
                    <p className="text-white/60 text-[14px] lg:text-[15px]">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Tagline Card */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gold/10 rounded-3xl blur-2xl scale-90" />
                
                <div className="relative bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-gold/20 rounded-3xl p-10 lg:p-14 max-w-[400px]">
                  <div className="space-y-4 text-center">
                    <p className="text-gold text-[28px] lg:text-[34px] font-serif italic leading-tight">
                      More comfort.
                    </p>
                    <p className="text-gold text-[28px] lg:text-[34px] font-serif italic leading-tight">
                      More efficiency.
                    </p>
                    <p className="text-white text-[28px] lg:text-[34px] font-serif italic leading-tight">
                      More income potential.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Built for Drivers Ready to Win */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{
            background: `linear-gradient(180deg, #0a1a40 0%, #152d68 100%)`,
          }}
        />

        <div className="relative z-10 max-w-[900px] mx-auto px-8 lg:px-16">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-white text-[38px] lg:text-[48px] font-serif italic mb-6">
              Built for Drivers <span className="text-gold">Ready to Win</span>
            </h2>
            
            <div className="inline-block bg-cta-red/10 border border-cta-red/20 rounded-xl px-8 py-4 mb-10">
              <p className="text-white text-[20px] lg:text-[24px] font-bold">
                We don&apos;t care about your credit history.
              </p>
            </div>

            <p className="text-white/70 text-[17px] lg:text-[19px] mb-10">
              We care about:
            </p>
          </div>

          {/* Qualities List */}
          <div className="max-w-[500px] mx-auto space-y-5 mb-12">
            {driverQualities.map((quality, index) => (
              <div
                key={quality}
                className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl px-6 py-4 hover:border-gold/30 hover:bg-gold/5 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="text-white text-[17px] lg:text-[19px] font-medium">{quality}</span>
              </div>
            ))}
          </div>

          {/* Bottom Message */}
          <p className="text-center text-white/70 text-[16px] lg:text-[18px] italic max-w-[600px] mx-auto">
            If you&apos;re already hustling, this model is designed to reward that effort — rather than siphon it away through endless rental fees.
          </p>
        </div>
      </section>

      {/* Section 7: From Expense to Asset */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-[#0a1a40]">
        <div className="relative z-10 max-w-[1100px] mx-auto px-8 lg:px-16">
          {/* Section Header */}
          <div className="text-center mb-14">
            <p className="text-white/60 text-[17px] mb-4">
              Rentals are a temporary solution that never ends.
            </p>
            <h2 className="text-gold text-[40px] lg:text-[52px] font-serif italic mb-4">
              From Expense to Asset
            </h2>
            <p className="text-white/80 text-[18px] lg:text-[20px]">
              This is different.
            </p>
          </div>

          {/* Asset Benefits */}
          <div className="space-y-6 mb-14">
            {assetBenefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="flex gap-6 items-start bg-gradient-to-r from-white/[0.04] to-transparent border border-white/10 rounded-2xl p-6 lg:p-8 hover:border-gold/20 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center text-gold font-serif italic text-[20px]">
                  {index + 1}
                </div>
                <div>
                  <h4 className="text-white text-[18px] lg:text-[20px] font-semibold mb-2">
                    {benefit.title}
                  </h4>
                  <p className="text-white/60 text-[15px] lg:text-[16px]">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Tagline */}
          <div className="text-center">
            <p className="text-[24px] lg:text-[30px]">
              <span className="text-white/80">Same hustle.</span>
              <span className="text-gold font-serif italic ml-3">Better outcome.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Who This Is For - Brief section */}
      <section className="relative py-16 lg:py-20 overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, #1a3578 0%, #1F3E8E 100%)`,
          }}
        />

        <div className="relative z-10 max-w-[900px] mx-auto px-8 lg:px-16 text-center">
          <h2 className="text-white text-[32px] lg:text-[40px] font-serif italic mb-8">
            Who This Is For
          </h2>

          <p className="text-white/70 text-[16px] lg:text-[18px] mb-8">
            This program is built for gig drivers who:
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {eligibilityCriteria.map((criteria) => (
              <div
                key={criteria}
                className="bg-white/5 border border-white/10 rounded-full px-5 py-2.5 hover:bg-gold/10 hover:border-gold/30 transition-all duration-300"
              >
                <span className="text-white/90 text-[14px] lg:text-[15px]">{criteria}</span>
              </div>
            ))}
          </div>

          <p className="text-gold text-[18px] lg:text-[20px] font-serif italic">
            If that sounds like you, you&apos;re in the right place.
          </p>
        </div>
      </section>

      {/* Section 8: Final CTA */}
      <section
        id="apply"
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
            Start Driving Today.
            <br />
            <span className="text-white">Build Ownership Tomorrow.</span>
          </h2>

          {/* Body copy */}
          <div className="space-y-4 mb-10">
            <p className="text-white/80 text-[18px] lg:text-[20px]">
              You&apos;re already doing the work.
            </p>
            <p className="text-white text-[18px] lg:text-[20px] font-medium">
              Now it&apos;s time for the work to start working for you.
            </p>
          </div>

          {/* Taglines */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <span className="text-gold text-[16px] lg:text-[18px] font-medium">Stop renting.</span>
            <span className="text-gold text-[16px] lg:text-[18px] font-medium">Start owning.</span>
            <span className="text-white/80 text-[16px] lg:text-[18px]">Strengthen your financial future.</span>
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
            No pressure. Just clarity.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}




