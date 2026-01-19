"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { hasAttribution, getAttributionFormFields } from "@/lib/attribution";

export default function MessagePage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Redirect to attribution gate if no attribution captured
  useEffect(() => {
    if (!hasAttribution()) {
      router.replace("/get-started");
    }
  }, [router]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      // Get attribution data
      const attributionFields = getAttributionFormFields();

      // Submit to GoHighLevel via API route
      const requestBody = {
        ...formData,
        ...attributionFields,
      };

      const response = await fetch("/api/gohighlevel/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        let errorData;
        try {
          errorData = await response.json();
        } catch (parseError) {
          const text = await response.text();
          errorData = { error: text || "Failed to submit form" };
        }
        throw new Error(errorData.error || "Failed to submit form");
      }

      const responseData = await response.json();

      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(
        "There was an error submitting your message. Please try again or contact us directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <main className="min-h-screen bg-[#0a1a40]">
        <Header />

        <div className="pt-[65px] min-h-screen flex items-center justify-center px-4">
          <div className="w-full max-w-[500px] text-center">
            <div className="bg-white rounded-2xl shadow-2xl px-8 py-12">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              
              <h1 className="text-[#1F3E8E] text-[26px] font-bold mb-3">
                Message Sent!
              </h1>
              
              <p className="text-gray-600 text-[16px] mb-8">
                Thank you for reaching out. A buying consultant will follow up with you shortly.
              </p>

              <a
                href="/"
                className="inline-block bg-[#1F3E8E] text-white text-[15px] font-semibold px-8 py-3 rounded-lg hover:bg-[#152d68] transition-colors duration-200"
              >
                Return Home
              </a>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0a1a40]">
      <Header />

      <div className="pt-[65px] min-h-screen flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-[560px]">
          {/* Form Card */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-[#1F3E8E] to-[#152d68] px-8 py-6">
              <h1 className="text-white text-[24px] lg:text-[28px] font-bold">
                Send Us a Message
              </h1>
              <p className="text-white/70 text-[15px] mt-2">
                Have a quick question? We&apos;ll follow up shortly.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="px-8 py-8">
              {/* Name Row */}
              <div className="grid grid-cols-2 gap-4 mb-5">
                <div>
                  <label htmlFor="firstName" className="block text-gray-700 text-[14px] font-medium mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-[15px] focus:ring-2 focus:ring-[#1F3E8E] focus:border-[#1F3E8E] outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-gray-700 text-[14px] font-medium mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-[15px] focus:ring-2 focus:ring-[#1F3E8E] focus:border-[#1F3E8E] outline-none"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="mb-5">
                <label htmlFor="email" className="block text-gray-700 text-[14px] font-medium mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-[15px] focus:ring-2 focus:ring-[#1F3E8E] focus:border-[#1F3E8E] outline-none"
                />
              </div>

              {/* Phone */}
              <div className="mb-5">
                <label htmlFor="phone" className="block text-gray-700 text-[14px] font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(optional)"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-[15px] focus:ring-2 focus:ring-[#1F3E8E] focus:border-[#1F3E8E] outline-none"
                />
              </div>

              {/* Message */}
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 text-[14px] font-medium mb-2">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="How can we help you?"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-[15px] focus:ring-2 focus:ring-[#1F3E8E] focus:border-[#1F3E8E] outline-none resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 rounded-lg text-[16px] font-semibold transition-all duration-200 ${
                  isSubmitting
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : "bg-cta-red text-white hover:bg-red-700 cursor-pointer"
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>

          {/* Back Link */}
          <div className="mt-6 text-center">
            <a
              href="/get-started/options"
              className="text-white/60 text-[14px] hover:text-white transition-colors"
            >
              ← Back to options
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

