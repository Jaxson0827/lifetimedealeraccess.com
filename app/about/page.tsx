"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

// Note: Metadata must be in a separate server component for client components
// For SEO, consider refactoring to use generateMetadata or a server component wrapper

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState("leadership");

  const leadershipTeam = [
    {
      name: "Founder & CEO",
      title: "Chief Executive Officer",
      bio: "Founded Lifetime Auto with a vision to give consumers access to true wholesale pricing through dealer-only auctions. With years of experience in the automotive industry, [Name] leads our mission to represent buyers, not negotiate against them.",
      twitter: "#",
      linkedin: "#",
      image: "/images/team/placeholder.jpg",
    },
    {
      name: "Chief Buying Consultant",
      title: "Head of Vehicle Acquisition",
      bio: "Oversees our nationwide sourcing operations, leveraging institutional-grade technology to access dealer-only auctions. Ensures every vehicle meets our strict quality and value standards before client approval.",
      twitter: "#",
      linkedin: "#",
      image: "/images/team/placeholder.jpg",
    },
    {
      name: "Director of Operations",
      title: "Head of Client Services",
      bio: "Manages the end-to-end client experience, from initial consultation through delivery. Ensures transparency, communication, and satisfaction at every step of the buying process.",
      twitter: "#",
      linkedin: "#",
      image: "/images/team/placeholder.jpg",
    },
  ];

  const buyingConsultants = [
    {
      name: "Senior Buying Consultant",
      title: "Vehicle Acquisition Specialist",
      bio: "Specializes in sourcing vehicles from nationwide dealer-only auctions. Expert in condition reports, market analysis, and helping clients find the perfect vehicle at true wholesale pricing.",
      twitter: "#",
      linkedin: "#",
      image: "/images/team/placeholder.jpg",
    },
    {
      name: "Buying Consultant",
      title: "Turo Investment Specialist",
      bio: "Focuses on helping entrepreneurs build vehicle portfolios for Turo car-sharing. Provides data-driven guidance on vehicle selection, market demand, and investment strategy.",
      twitter: "#",
      linkedin: "#",
      image: "/images/team/placeholder.jpg",
    },
    {
      name: "Buying Consultant",
      title: "Gig Driver Program Specialist",
      bio: "Dedicated to helping gig drivers transition from renting to owning. Understands the unique needs of rideshare and delivery drivers and finds vehicles optimized for their work.",
      twitter: "#",
      linkedin: "#",
      image: "/images/team/placeholder.jpg",
    },
  ];


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

      {/* Who We Are Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-8 lg:px-16">
          <h2 className="text-navy-dark text-[36px] lg:text-[44px] font-bold mb-6">
            Who we are
          </h2>
          <div className="space-y-6 text-[16px] lg:text-[18px] leading-relaxed text-gray-700">
            <p>
              <strong>Lifetime Auto</strong> is a buyer representation service that gives consumers access to true wholesale pricing through dealer-only auctions nationwide. We represent you as your buying consultant — not against you. Flat fee. No commissions. No games.
            </p>
            <p>
              Founded with a mission to level the playing field, Lifetime Auto empowers buyers with the same wholesale auction access that dealers have. We use institutional-grade technology to source vehicles from hundreds of dealer-only auctions, ensuring you pay what dealers pay — not retail markups.
            </p>
            <p>
              Whether you're buying a personal vehicle, building a Turo investment portfolio, or need a reliable car for gig work, we provide dedicated buyer representation with total transparency at every step.
            </p>
          </div>
        </div>
      </section>

      {/* Our People Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <h2 className="text-navy-dark text-[36px] lg:text-[44px] font-bold mb-8">
            Our people
          </h2>

          {/* Tab Navigation */}
          <div className="border-b border-gray-300 mb-8">
            <div className="flex gap-8">
              <button
                onClick={() => setActiveTab("leadership")}
                className={`pb-4 px-2 text-[16px] lg:text-[18px] font-semibold border-b-2 transition-colors ${
                  activeTab === "leadership"
                    ? "text-navy-dark border-navy-dark"
                    : "text-gray-500 border-transparent hover:text-navy-dark"
                }`}
              >
                Leadership
              </button>
              <button
                onClick={() => setActiveTab("consultants")}
                className={`pb-4 px-2 text-[16px] lg:text-[18px] font-semibold border-b-2 transition-colors ${
                  activeTab === "consultants"
                    ? "text-navy-dark border-navy-dark"
                    : "text-gray-500 border-transparent hover:text-navy-dark"
                }`}
              >
                Buying Consultants
              </button>
            </div>
          </div>

          {/* Tab Content */}
          {activeTab === "leadership" && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {leadershipTeam.map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="aspect-square bg-gray-200 relative">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                      <svg
                        className="w-24 h-24"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-navy-dark text-[20px] font-bold mb-1">
                          {member.name}
                        </h3>
                        <p className="text-gray-600 text-[14px] mb-4">
                          {member.title}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <a
                          href={member.twitter}
                          className="text-gray-400 hover:text-navy-dark transition-colors"
                          aria-label="Twitter"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                          </svg>
                        </a>
                        <a
                          href={member.linkedin}
                          className="text-gray-400 hover:text-navy-dark transition-colors"
                          aria-label="LinkedIn"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                    <p className="text-gray-700 text-[14px] leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "consultants" && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {buyingConsultants.map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="aspect-square bg-gray-200 relative">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                      <svg
                        className="w-24 h-24"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-navy-dark text-[20px] font-bold mb-1">
                          {member.name}
                        </h3>
                        <p className="text-gray-600 text-[14px] mb-4">
                          {member.title}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <a
                          href={member.twitter}
                          className="text-gray-400 hover:text-navy-dark transition-colors"
                          aria-label="Twitter"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                          </svg>
                        </a>
                        <a
                          href={member.linkedin}
                          className="text-gray-400 hover:text-navy-dark transition-colors"
                          aria-label="LinkedIn"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                    <p className="text-gray-700 text-[14px] leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
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




