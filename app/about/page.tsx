import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="bg-white min-h-screen">
      <Header />

      {/* Hero Section - Office Image with Overlay */}
      <section className="relative pt-[65px] h-[500px] lg:h-[600px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/90 via-navy-dark/70 to-transparent z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/sections/about-hero.png')",
            backgroundPosition: "center",
          }}
        />
        <div className="relative z-20 h-full flex items-end">
          <div className="max-w-[1400px] mx-auto w-full px-8 lg:px-16 pb-12 lg:pb-16">
            <h1 className="text-white text-[48px] lg:text-[64px] xl:text-[72px] font-bold leading-tight">
              About Lifetime Auto
            </h1>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-8 lg:px-16">
          <h2 className="text-navy-dark text-[36px] lg:text-[44px] font-bold mb-2">
            About Us
          </h2>

          <h3 className="text-navy-dark text-[26px] lg:text-[32px] font-semibold mt-8 mb-3">
            A Better Way to Buy a Car
          </h3>
          <div className="space-y-6 text-[16px] lg:text-[18px] leading-relaxed text-gray-700">
            <p>
              At <strong>Lifetime Dealer Access</strong>, we believe buying a car
              shouldn&apos;t feel stressful, confusing, or stacked against you.
            </p>
            <p>
              For too long, the traditional dealership model has relied on
              pressure, hidden markups, and misaligned incentives. We knew there
              had to be a better way — one built on transparency, advocacy, and
              long-term value for the buyer.
            </p>
            <p>
              <strong>So we built it.</strong>
            </p>
          </div>

          <h3 className="text-navy-dark text-[26px] lg:text-[32px] font-semibold mt-10 mb-3">
            What We Do
          </h3>
          <div className="space-y-6 text-[16px] lg:text-[18px] leading-relaxed text-gray-700">
            <p>
              Lifetime Dealer Access is a wholesale car-buying consultant
              service designed to put the customer first.
            </p>
            <p>
              Instead of selling cars off a lot, we represent you — the buyer.
            </p>
            <div>
              <p className="font-semibold text-navy-dark mb-3">
                Our consultants help clients:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-navy-dark/50 mt-1">•</span>
                  <span>Access dealer-only auctions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-navy-dark/50 mt-1">•</span>
                  <span>Buy vehicles at true wholesale pricing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-navy-dark/50 mt-1">•</span>
                  <span>Avoid inflated retail markups</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-navy-dark/50 mt-1">•</span>
                  <span>Make confident, informed decisions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-navy-dark/50 mt-1">•</span>
                  <span>Protect their investment long after the purchase</span>
                </li>
              </ul>
            </div>
            <p>
              We work on a simple, transparent <strong>flat-fee</strong> model,
              not commissions based on how much you spend.
            </p>
          </div>

          <h3 className="text-navy-dark text-[26px] lg:text-[32px] font-semibold mt-10 mb-3">
            How We&apos;re Different
          </h3>
          <div className="grid md:grid-cols-2 gap-4 lg:gap-6 mt-6">
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 lg:p-6">
              <p className="text-navy-dark font-bold mb-2">✔ No dealership pressure</p>
              <p className="text-gray-700 leading-relaxed">
                We don&apos;t sell cars — we help you buy them.
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 lg:p-6">
              <p className="text-navy-dark font-bold mb-2">✔ Wholesale access</p>
              <p className="text-gray-700 leading-relaxed">
                You gain access to the same auctions dealers use every day.
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 lg:p-6">
              <p className="text-navy-dark font-bold mb-2">✔ Fixed, transparent pricing</p>
              <p className="text-gray-700 leading-relaxed">
                One flat consulting fee. No games. No surprises.
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 lg:p-6">
              <p className="text-navy-dark font-bold mb-2">✔ Built-in protection</p>
              <p className="text-gray-700 leading-relaxed">
                Every qualifying vehicle includes a Lifetime Warranty, covering
                major mechanical systems for as long as you own the car — with
                no mileage limit.
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 lg:p-6 md:col-span-2">
              <p className="text-navy-dark font-bold mb-2">✔ Nationwide support</p>
              <p className="text-gray-700 leading-relaxed">
                Repairs can be completed at any authorized repair facility in
                the U.S. or Canada — not limited to a specific dealership.
              </p>
            </div>
          </div>

          <h3 className="text-navy-dark text-[26px] lg:text-[32px] font-semibold mt-10 mb-3">
            Our Lifetime Warranty
          </h3>
          <div className="space-y-6 text-[16px] lg:text-[18px] leading-relaxed text-gray-700">
            <p>
              We believe real value doesn&apos;t stop when you drive off the lot.
            </p>
            <p>
              That&apos;s why we include a Lifetime Warranty on qualifying vehicles
              — protecting major mechanical systems for the entire time you own
              your car.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-navy-dark/50 mt-1">•</span>
                <span>No mileage caps</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-navy-dark/50 mt-1">•</span>
                <span>No dealership lock-in</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-navy-dark/50 mt-1">•</span>
                <span>Nationwide repair coverage</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-navy-dark/50 mt-1">•</span>
                <span>Designed to reduce long-term ownership costs</span>
              </li>
            </ul>
            <p>It&apos;s peace of mind that lasts long after the purchase.</p>
          </div>

          <h3 className="text-navy-dark text-[26px] lg:text-[32px] font-semibold mt-10 mb-3">
            Our Philosophy
          </h3>
          <div className="space-y-6 text-[16px] lg:text-[18px] leading-relaxed text-gray-700">
            <p>We operate on one simple principle:</p>
            <p className="text-navy-dark font-semibold">
              If it&apos;s not a win for the customer, it&apos;s not a deal.
            </p>
            <p>
              Our goal isn&apos;t to sell you a car — it&apos;s to help you buy the
              right car, at the right price, with protection you can trust.
            </p>
          </div>

          <h3 className="text-navy-dark text-[26px] lg:text-[32px] font-semibold mt-10 mb-3">
            Who We Serve
          </h3>
          <div className="space-y-6 text-[16px] lg:text-[18px] leading-relaxed text-gray-700">
            <p>We work with:</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-navy-dark/50 mt-1">•</span>
                <span>Families looking to stretch their budget</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-navy-dark/50 mt-1">•</span>
                <span>Professionals who value transparency</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-navy-dark/50 mt-1">•</span>
                <span>Buyers tired of traditional dealership experiences</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-navy-dark/50 mt-1">•</span>
                <span>
                  Anyone who wants clarity, control, and confidence in the
                  car-buying process
                </span>
              </li>
            </ul>
          </div>

          <h3 className="text-navy-dark text-[26px] lg:text-[32px] font-semibold mt-10 mb-3">
            A Smarter Way Forward
          </h3>
          <div className="space-y-6 text-[16px] lg:text-[18px] leading-relaxed text-gray-700">
            <p>Lifetime Dealer Access exists to make car buying:</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-navy-dark/50 mt-1">•</span>
                <span>Simpler</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-navy-dark/50 mt-1">•</span>
                <span>Fairer</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-navy-dark/50 mt-1">•</span>
                <span>More transparent</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-navy-dark/50 mt-1">•</span>
                <span>Less stressful</span>
              </li>
            </ul>
            <p className="text-navy-dark font-semibold">
              And ultimately — better.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-navy-dark">
        <div className="max-w-[1200px] mx-auto px-8 lg:px-16 text-center">
          <h2 className="text-white text-[36px] lg:text-[44px] font-serif italic mb-4">
            Ready to Access <span className="text-gold">Wholesale Pricing</span>?
          </h2>
          <p className="text-white/80 text-[18px] lg:text-[20px] mb-8 max-w-[600px] mx-auto">
            Schedule a free 10-minute consultation with one of our buying consultants.
          </p>
          <a
            href="/get-started"
            className="inline-block bg-cta-red text-white text-[15px] lg:text-[16px] font-semibold px-8 lg:px-10 py-4 lg:py-5 rounded-[6px] hover:bg-red-700 transition-colors duration-200"
          >
            Get Started
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}




