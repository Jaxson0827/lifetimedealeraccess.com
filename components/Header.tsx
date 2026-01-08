"use client";

import { useState } from "react";
import Logo from "./Logo";

export default function Header() {
  // #region agent log
  fetch('http://127.0.0.1:7246/ingest/00f9ee75-8139-470e-a682-0e05d6173856',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Header.tsx:7',message:'Header component rendering',data:{hasWindow:typeof window!=='undefined'},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
  // #endregion
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "How you Win", href: "/how-you-win" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const serviceLinks = [
    { label: "Lifetime Warranty", href: "/warranty" },
    { label: "Turo Investors", href: "/turo-investor" },
    { label: "Gig Drivers", href: "/gig-drivers" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-[65px] bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-[1400px] mx-auto h-full px-4 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Logo />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-7">
          <a
            href="/"
            className="text-gray-900 text-[15px] font-medium hover:text-cta-red transition-colors duration-200"
          >
            Home
          </a>
          
          {/* Services Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button
              type="button"
              className="flex items-center gap-1 text-gray-900 text-[15px] font-medium hover:text-cta-red transition-colors duration-200"
              onClick={() => setIsServicesOpen(!isServicesOpen)}
            >
              Services
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {/* Dropdown Menu */}
            <div
              className={`absolute top-full left-0 pt-2 w-48 transition-all duration-200 ${
                isServicesOpen
                  ? 'opacity-100 translate-y-0 pointer-events-auto'
                  : 'opacity-0 -translate-y-2 pointer-events-none'
              }`}
            >
              <div className="bg-white rounded-lg border border-gray-200 shadow-xl py-2">
                {serviceLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="block px-4 py-2.5 text-gray-900 text-[14px] hover:bg-gray-50 hover:text-cta-red transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {navLinks.slice(1).map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-gray-900 text-[15px] font-medium hover:text-cta-red transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <a
          href="/get-started"
          className="hidden md:inline-block bg-cta-red text-white text-[14px] lg:text-[15px] font-semibold px-5 lg:px-7 py-3 lg:py-4 rounded-[6px] whitespace-nowrap hover:bg-red-700 transition-colors duration-200"
        >
          Get Started
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="lg:hidden p-2 text-gray-900 hover:text-cta-red transition-colors duration-200"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-[65px] left-0 right-0 bg-white border-t border-gray-200 shadow-lg transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col py-4">
          {/* Home Link */}
          <a
            href="/"
            className="text-gray-900 text-[16px] font-medium px-6 py-3 hover:bg-gray-50 hover:text-cta-red transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </a>

          {/* Services Accordion */}
          <div>
            <button
              type="button"
              className="w-full flex items-center justify-between text-gray-900 text-[16px] font-medium px-6 py-3 hover:bg-gray-50 hover:text-cta-red transition-colors duration-200"
              onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
            >
              Services
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                isMobileServicesOpen ? 'max-h-48' : 'max-h-0'
              }`}
            >
              {serviceLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-gray-700 text-[15px] font-medium pl-10 pr-6 py-2.5 hover:bg-gray-50 hover:text-cta-red transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Other Nav Links */}
          {navLinks.slice(1).map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-gray-900 text-[16px] font-medium px-6 py-3 hover:bg-gray-50 hover:text-cta-red transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="px-6 py-4 border-t border-gray-200 mt-2">
            <a
              href="/get-started"
              className="block w-full text-center bg-cta-red text-white text-[15px] font-semibold px-6 py-3.5 rounded-[6px] hover:bg-red-700 transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Started
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
