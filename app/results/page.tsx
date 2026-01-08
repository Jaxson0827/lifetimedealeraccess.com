"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FeeScheduleTable from "@/components/FeeScheduleTable";
import {
  IntakeFormData,
  INITIAL_INTAKE_DATA,
  loadIntakeData,
  PRICE_RANGES,
  PRIORITY_OPTIONS,
  FEATURE_OPTIONS,
} from "@/lib/intake-types";

export default function ResultsPage() {
  const router = useRouter();
  const [formData, setFormData] = useState<IntakeFormData>(INITIAL_INTAKE_DATA);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // #region agent log
    fetch('http://127.0.0.1:7246/ingest/00f9ee75-8139-470e-a682-0e05d6173856',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'results/page.tsx:22',message:'Results useEffect starting',data:{hasRouter:!!router,pathname:typeof window!=='undefined'?window.location.pathname:'unknown'},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B'})}).catch(()=>{});
    // #endregion
    
    const data = loadIntakeData();
    // #region agent log
    fetch('http://127.0.0.1:7246/ingest/00f9ee75-8139-470e-a682-0e05d6173856',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'results/page.tsx:24',message:'loadIntakeData in results',data:{hasData:!!data,willRedirect:!data},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B'})}).catch(()=>{});
    // #endregion
    
    if (data) {
      setFormData(data);
      setIsLoaded(true);
      // #region agent log
      fetch('http://127.0.0.1:7246/ingest/00f9ee75-8139-470e-a682-0e05d6173856',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'results/page.tsx:28',message:'Results data loaded successfully',data:{},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B'})}).catch(()=>{});
      // #endregion
    } else {
      // No intake data, redirect to intake
      // #region agent log
      fetch('http://127.0.0.1:7246/ingest/00f9ee75-8139-470e-a682-0e05d6173856',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'results/page.tsx:30',message:'Redirecting to intake - no data',data:{},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B'})}).catch(()=>{});
      // #endregion
      router.replace("/intake");
      return;
    }
  }, [router]);

  if (!isLoaded) {
    return (
      <main className="min-h-screen bg-[#f8fafc]">
        <Header />
        <div className="pt-[65px] min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#1F3E8E]"></div>
        </div>
      </main>
    );
  }

  // Get display values
  const getPriceRangeLabel = (value: string) => {
    const range = PRICE_RANGES.find(r => r.value === value);
    return range?.label || value;
  };

  const getPriorityLabels = (values: string[]) => {
    return values
      .map(v => {
        if (v === "other") return formData.prioritiesOther || "Other";
        const option = PRIORITY_OPTIONS.find(o => o.value === v);
        return option?.label || v;
      })
      .filter(Boolean);
  };

  const getFeatureLabels = (values: string[]) => {
    return values
      .map(v => {
        const option = FEATURE_OPTIONS.find(o => o.value === v);
        return option?.label || v;
      })
      .filter(Boolean);
  };

  const getAlternativeVehicles = () => {
    const vehicles = [
      formData.alternativeVehicles.option1,
      formData.alternativeVehicles.option2,
      formData.alternativeVehicles.option3,
    ].filter(Boolean);
    return vehicles.length > 0 ? vehicles : ["None specified"];
  };

  return (
    <main className="min-h-screen bg-[#f8fafc]">
      <Header />

      <div className="pt-[65px] min-h-screen">
        <div className="max-w-[900px] mx-auto px-4 py-8 lg:py-12">
          {/* Page Header */}
          <div className="text-center mb-10">
            <h1 className="text-[#1F3E8E] text-[32px] lg:text-[40px] font-bold mb-3">
              Your Vehicle Wish List Summary
            </h1>
            <p className="text-gray-600 text-[16px] lg:text-[18px]">
              Based on what you shared, here&apos;s a snapshot of your preferences and how the consultant fee works.
            </p>
          </div>

          {/* Section 1: Reflected Answers */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
            <div className="bg-gradient-to-r from-[#1F3E8E] to-[#152d68] px-6 lg:px-8 py-5">
              <h2 className="text-white text-[20px] lg:text-[22px] font-bold">
                Your Preferences
              </h2>
            </div>
            
            <div className="px-6 lg:px-8 py-6 space-y-6">
              {/* Primary vehicle interest */}
              <div>
                <h3 className="text-gray-500 text-[13px] font-semibold uppercase tracking-wider mb-2">
                  Primary vehicle interest
                </h3>
                <p className="text-gray-900 text-[16px]">
                  {formData.dreamVehicle || "Not specified"}
                </p>
              </div>

              {/* Alternative vehicles */}
              <div>
                <h3 className="text-gray-500 text-[13px] font-semibold uppercase tracking-wider mb-2">
                  Additional vehicles or categories
                </h3>
                <ul className="text-gray-900 text-[16px] list-disc list-inside">
                  {getAlternativeVehicles().map((vehicle, i) => (
                    <li key={i}>{vehicle}</li>
                  ))}
                </ul>
              </div>

              {/* Key priorities & features */}
              <div>
                <h3 className="text-gray-500 text-[13px] font-semibold uppercase tracking-wider mb-2">
                  Key priorities & features
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[...getPriorityLabels(formData.priorities), ...getFeatureLabels(formData.features)].map((item, i) => (
                    <span 
                      key={i}
                      className="bg-[#1F3E8E]/10 text-[#1F3E8E] text-[14px] px-3 py-1 rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                  {formData.featuresOther && (
                    <span className="bg-[#1F3E8E]/10 text-[#1F3E8E] text-[14px] px-3 py-1 rounded-full">
                      {formData.featuresOther}
                    </span>
                  )}
                </div>
              </div>

              {/* Year & mileage */}
              <div>
                <h3 className="text-gray-500 text-[13px] font-semibold uppercase tracking-wider mb-2">
                  Ideal year & mileage
                </h3>
                <p className="text-gray-900 text-[16px]">
                  {formData.yearRange.from && formData.yearRange.to 
                    ? `${formData.yearRange.from} – ${formData.yearRange.to}`
                    : "Not specified"
                  }
                  {formData.mileagePreference && (
                    <span className="text-gray-600">
                      {" "} • {formData.mileagePreference.replace(/_/g, " ").replace("under", "Under ")}
                    </span>
                  )}
                </p>
              </div>

              {/* Target price range - HIGHLIGHTED */}
              <div className="bg-gold/10 border border-gold/30 rounded-xl p-5">
                <h3 className="text-gold text-[13px] font-semibold uppercase tracking-wider mb-2">
                  Target out-the-door price range
                </h3>
                <p className="text-[#1F3E8E] text-[20px] font-bold">
                  {getPriceRangeLabel(formData.priceRange)}
                  <span className="text-gray-500 text-[14px] font-normal ml-2">
                    (before taxes & registration)
                  </span>
                </p>
              </div>

              {/* Helper text */}
              <p className="text-gray-500 text-[14px] italic border-t border-gray-100 pt-4">
                You&apos;ll always approve the exact vehicle and final price before moving forward.
              </p>
            </div>
          </div>

          {/* Section 2: How the Consultant Fee Works */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
            <div className="px-6 lg:px-8 py-6">
              <h2 className="text-[#1F3E8E] text-[22px] lg:text-[24px] font-bold mb-4">
                How the Consultant Fee Works
              </h2>
              
              <div className="space-y-4 text-gray-700 text-[15px] lg:text-[16px] leading-relaxed">
                <p>
                  Our consultant fee is a one-time flat fee based on the final out-the-door vehicle price (before taxes and registration) that you choose.
                </p>
                <p>
                  There are no commissions, dealer incentives, or markups.
                </p>
                <p>
                  You stay in control of the final consultant fee by choosing the vehicle you move forward with and approving the maximum price.
                </p>
              </div>
            </div>
          </div>

          {/* Section 3: Fee Schedule Table */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
            <div className="px-6 lg:px-8 py-6">
              <h2 className="text-[#1F3E8E] text-[22px] lg:text-[24px] font-bold mb-6">
                Consultant Fee Schedule
              </h2>
              
              <FeeScheduleTable highlightPriceRange={formData.priceRange} />
            </div>
          </div>

          {/* Section 4: Based on Your Selected Price Range */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
            <div className="px-6 lg:px-8 py-6">
              <h2 className="text-[#1F3E8E] text-[22px] lg:text-[24px] font-bold mb-4">
                Based on Your Selected Price Range
              </h2>
              
              <div className="space-y-4 text-gray-700 text-[15px] lg:text-[16px] leading-relaxed">
                <p>
                  If you choose a vehicle within <strong>{getPriceRangeLabel(formData.priceRange)}</strong>, your consultant fee will follow the schedule above.
                </p>
                <p>
                  If you choose a vehicle in a higher or lower price band, the consultant fee adjusts accordingly.
                </p>
                <p className="font-semibold text-[#1F3E8E]">
                  You determine the final consultant fee based on the vehicle you choose and the price you authorize.
                </p>
              </div>
            </div>
          </div>

          {/* Transition & CTA */}
          <div className="text-center">
            <p className="text-gray-600 text-[16px] mb-6">
              The next step simply authorizes us to begin sourcing and verifying wholesale options that match your wish list.
            </p>
            
            <a
              href="/payment"
              className="inline-block bg-cta-red text-white text-[17px] font-semibold px-10 py-4 rounded-lg hover:bg-red-700 transition-colors duration-200 shadow-lg"
            >
              Continue to Secure Setup
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

