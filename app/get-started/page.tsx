"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CONSULTANTS, ATTRIBUTION_SOURCES } from "@/lib/consultants";
import { saveAttribution } from "@/lib/attribution";

export default function AttributionGatePage() {
  const router = useRouter();
  const [source, setSource] = useState<"consultant" | "online" | "">("");
  const [selectedConsultant, setSelectedConsultant] = useState("");
  const [otherConsultantName, setOtherConsultantName] = useState("");

  const handleContinue = () => {
    if (!source) return;

    // Save attribution
    saveAttribution({
      source: source === "consultant" ? ATTRIBUTION_SOURCES.CONSULTANT : ATTRIBUTION_SOURCES.ONLINE,
      consultantName: selectedConsultant !== "other" ? selectedConsultant : undefined,
      otherConsultantName: selectedConsultant === "other" ? otherConsultantName : undefined,
      capturedAt: new Date().toISOString(),
    });

    // Navigate to Choice Hub
    router.push("/get-started/options");
  };

  const canContinue = source === "online" || 
    (source === "consultant" && selectedConsultant && 
      (selectedConsultant !== "other" || otherConsultantName.trim()));

  return (
    <main className="min-h-screen bg-[#0a1a40]">
      <Header />

      <div className="pt-[65px] min-h-screen flex items-center justify-center px-4">
        <div className="w-full max-w-[560px]">
          {/* Card */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-[#1F3E8E] to-[#152d68] px-8 py-6">
              <h1 className="text-white text-[24px] lg:text-[28px] font-bold text-center">
                Before we continue — one quick question
              </h1>
            </div>

            {/* Body */}
            <div className="px-8 py-8">
              <p className="text-gray-700 text-[17px] font-medium mb-6">
                Who referred you to us or have you been working with so far?
              </p>

              {/* Option 1: Referred by consultant */}
              <label className="flex items-start gap-3 mb-4 cursor-pointer group">
                <input
                  type="radio"
                  name="attribution"
                  value="consultant"
                  checked={source === "consultant"}
                  onChange={() => setSource("consultant")}
                  className="mt-1 w-5 h-5 text-[#1F3E8E] border-gray-300 focus:ring-[#1F3E8E] cursor-pointer"
                />
                <span className="text-gray-800 text-[16px] group-hover:text-[#1F3E8E] transition-colors">
                  I was referred by or have been working with a consultant
                </span>
              </label>

              {/* Consultant selection (indented) */}
              {source === "consultant" && (
                <div className="ml-8 mb-6 space-y-3 animate-in slide-in-from-top-2 duration-200">
                  <p className="text-gray-600 text-[14px] mb-3">
                    Please select their name:
                  </p>
                  
                  {CONSULTANTS.map((consultant) => (
                    <label key={consultant} className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="radio"
                        name="consultant"
                        value={consultant}
                        checked={selectedConsultant === consultant}
                        onChange={() => setSelectedConsultant(consultant)}
                        className="w-4 h-4 text-[#1F3E8E] border-gray-300 focus:ring-[#1F3E8E] cursor-pointer"
                      />
                      <span className="text-gray-700 text-[15px] group-hover:text-[#1F3E8E] transition-colors">
                        {consultant}
                      </span>
                    </label>
                  ))}

                  {/* Other option */}
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="radio"
                      name="consultant"
                      value="other"
                      checked={selectedConsultant === "other"}
                      onChange={() => setSelectedConsultant("other")}
                      className="w-4 h-4 text-[#1F3E8E] border-gray-300 focus:ring-[#1F3E8E] cursor-pointer"
                    />
                    <span className="text-gray-700 text-[15px] group-hover:text-[#1F3E8E] transition-colors">
                      Other / Not listed
                    </span>
                  </label>

                  {/* Other text input */}
                  {selectedConsultant === "other" && (
                    <input
                      type="text"
                      value={otherConsultantName}
                      onChange={(e) => setOtherConsultantName(e.target.value)}
                      placeholder="Enter consultant name"
                      className="ml-7 w-[calc(100%-1.75rem)] px-4 py-2.5 border border-gray-300 rounded-lg text-[15px] focus:ring-2 focus:ring-[#1F3E8E] focus:border-[#1F3E8E] outline-none"
                    />
                  )}
                </div>
              )}

              {/* Option 2: Found online */}
              <label className="flex items-start gap-3 mb-8 cursor-pointer group">
                <input
                  type="radio"
                  name="attribution"
                  value="online"
                  checked={source === "online"}
                  onChange={() => {
                    setSource("online");
                    setSelectedConsultant("");
                    setOtherConsultantName("");
                  }}
                  className="mt-1 w-5 h-5 text-[#1F3E8E] border-gray-300 focus:ring-[#1F3E8E] cursor-pointer"
                />
                <span className="text-gray-800 text-[16px] group-hover:text-[#1F3E8E] transition-colors">
                  I found you online / have not worked with a consultant yet
                </span>
              </label>

              {/* Continue Button */}
              <button
                onClick={handleContinue}
                disabled={!canContinue}
                className={`w-full py-4 rounded-lg text-[16px] font-semibold transition-all duration-200 ${
                  canContinue
                    ? "bg-cta-red text-white hover:bg-red-700 cursor-pointer"
                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                }`}
              >
                Continue
              </button>

              {/* Helper text */}
              <p className="text-gray-500 text-[13px] text-center mt-4">
                This helps us make sure the right consultant is credited and prepared to assist you.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

