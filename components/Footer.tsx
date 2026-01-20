import Link from "next/link";
import { SITE_EMAIL, SITE_PHONE_DISPLAY, SITE_PHONE_TEL, SOCIAL_LINKS } from "@/lib/site-contact";

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-12">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white text-[16px] font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 text-[14px] hover:text-white transition-colors">
                  Personal Vehicle Buying
                </Link>
              </li>
              <li>
                <Link href="/turo-investor" className="text-gray-400 text-[14px] hover:text-white transition-colors">
                  Turo Investment Vehicles
                </Link>
              </li>
              <li>
                <Link href="/gig-drivers" className="text-gray-400 text-[14px] hover:text-white transition-colors">
                  Gig Driver Program
                </Link>
              </li>
              <li>
                <Link href="/warranty" className="text-gray-400 text-[14px] hover:text-white transition-colors">
                  Lifetime Warranty
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-[16px] font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 text-[14px] hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 text-[14px] hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/#how-it-works" className="text-gray-400 text-[14px] hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-[16px] font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#schedule" className="text-gray-400 text-[14px] hover:text-white transition-colors">
                  Schedule Consultation
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 text-[14px] hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-[16px] font-semibold mb-4">Connect</h3>
            <div className="flex gap-4">
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href={SOCIAL_LINKS.x}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="X"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 7.2A4.8 4.8 0 1 0 16.8 12 4.81 4.81 0 0 0 12 7.2zm0 7.9A3.1 3.1 0 1 1 15.1 12 3.11 3.11 0 0 1 12 15.1zm6.12-7.98a1.12 1.12 0 1 1-1.12-1.12 1.12 1.12 0 0 1 1.12 1.12z" />
                  <path d="M20.4 6.2a4.6 4.6 0 0 0-2.62-2.62C16.2 3 12 3 12 3s-4.2 0-5.78.58A4.6 4.6 0 0 0 3.6 6.2C3 7.78 3 12 3 12s0 4.22.6 5.8a4.6 4.6 0 0 0 2.62 2.62C7.8 21 12 21 12 21s4.2 0 5.78-.58a4.6 4.6 0 0 0 2.62-2.62C21 16.22 21 12 21 12s0-4.22-.6-5.8zM12 17.3A5.3 5.3 0 1 1 17.3 12 5.31 5.31 0 0 1 12 17.3z" />
                </svg>
              </a>
              <a
                href={SOCIAL_LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31.3 31.3 0 0 0 0 12a31.3 31.3 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1 31.3 31.3 0 0 0 .5-5.8 31.3 31.3 0 0 0-.5-5.8zM9.6 15.5v-7l6.1 3.5z" />
                </svg>
              </a>
              <a
                href={SOCIAL_LINKS.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="TikTok"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16.5 3.2c.5 1.8 2 3.2 3.9 3.5v3a7.4 7.4 0 0 1-3.9-1.2v6.6a5.6 5.6 0 1 1-5.6-5.6c.2 0 .5 0 .7.1v3.1a2.5 2.5 0 1 0 1.8 2.4V2.9h3.1z" />
                </svg>
              </a>
            </div>

            <div className="mt-5 space-y-2">
              <a
                href={`tel:${SITE_PHONE_TEL}`}
                className="block text-gray-400 text-[14px] hover:text-white transition-colors"
              >
                {SITE_PHONE_DISPLAY}
              </a>
              <a
                href={`mailto:${SITE_EMAIL}`}
                className="block text-gray-400 text-[14px] hover:text-white transition-colors break-all"
              >
                {SITE_EMAIL}
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 mt-8">
          <p className="text-gray-400 text-[14px] text-center">
            © {new Date().getFullYear()} Lifetime Auto Sales. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

