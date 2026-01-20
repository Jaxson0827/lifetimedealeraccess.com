import { Metadata } from "next";
import Header from "@/components/Header";
import Link from "next/link";
import { SITE_EMAIL, SITE_PHONE_DISPLAY, SITE_PHONE_TEL, SOCIAL_LINKS } from "@/lib/site-contact";

export const metadata: Metadata = {
  title: "Contact Us | Lifetime Auto Sales",
  description: "Get in touch with our buying consultants. Chat, call, or schedule a consultation to access wholesale vehicle pricing.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#e8f4fc]">
      <Header />

      {/* Main Content */}
      <div className="pt-[65px]">
        {/* Hero Section */}
        <section className="py-12 lg:py-16">
          <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
            {/* Main Headline */}
            <h1 className="text-[#1F3E8E] text-[32px] lg:text-[42px] font-bold mb-3">
              Reach a Buying Consultant
            </h1>
            <p className="text-[#4a5568] text-[16px] lg:text-[18px] mb-10">
              Get in touch and let us help you access wholesale pricing.
            </p>

            {/* Main Contact Cards */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {/* Chat Card */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col h-full">
                {/* Icon */}
                <div className="mb-6">
                  <svg
                    className="w-14 h-14 text-[#1F3E8E]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
                    />
                  </svg>
                </div>

                <div className="flex-1">
                  <h2 className="text-[#1F3E8E] text-[18px] lg:text-[20px] font-bold mb-3">
                    Have questions? Just ask.
                  </h2>
                  <p className="text-[#4a5568] text-[15px] lg:text-[16px]">
                    You can chat with us anytime for quick answers about wholesale buying.
                  </p>
                </div>

                <a
                  href="/contact/message"
                  className="mt-6 inline-flex items-center gap-2 bg-[#1F3E8E] text-white text-[15px] font-semibold px-6 py-3.5 rounded-full hover:bg-[#152d68] transition-colors duration-200"
                >
                  Chat with us
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375"
                    />
                  </svg>
                </a>
              </div>

              {/* Phone Card */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col h-full">
                {/* Icon */}
                <div className="mb-6">
                  <svg
                    className="w-14 h-14 text-[#1F3E8E]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                    />
                  </svg>
                </div>

                <div className="flex-1">
                  <h2 className="text-[#1F3E8E] text-[18px] lg:text-[20px] font-bold mb-3">
                    Want to talk to someone over the phone?
                  </h2>
                  <p className="text-[#4a5568] text-[15px] lg:text-[16px]">
                    Give our buying consultant team a call:
                  </p>
                </div>

                <a
                  href={`tel:${SITE_PHONE_TEL}`}
                  className="mt-6 inline-flex items-center gap-2 bg-[#1F3E8E] text-white text-[15px] font-semibold px-6 py-3.5 rounded-full hover:bg-[#152d68] transition-colors duration-200"
                >
                  {SITE_PHONE_DISPLAY}
                </a>
              </div>
            </div>

            {/* Secondary Contact Cards */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {/* Schedule Consultation Card */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h3 className="text-[#1F3E8E] text-[20px] lg:text-[22px] font-bold mb-3">
                  Schedule a Buying Consultation
                </h3>
                <p className="text-[#4a5568] text-[15px] lg:text-[16px] mb-4">
                  Ready to access wholesale pricing? Book a free 10-minute consultation with one of our buying consultants.
                </p>
                <p className="text-[#4a5568] text-[14px] mb-6">
                  <span className="font-medium">Available:</span> Mon–Fri, 9am–6pm ET
                </p>

                <a
                  href="/get-started"
                  className="inline-flex items-center gap-2 text-[#1F3E8E] text-[15px] font-semibold hover:underline underline-offset-4"
                >
                  Get Started
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </a>
              </div>

              {/* Reach us on Social Media Card */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h3 className="text-[#1F3E8E] text-[20px] lg:text-[22px] font-bold mb-3">
                  Reach us on social media
                </h3>
                <p className="text-[#4a5568] text-[15px] lg:text-[16px] mb-6">
                  Our team is also happy to help via our social channels.
                </p>

                <div className="flex gap-4">
                  {/* Facebook */}
                  <a
                    href={SOCIAL_LINKS.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[#e8f4fc] rounded-full flex items-center justify-center text-[#1F3E8E] hover:bg-[#1F3E8E] hover:text-white transition-colors duration-200"
                    aria-label="Facebook"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>

                  {/* Instagram */}
                  <a
                    href={SOCIAL_LINKS.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[#e8f4fc] rounded-full flex items-center justify-center text-[#1F3E8E] hover:bg-[#1F3E8E] hover:text-white transition-colors duration-200"
                    aria-label="Instagram"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>

                  {/* YouTube */}
                  <a
                    href={SOCIAL_LINKS.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[#e8f4fc] rounded-full flex items-center justify-center text-[#1F3E8E] hover:bg-[#1F3E8E] hover:text-white transition-colors duration-200"
                    aria-label="YouTube"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>

                  {/* X (Twitter) */}
                  <a
                    href={SOCIAL_LINKS.x}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[#e8f4fc] rounded-full flex items-center justify-center text-[#1F3E8E] hover:bg-[#1F3E8E] hover:text-white transition-colors duration-200"
                    aria-label="X (Twitter)"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Service-Specific Contact Section */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-[#1F3E8E] text-[20px] lg:text-[22px] font-bold mb-6">
                Contact for Specific Services
              </h3>

              <div className="grid md:grid-cols-3 gap-6">
                {/* Lifetime Warranty */}
                <div className="border-l-4 border-[#C9A227] pl-4">
                  <h4 className="text-[#1F3E8E] text-[16px] font-bold mb-2">
                    Lifetime Warranty
                  </h4>
                  <p className="text-[#4a5568] text-[14px] mb-3">
                    Questions about our warranty coverage and protection plans.
                  </p>
                  <Link
                    href="/warranty"
                    className="text-[#1F3E8E] text-[14px] font-semibold hover:underline underline-offset-4"
                  >
                    Learn more →
                  </Link>
                </div>

                {/* Turo Investors */}
                <div className="border-l-4 border-[#C9A227] pl-4">
                  <h4 className="text-[#1F3E8E] text-[16px] font-bold mb-2">
                    Turo Investors
                  </h4>
                  <p className="text-[#4a5568] text-[14px] mb-3">
                    Fleet sourcing for Turo rental business owners.
                  </p>
                  <Link
                    href="/turo-investor"
                    className="text-[#1F3E8E] text-[14px] font-semibold hover:underline underline-offset-4"
                  >
                    Learn more →
                  </Link>
                </div>

                {/* Gig Drivers */}
                <div className="border-l-4 border-[#C9A227] pl-4">
                  <h4 className="text-[#1F3E8E] text-[16px] font-bold mb-2">
                    Gig Drivers
                  </h4>
                  <p className="text-[#4a5568] text-[14px] mb-3">
                    Affordable, reliable vehicles for rideshare and delivery.
                  </p>
                  <Link
                    href="/gig-drivers"
                    className="text-[#1F3E8E] text-[14px] font-semibold hover:underline underline-offset-4"
                  >
                    Learn more →
                  </Link>
                </div>
              </div>
            </div>

            {/* Email Contact Section */}
            <div className="mt-12 text-center">
              <p className="text-[#4a5568] text-[15px] mb-2">
                Prefer email? Reach us at:
              </p>
              <a
                href={`mailto:${SITE_EMAIL}`}
                className="text-[#1F3E8E] text-[18px] font-semibold hover:underline underline-offset-4"
              >
                {SITE_EMAIL}
              </a>
            </div>
          </div>
        </section>

        {/* FAQ Teaser Section */}
        <section className="py-12 bg-white">
          <div className="max-w-[1200px] mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-[#1F3E8E] text-[24px] lg:text-[28px] font-bold mb-4">
              Have more questions?
            </h2>
            <p className="text-[#4a5568] text-[16px] mb-6 max-w-[600px] mx-auto">
              Check out our frequently asked questions or schedule a consultation to speak directly with a buying consultant.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#faq"
                className="inline-flex items-center justify-center gap-2 bg-[#1F3E8E] text-white text-[15px] font-semibold px-8 py-3.5 rounded-full hover:bg-[#152d68] transition-colors duration-200"
              >
                View FAQs
              </a>
              <a
                href="/get-started"
                className="inline-flex items-center justify-center gap-2 border-2 border-[#1F3E8E] text-[#1F3E8E] text-[15px] font-semibold px-8 py-3.5 rounded-full hover:bg-[#1F3E8E] hover:text-white transition-colors duration-200"
              >
                Get Started
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#1F3E8E] py-8">
          <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-white/80 text-[14px]">
                © {new Date().getFullYear()} Lifetime Auto Sales. All rights reserved.
              </p>
              <div className="flex gap-6">
                <a href="#" className="text-white/80 text-[14px] hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-white/80 text-[14px] hover:text-white transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}




