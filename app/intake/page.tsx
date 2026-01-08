"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import IntakeProgress from "@/components/IntakeProgress";
import { CONSULTANTS } from "@/lib/consultants";
import { hasAttribution, getAttribution, saveAttribution, getAttributionFormFields, Attribution } from "@/lib/attribution";
import {
  IntakeFormData,
  INITIAL_INTAKE_DATA,
  PRICE_RANGES,
  MONTHLY_PAYMENT_RANGES,
  PRIORITY_OPTIONS,
  FEATURE_OPTIONS,
  saveIntakeData,
  loadIntakeData,
} from "@/lib/intake-types";

const STEP_LABELS = ["Wish List", "Requirements", "Year & Mileage", "Budget", "Timing"];

export default function IntakePage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<IntakeFormData>(INITIAL_INTAKE_DATA);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load saved form data on mount
  useEffect(() => {
    // #region agent log
    fetch('http://127.0.0.1:7246/ingest/00f9ee75-8139-470e-a682-0e05d6173856',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'intake/page.tsx:30',message:'Intake useEffect starting',data:{hasWindow:typeof window!=='undefined',hasLocalStorage:typeof localStorage!=='undefined'},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
    // #endregion
    
    const saved = loadIntakeData();
    // #region agent log
    fetch('http://127.0.0.1:7246/ingest/00f9ee75-8139-470e-a682-0e05d6173856',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'intake/page.tsx:33',message:'loadIntakeData result',data:{hasSaved:!!saved,savedKeys:saved?Object.keys(saved):[]},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
    // #endregion
    
    if (saved) {
      setFormData(saved);
    }
    
    // Pre-fill attribution if already captured
    const attribution = getAttribution();
    // #region agent log
    fetch('http://127.0.0.1:7246/ingest/00f9ee75-8139-470e-a682-0e05d6173856',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'intake/page.tsx:38',message:'getAttribution result',data:{hasAttribution:!!attribution,attributionSource:attribution?.source},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B'})}).catch(()=>{});
    // #endregion
    
    if (attribution) {
      setFormData(prev => ({
        ...prev,
        attributionSource: attribution.source as "consultant" | "online",
        consultantName: attribution.consultantName || "",
        otherConsultantName: attribution.otherConsultantName || "",
      }));
    }
    
    setIsLoaded(true);
    // #region agent log
    fetch('http://127.0.0.1:7246/ingest/00f9ee75-8139-470e-a682-0e05d6173856',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'intake/page.tsx:47',message:'Intake useEffect complete',data:{isLoaded:true},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
    // #endregion
  }, []);

  // Save form data on changes
  useEffect(() => {
    if (isLoaded) {
      saveIntakeData(formData);
    }
  }, [formData, isLoaded]);

  const updateField = <K extends keyof IntakeFormData>(field: K, value: IntakeFormData[K]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const toggleArrayField = (field: "priorities" | "features", value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter(v => v !== value)
        : [...prev[field], value],
    }));
  };

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleSubmit = async () => {
    // Save attribution if captured in form (backup)
    if (!hasAttribution() && formData.attributionSource) {
      const attribution: Attribution = {
        source: formData.attributionSource,
        consultantName: formData.consultantName !== "other" ? formData.consultantName : undefined,
        otherConsultantName: formData.consultantName === "other" ? formData.otherConsultantName : undefined,
        capturedAt: new Date().toISOString(),
      };
      saveAttribution(attribution);
    }
    
    // Save final form data
    saveIntakeData(formData);
    
    // Submit to GoHighLevel (non-blocking, don't wait for response)
    try {
      const attributionFields = getAttributionFormFields();
      fetch("/api/gohighlevel/intake", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          intakeData: formData,
          attributionFields,
        }),
      }).catch((error) => {
        console.error("Error submitting intake to GoHighLevel:", error);
        // Don't block user flow if submission fails
      });
    } catch (error) {
      console.error("Error preparing intake submission:", error);
    }
    
    // Navigate to results page
    router.push("/results");
  };

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

  return (
    <main className="min-h-screen bg-[#f8fafc]">
      <Header />

      <div className="pt-[65px] min-h-screen">
        <div className="max-w-[800px] mx-auto px-4 py-8 lg:py-12">
          {/* Progress */}
          <IntakeProgress 
            currentStep={currentStep} 
            totalSteps={5} 
            stepLabels={STEP_LABELS} 
          />

          {/* Form Card */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Step 1: Vehicle Wish List */}
            {currentStep === 1 && (
              <div className="px-6 lg:px-10 py-8">
                <h2 className="text-[#1F3E8E] text-[24px] lg:text-[28px] font-bold mb-2">
                  Vehicle Wish List
                </h2>
                <p className="text-gray-500 text-[15px] mb-8">
                  Tell us about your dream vehicle
                </p>

                {/* Q1: Dream vehicle */}
                <div className="mb-8">
                  <label className="block text-gray-800 text-[16px] font-medium mb-3">
                    1. If everything lined up perfectly, what vehicle would you love to be driving next?
                  </label>
                  <textarea
                    value={formData.dreamVehicle}
                    onChange={(e) => updateField("dreamVehicle", e.target.value)}
                    placeholder="e.g., 2022 Toyota 4Runner TRD Pro in Army Green"
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-[15px] focus:ring-2 focus:ring-[#1F3E8E] focus:border-[#1F3E8E] outline-none resize-none"
                  />
                </div>

                {/* Q2: How specific */}
                <div className="mb-8">
                  <label className="block text-gray-800 text-[16px] font-medium mb-3">
                    2. How specific are you about the vehicle?
                  </label>
                  <div className="space-y-3">
                    {[
                      { value: "very_specific", label: "Very specific" },
                      { value: "somewhat_flexible", label: "Somewhat flexible" },
                      { value: "very_open", label: "Very open if the value is right" },
                    ].map(option => (
                      <label key={option.value} className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="radio"
                          name="specificity"
                          value={option.value}
                          checked={formData.vehicleSpecificity === option.value}
                          onChange={(e) => updateField("vehicleSpecificity", e.target.value as IntakeFormData["vehicleSpecificity"])}
                          className="w-5 h-5 text-[#1F3E8E] border-gray-300 focus:ring-[#1F3E8E]"
                        />
                        <span className="text-gray-700 text-[15px] group-hover:text-[#1F3E8E] transition-colors">
                          {option.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Q3: What matters most */}
                <div className="mb-8">
                  <label className="block text-gray-800 text-[16px] font-medium mb-3">
                    3. What matters most to you in this next vehicle? (Select all that apply)
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {PRIORITY_OPTIONS.map(option => (
                      <label key={option.value} className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          checked={formData.priorities.includes(option.value)}
                          onChange={() => toggleArrayField("priorities", option.value)}
                          className="w-5 h-5 text-[#1F3E8E] border-gray-300 rounded focus:ring-[#1F3E8E]"
                        />
                        <span className="text-gray-700 text-[15px] group-hover:text-[#1F3E8E] transition-colors">
                          {option.label}
                        </span>
                      </label>
                    ))}
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={formData.priorities.includes("other")}
                        onChange={() => toggleArrayField("priorities", "other")}
                        className="w-5 h-5 text-[#1F3E8E] border-gray-300 rounded focus:ring-[#1F3E8E]"
                      />
                      <span className="text-gray-700 text-[15px] group-hover:text-[#1F3E8E] transition-colors">
                        Other
                      </span>
                    </label>
                  </div>
                  {formData.priorities.includes("other") && (
                    <input
                      type="text"
                      value={formData.prioritiesOther}
                      onChange={(e) => updateField("prioritiesOther", e.target.value)}
                      placeholder="Please specify"
                      className="mt-3 w-full px-4 py-2.5 border border-gray-300 rounded-lg text-[15px] focus:ring-2 focus:ring-[#1F3E8E] focus:border-[#1F3E8E] outline-none"
                    />
                  )}
                </div>

                {/* Q4: Alternative vehicles */}
                <div className="mb-8">
                  <label className="block text-gray-800 text-[16px] font-medium mb-3">
                    4. Are there other vehicles or general categories you&apos;d be happy with if condition and pricing made sense?
                  </label>
                  <div className="space-y-3">
                    <input
                      type="text"
                      value={formData.alternativeVehicles.option1}
                      onChange={(e) => updateField("alternativeVehicles", { ...formData.alternativeVehicles, option1: e.target.value })}
                      placeholder="Option 1"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-[15px] focus:ring-2 focus:ring-[#1F3E8E] focus:border-[#1F3E8E] outline-none"
                    />
                    <input
                      type="text"
                      value={formData.alternativeVehicles.option2}
                      onChange={(e) => updateField("alternativeVehicles", { ...formData.alternativeVehicles, option2: e.target.value })}
                      placeholder="Option 2"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-[15px] focus:ring-2 focus:ring-[#1F3E8E] focus:border-[#1F3E8E] outline-none"
                    />
                    <input
                      type="text"
                      value={formData.alternativeVehicles.option3}
                      onChange={(e) => updateField("alternativeVehicles", { ...formData.alternativeVehicles, option3: e.target.value })}
                      placeholder="Option 3"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-[15px] focus:ring-2 focus:ring-[#1F3E8E] focus:border-[#1F3E8E] outline-none"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Core Requirements */}
            {currentStep === 2 && (
              <div className="px-6 lg:px-10 py-8">
                <h2 className="text-[#1F3E8E] text-[24px] lg:text-[28px] font-bold mb-2">
                  Core Requirements
                </h2>
                <p className="text-gray-500 text-[15px] mb-8">
                  Help us understand your needs
                </p>

                {/* Q5: Vehicle use */}
                <div className="mb-8">
                  <label className="block text-gray-800 text-[16px] font-medium mb-3">
                    5. How will this vehicle be used most of the time?
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {[
                      { value: "personal", label: "Personal" },
                      { value: "family", label: "Family" },
                      { value: "business", label: "Business" },
                      { value: "mixed", label: "Mixed" },
                    ].map(option => (
                      <label key={option.value} className="flex items-center gap-2 cursor-pointer group">
                        <input
                          type="radio"
                          name="vehicleUse"
                          value={option.value}
                          checked={formData.vehicleUse === option.value}
                          onChange={(e) => updateField("vehicleUse", e.target.value as IntakeFormData["vehicleUse"])}
                          className="w-5 h-5 text-[#1F3E8E] border-gray-300 focus:ring-[#1F3E8E]"
                        />
                        <span className="text-gray-700 text-[15px] group-hover:text-[#1F3E8E] transition-colors">
                          {option.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Q6: Features */}
                <div className="mb-8">
                  <label className="block text-gray-800 text-[16px] font-medium mb-3">
                    6. Which features or characteristics are important to you? (Select all that apply)
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {FEATURE_OPTIONS.map(option => (
                      <label key={option.value} className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          checked={formData.features.includes(option.value)}
                          onChange={() => toggleArrayField("features", option.value)}
                          className="w-5 h-5 text-[#1F3E8E] border-gray-300 rounded focus:ring-[#1F3E8E]"
                        />
                        <span className="text-gray-700 text-[15px] group-hover:text-[#1F3E8E] transition-colors">
                          {option.label}
                        </span>
                      </label>
                    ))}
                  </div>
                  <input
                    type="text"
                    value={formData.featuresOther}
                    onChange={(e) => updateField("featuresOther", e.target.value)}
                    placeholder="Other features (optional)"
                    className="mt-3 w-full px-4 py-2.5 border border-gray-300 rounded-lg text-[15px] focus:ring-2 focus:ring-[#1F3E8E] focus:border-[#1F3E8E] outline-none"
                  />
                </div>

                {/* Q7: Color preferences */}
                <div className="mb-8">
                  <label className="block text-gray-800 text-[16px] font-medium mb-3">
                    7. Color preferences
                  </label>
                  <div className="space-y-3">
                    <input
                      type="text"
                      value={formData.colorPreferences.favorites}
                      onChange={(e) => updateField("colorPreferences", { ...formData.colorPreferences, favorites: e.target.value })}
                      placeholder="Favorite colors"
                      disabled={formData.colorPreferences.doesntMatter}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-[15px] focus:ring-2 focus:ring-[#1F3E8E] focus:border-[#1F3E8E] outline-none disabled:bg-gray-100 disabled:cursor-not-allowed"
                    />
                    <input
                      type="text"
                      value={formData.colorPreferences.avoid}
                      onChange={(e) => updateField("colorPreferences", { ...formData.colorPreferences, avoid: e.target.value })}
                      placeholder="Colors to avoid"
                      disabled={formData.colorPreferences.doesntMatter}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-[15px] focus:ring-2 focus:ring-[#1F3E8E] focus:border-[#1F3E8E] outline-none disabled:bg-gray-100 disabled:cursor-not-allowed"
                    />
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={formData.colorPreferences.doesntMatter}
                        onChange={(e) => updateField("colorPreferences", { 
                          ...formData.colorPreferences, 
                          doesntMatter: e.target.checked,
                          favorites: e.target.checked ? "" : formData.colorPreferences.favorites,
                          avoid: e.target.checked ? "" : formData.colorPreferences.avoid,
                        })}
                        className="w-5 h-5 text-[#1F3E8E] border-gray-300 rounded focus:ring-[#1F3E8E]"
                      />
                      <span className="text-gray-700 text-[15px] group-hover:text-[#1F3E8E] transition-colors">
                        Color doesn&apos;t matter
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Year & Mileage */}
            {currentStep === 3 && (
              <div className="px-6 lg:px-10 py-8">
                <h2 className="text-[#1F3E8E] text-[24px] lg:text-[28px] font-bold mb-2">
                  Year & Mileage
                </h2>
                <p className="text-gray-500 text-[15px] mb-8">
                  Set your year and mileage preferences
                </p>

                {/* Q8: Year range */}
                <div className="mb-8">
                  <label className="block text-gray-800 text-[16px] font-medium mb-3">
                    8. Ideal year range
                  </label>
                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <label className="block text-gray-500 text-[13px] mb-1">From</label>
                      <select
                        value={formData.yearRange.from}
                        onChange={(e) => updateField("yearRange", { ...formData.yearRange, from: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg text-[15px] focus:ring-2 focus:ring-[#1F3E8E] focus:border-[#1F3E8E] outline-none"
                      >
                        <option value="">Select year</option>
                        {Array.from({ length: 25 }, (_, i) => 2025 - i).map(year => (
                          <option key={year} value={year}>{year}</option>
                        ))}
                      </select>
                    </div>
                    <span className="text-gray-400 pt-5">to</span>
                    <div className="flex-1">
                      <label className="block text-gray-500 text-[13px] mb-1">To</label>
                      <select
                        value={formData.yearRange.to}
                        onChange={(e) => updateField("yearRange", { ...formData.yearRange, to: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg text-[15px] focus:ring-2 focus:ring-[#1F3E8E] focus:border-[#1F3E8E] outline-none"
                      >
                        <option value="">Select year</option>
                        {Array.from({ length: 25 }, (_, i) => 2025 - i).map(year => (
                          <option key={year} value={year}>{year}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Q9: Mileage preference */}
                <div className="mb-8">
                  <label className="block text-gray-800 text-[16px] font-medium mb-3">
                    9. Mileage preference
                  </label>
                  <div className="space-y-3">
                    {[
                      { value: "under_30k", label: "Under 30k" },
                      { value: "under_60k", label: "Under 60k" },
                      { value: "under_90k", label: "Under 90k" },
                      { value: "under_120k", label: "Under 120k" },
                      { value: "case_by_case", label: "Case-by-case" },
                    ].map(option => (
                      <label key={option.value} className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="radio"
                          name="mileage"
                          value={option.value}
                          checked={formData.mileagePreference === option.value}
                          onChange={(e) => updateField("mileagePreference", e.target.value as IntakeFormData["mileagePreference"])}
                          className="w-5 h-5 text-[#1F3E8E] border-gray-300 focus:ring-[#1F3E8E]"
                        />
                        <span className="text-gray-700 text-[15px] group-hover:text-[#1F3E8E] transition-colors">
                          {option.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Budget & Payment */}
            {currentStep === 4 && (
              <div className="px-6 lg:px-10 py-8">
                <h2 className="text-[#1F3E8E] text-[24px] lg:text-[28px] font-bold mb-2">
                  Budget & Payment
                </h2>
                <p className="text-gray-500 text-[15px] mb-8">
                  Help us understand your budget
                </p>

                {/* Q10: Price range */}
                <div className="mb-8">
                  <label className="block text-gray-800 text-[16px] font-medium mb-3">
                    10. Target out-the-door vehicle price range (before tax & registration)
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {PRICE_RANGES.map(option => (
                      <label key={option.value} className="flex items-center gap-2 cursor-pointer group">
                        <input
                          type="radio"
                          name="priceRange"
                          value={option.value}
                          checked={formData.priceRange === option.value}
                          onChange={(e) => updateField("priceRange", e.target.value)}
                          className="w-5 h-5 text-[#1F3E8E] border-gray-300 focus:ring-[#1F3E8E]"
                        />
                        <span className="text-gray-700 text-[14px] group-hover:text-[#1F3E8E] transition-colors">
                          {option.label}
                        </span>
                      </label>
                    ))}
                  </div>
                  <input
                    type="text"
                    value={formData.priceRangeOther}
                    onChange={(e) => updateField("priceRangeOther", e.target.value)}
                    placeholder="Additional notes (optional)"
                    className="mt-3 w-full px-4 py-2.5 border border-gray-300 rounded-lg text-[15px] focus:ring-2 focus:ring-[#1F3E8E] focus:border-[#1F3E8E] outline-none"
                  />
                </div>

                {/* Q11: Payment method */}
                <div className="mb-8">
                  <label className="block text-gray-800 text-[16px] font-medium mb-3">
                    11. How do you expect to pay for the vehicle?
                  </label>
                  <div className="space-y-3">
                    {[
                      { value: "cash", label: "Cash" },
                      { value: "own_financing", label: "Financing through my own bank/credit union" },
                      { value: "financing_help", label: "Financing help needed" },
                      { value: "not_sure", label: "Not sure yet" },
                    ].map(option => (
                      <label key={option.value} className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value={option.value}
                          checked={formData.paymentMethod === option.value}
                          onChange={(e) => updateField("paymentMethod", e.target.value as IntakeFormData["paymentMethod"])}
                          className="w-5 h-5 text-[#1F3E8E] border-gray-300 focus:ring-[#1F3E8E]"
                        />
                        <span className="text-gray-700 text-[15px] group-hover:text-[#1F3E8E] transition-colors">
                          {option.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Financing fields - VISUALLY INDENTED (not hidden per client instructions) */}
                <div className="ml-6 pl-6 border-l-2 border-gray-200 space-y-6">
                  {/* Bank name (for own financing) */}
                  <div>
                    <label className="block text-gray-600 text-[14px] font-medium mb-2">
                      If using your own bank/credit union (optional)
                    </label>
                    <input
                      type="text"
                      value={formData.bankName}
                      onChange={(e) => updateField("bankName", e.target.value)}
                      placeholder="Bank or credit union name"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-[15px] focus:ring-2 focus:ring-[#1F3E8E] focus:border-[#1F3E8E] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-600 text-[14px] font-medium mb-3">
                      If you would like help exploring financing (optional)
                    </label>

                    {/* Q12: Credit score */}
                    <div className="mb-4">
                      <label className="block text-gray-800 text-[15px] font-medium mb-2">
                        12. Estimated credit score range
                      </label>
                      <p className="text-gray-400 text-[12px] mb-3">(No credit pulled)</p>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {[
                          { value: "750_plus", label: "750+" },
                          { value: "700_749", label: "700–749" },
                          { value: "650_699", label: "650–699" },
                          { value: "600_649", label: "600–649" },
                          { value: "below_600", label: "Below 600" },
                          { value: "not_sure", label: "Not sure" },
                        ].map(option => (
                          <label key={option.value} className="flex items-center gap-2 cursor-pointer group">
                            <input
                              type="radio"
                              name="creditScore"
                              value={option.value}
                              checked={formData.creditScore === option.value}
                              onChange={(e) => updateField("creditScore", e.target.value as IntakeFormData["creditScore"])}
                              className="w-4 h-4 text-[#1F3E8E] border-gray-300 focus:ring-[#1F3E8E]"
                            />
                            <span className="text-gray-700 text-[14px] group-hover:text-[#1F3E8E] transition-colors">
                              {option.label}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Q13: Monthly payment */}
                    <div>
                      <label className="block text-gray-800 text-[15px] font-medium mb-2">
                        13. Comfortable monthly payment range
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {MONTHLY_PAYMENT_RANGES.map(option => (
                          <label key={option.value} className="flex items-center gap-2 cursor-pointer group">
                            <input
                              type="radio"
                              name="monthlyPayment"
                              value={option.value}
                              checked={formData.monthlyPaymentRange === option.value}
                              onChange={(e) => updateField("monthlyPaymentRange", e.target.value)}
                              className="w-4 h-4 text-[#1F3E8E] border-gray-300 focus:ring-[#1F3E8E]"
                            />
                            <span className="text-gray-700 text-[14px] group-hover:text-[#1F3E8E] transition-colors">
                              {option.label}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 5: Timing & Flexibility */}
            {currentStep === 5 && (
              <div className="px-6 lg:px-10 py-8">
                <h2 className="text-[#1F3E8E] text-[24px] lg:text-[28px] font-bold mb-2">
                  Timing & Flexibility
                </h2>
                <p className="text-gray-500 text-[15px] mb-8">
                  When do you need your vehicle?
                </p>

                {/* Q14: Timeline */}
                <div className="mb-8">
                  <label className="block text-gray-800 text-[16px] font-medium mb-3">
                    14. Ideal timeline
                  </label>
                  <div className="space-y-3">
                    {[
                      { value: "asap", label: "ASAP" },
                      { value: "2_4_weeks", label: "2–4 weeks" },
                      { value: "flexible", label: "Flexible" },
                    ].map(option => (
                      <label key={option.value} className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="radio"
                          name="timeline"
                          value={option.value}
                          checked={formData.timeline === option.value}
                          onChange={(e) => updateField("timeline", e.target.value as IntakeFormData["timeline"])}
                          className="w-5 h-5 text-[#1F3E8E] border-gray-300 focus:ring-[#1F3E8E]"
                        />
                        <span className="text-gray-700 text-[15px] group-hover:text-[#1F3E8E] transition-colors">
                          {option.label}
                        </span>
                      </label>
                    ))}
                  </div>
                  <input
                    type="text"
                    value={formData.timelineOther}
                    onChange={(e) => updateField("timelineOther", e.target.value)}
                    placeholder="Additional timing notes (optional)"
                    className="mt-3 w-full px-4 py-2.5 border border-gray-300 rounded-lg text-[15px] focus:ring-2 focus:ring-[#1F3E8E] focus:border-[#1F3E8E] outline-none"
                  />
                </div>

                {/* Q15: Open to adjustments */}
                <div className="mb-8">
                  <label className="block text-gray-800 text-[16px] font-medium mb-3">
                    15. Open to adjusting year/mileage/trim if it improves value or warranty coverage?
                  </label>
                  <div className="space-y-3">
                    {[
                      { value: "yes", label: "Yes" },
                      { value: "maybe", label: "Maybe" },
                      { value: "no", label: "No" },
                    ].map(option => (
                      <label key={option.value} className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="radio"
                          name="adjustments"
                          value={option.value}
                          checked={formData.openToAdjustments === option.value}
                          onChange={(e) => updateField("openToAdjustments", e.target.value as IntakeFormData["openToAdjustments"])}
                          className="w-5 h-5 text-[#1F3E8E] border-gray-300 focus:ring-[#1F3E8E]"
                        />
                        <span className="text-gray-700 text-[15px] group-hover:text-[#1F3E8E] transition-colors">
                          {option.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Attribution backup (if not already captured) */}
                {!hasAttribution() && (
                  <div className="mt-10 pt-8 border-t border-gray-200">
                    <h3 className="text-gray-800 text-[18px] font-semibold mb-4">
                      One more question
                    </h3>
                    
                    <div className="mb-6">
                      <label className="block text-gray-800 text-[16px] font-medium mb-3">
                        Who referred you to us or have you been working with so far?
                      </label>
                      <div className="space-y-3">
                        <label className="flex items-center gap-3 cursor-pointer group">
                          <input
                            type="radio"
                            name="attribution"
                            value="consultant"
                            checked={formData.attributionSource === "consultant"}
                            onChange={() => updateField("attributionSource", "consultant")}
                            className="w-5 h-5 text-[#1F3E8E] border-gray-300 focus:ring-[#1F3E8E]"
                          />
                          <span className="text-gray-700 text-[15px] group-hover:text-[#1F3E8E] transition-colors">
                            I was referred by or have been working with a consultant
                          </span>
                        </label>
                        
                        {formData.attributionSource === "consultant" && (
                          <div className="ml-8 space-y-2">
                            <select
                              value={formData.consultantName}
                              onChange={(e) => updateField("consultantName", e.target.value)}
                              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-[15px] focus:ring-2 focus:ring-[#1F3E8E] focus:border-[#1F3E8E] outline-none"
                            >
                              <option value="">Select consultant</option>
                              {CONSULTANTS.map(name => (
                                <option key={name} value={name}>{name}</option>
                              ))}
                              <option value="other">Other / Not listed</option>
                            </select>
                            {formData.consultantName === "other" && (
                              <input
                                type="text"
                                value={formData.otherConsultantName}
                                onChange={(e) => updateField("otherConsultantName", e.target.value)}
                                placeholder="Enter consultant name"
                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-[15px] focus:ring-2 focus:ring-[#1F3E8E] focus:border-[#1F3E8E] outline-none"
                              />
                            )}
                          </div>
                        )}
                        
                        <label className="flex items-center gap-3 cursor-pointer group">
                          <input
                            type="radio"
                            name="attribution"
                            value="online"
                            checked={formData.attributionSource === "online"}
                            onChange={() => {
                              updateField("attributionSource", "online");
                              updateField("consultantName", "");
                              updateField("otherConsultantName", "");
                            }}
                            className="w-5 h-5 text-[#1F3E8E] border-gray-300 focus:ring-[#1F3E8E]"
                          />
                          <span className="text-gray-700 text-[15px] group-hover:text-[#1F3E8E] transition-colors">
                            I found you online / have not worked with a consultant yet
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="px-6 lg:px-10 py-6 bg-gray-50 border-t border-gray-200 flex justify-between">
              <button
                onClick={handleBack}
                disabled={currentStep === 1}
                className={`px-6 py-3 rounded-lg text-[15px] font-medium transition-all duration-200 ${
                  currentStep === 1
                    ? "text-gray-300 cursor-not-allowed"
                    : "text-gray-600 hover:text-[#1F3E8E] hover:bg-gray-100"
                }`}
              >
                ← Back
              </button>

              {currentStep < 5 ? (
                <button
                  onClick={handleNext}
                  className="px-8 py-3 bg-[#1F3E8E] text-white rounded-lg text-[15px] font-semibold hover:bg-[#152d68] transition-colors duration-200"
                >
                  Continue →
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  className="px-8 py-3 bg-cta-red text-white rounded-lg text-[15px] font-semibold hover:bg-red-700 transition-colors duration-200"
                >
                  Submit & View Results
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

