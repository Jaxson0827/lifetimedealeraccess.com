"use client";

import * as React from "react";

type FaqCategory = "ALL" | "GENERAL" | "TECHNICAL" | "ELIGIBILITY";

type FaqItem = {
  id: string;
  category: Exclude<FaqCategory, "ALL">;
  question: string;
  answer: string;
};

const CATEGORIES: Array<{ key: FaqCategory; label: string }> = [
  { key: "ALL", label: "ALL" },
  { key: "GENERAL", label: "GENERAL" },
  { key: "TECHNICAL", label: "TECHNICAL" },
  { key: "ELIGIBILITY", label: "ELIGIBILITY & PROCESS" },
];

const FAQ_ITEMS: FaqItem[] = [
  // A. General/Consumer
  {
    id: "included",
    category: "GENERAL",
    question: "Is the warranty included?",
    answer:
      "Yes. Warranty protection is included on all qualifying vehicles as part of your out-the-door price.",
  },
  {
    id: "qualify",
    category: "GENERAL",
    question: "Do all vehicles qualify?",
    answer:
      "No. Vehicles must meet specific eligibility standards. Your consultant will review qualification during the sourcing process.",
  },
  {
    id: "lifetime",
    category: "GENERAL",
    question: "Is the warranty really lifetime?",
    answer:
      "Lifetime means for as long as you own the vehicle, subject to contract terms and eligibility requirements.",
  },
  {
    id: "choose",
    category: "GENERAL",
    question: "Can I choose my coverage level?",
    answer:
      "Yes. Your consultant will help you compare coverage tiers and select the level that best fits your driving needs.",
  },
  {
    id: "ev-included",
    category: "GENERAL",
    question: "Are electric or hybrid vehicles included?",
    answer:
      "Yes. EV and Hybrid vehicles receive specialized coverage for battery, motor, electronics, and drivetrain components.",
  },
  {
    id: "repairs-where",
    category: "GENERAL",
    question: "Where can I take my vehicle for repairs?",
    answer:
      "Covered repairs may be performed at ASE-certified repair shops, dealership service centers, or qualified EV/Hybrid repair facilities.",
  },
  {
    id: "roadside",
    category: "GENERAL",
    question: "Does this include roadside assistance?",
    answer: "Yes, 24/7 roadside assistance is included.",
  },
  {
    id: "maintenance",
    category: "GENERAL",
    question: "Is maintenance included?",
    answer:
      "Yes. Maintenance benefits are included to help reduce ongoing ownership costs.",
  },

  // B. Technical Coverage
  {
    id: "powertrain",
    category: "TECHNICAL",
    question: "What does Powertrain Coverage include?",
    answer:
      "Engine, transmission, drive axle, turbo/supercharger, fuel system, and cooling system components.",
  },
  {
    id: "essentials",
    category: "TECHNICAL",
    question: "What does Essentials Coverage add?",
    answer:
      "Air conditioning, suspension, steering, brake, and electrical systems plus rental car reimbursement.",
  },
  {
    id: "plus",
    category: "TECHNICAL",
    question: "What does Plus Coverage add?",
    answer:
      "Additional cooling, suspension, fuel, and cruise control system components.",
  },
  {
    id: "ev-covered",
    category: "TECHNICAL",
    question: "What EV components are covered?",
    answer:
      "Drive battery, electric motor, control modules, wiring harnesses, sensors, gearbox, and hybrid drivetrain components.",
  },

  // C. Eligibility & Process
  {
    id: "eligible-how",
    category: "ELIGIBILITY",
    question: "How do I know if a vehicle is eligible?",
    answer:
      "Eligibility is determined during the sourcing process based on year, mileage, condition, history, and use case.",
  },
  {
    id: "claims",
    category: "ELIGIBILITY",
    question: "How do claims work?",
    answer:
      "Claims are submitted through licensed repair facilities and processed according to contract terms.",
  },
  {
    id: "records",
    category: "ELIGIBILITY",
    question: "Do I need maintenance records?",
    answer:
      "Maintenance documentation may be required to maintain eligibility for certain lifetime or long-term coverage components.",
  },
  {
    id: "transferable",
    category: "ELIGIBILITY",
    question: "Is the warranty transferable?",
    answer:
      "Transferability varies by contract. Your consultant can review this if important to your ownership plan.",
  },
  {
    id: "commercial",
    category: "ELIGIBILITY",
    question: "Can commercial or rideshare vehicles qualify?",
    answer:
      "Some commercial uses may qualify depending on eligibility rules.",
  },
];

function normalize(s: string) {
  return s.trim().toLowerCase();
}

function SearchIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5 text-white/60"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-3.2-3.2" />
    </svg>
  );
}

function ChevronDown({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={[
        "h-5 w-5 transition-transform duration-200",
        open ? "rotate-180 text-cta-red" : "text-cta-red",
      ].join(" ")}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export default function WarrantyFaq() {
  const [category, setCategory] = React.useState<FaqCategory>("ALL");
  const [query, setQuery] = React.useState("");
  const [openId, setOpenId] = React.useState<string | null>(FAQ_ITEMS[0]?.id ?? null);

  const filtered = React.useMemo(() => {
    const q = normalize(query);
    return FAQ_ITEMS.filter((item) => {
      const categoryOk = category === "ALL" ? true : item.category === category;
      if (!categoryOk) return false;
      if (!q) return true;
      return (
        normalize(item.question).includes(q) || normalize(item.answer).includes(q)
      );
    });
  }, [category, query]);

  React.useEffect(() => {
    // Keep an item open if current openId disappears after filtering.
    if (openId && filtered.some((i) => i.id === openId)) return;
    setOpenId(filtered[0]?.id ?? null);
  }, [filtered, openId]);

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="relative z-10 max-w-[1100px] mx-auto px-6 sm:px-8 lg:px-16">
        <div className="text-center mb-10 lg:mb-12">
          <h2 className="text-white text-[34px] sm:text-[40px] lg:text-[56px] font-serif font-black tracking-[-0.02em] leading-tight">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="text-white/70 text-[14px] sm:text-[15px] lg:text-[16px] mt-2">
            Find answers to common questions about our warranty coverage,
            eligibility, and process.
          </p>
        </div>

        {/* Search */}
        <div className="max-w-[720px] mx-auto mb-8">
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2">
              <SearchIcon />
            </div>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search FAQs..."
              className="w-full bg-black/30 border border-white/10 text-white placeholder:text-white/40 rounded-xl px-12 py-4 focus:outline-none focus:ring-2 focus:ring-cta-red/60"
            />
          </div>
        </div>

        {/* Category pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {CATEGORIES.map((c) => {
            const active = c.key === category;
            return (
              <button
                key={c.key}
                type="button"
                onClick={() => setCategory(c.key)}
                className={[
                  "px-4 py-2 rounded-full text-[12px] sm:text-[13px] font-semibold tracking-wide border transition-colors duration-150",
                  active
                    ? "bg-cta-red text-white border-cta-red"
                    : "bg-black/20 text-white/75 border-white/10 hover:bg-black/30",
                ].join(" ")}
              >
                {c.label}
              </button>
            );
          })}
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {filtered.length === 0 ? (
            <div className="text-center text-white/70 bg-black/20 border border-white/10 rounded-2xl p-8">
              No FAQs match your search.
            </div>
          ) : (
            filtered.map((item) => {
              const open = openId === item.id;
              const panelId = `faq-panel-${item.id}`;
              const buttonId = `faq-button-${item.id}`;
              return (
                <div
                  key={item.id}
                  className="bg-black/25 border border-white/10 rounded-2xl overflow-hidden"
                >
                  <button
                    id={buttonId}
                    type="button"
                    aria-controls={panelId}
                    aria-expanded={open}
                    onClick={() => setOpenId((prev) => (prev === item.id ? null : item.id))}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="text-white text-[15px] sm:text-[16px] font-semibold">
                      {item.question}
                    </span>
                    <ChevronDown open={open} />
                  </button>

                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={[
                      "px-6 pb-6 text-white/80 text-[14px] sm:text-[15px] leading-relaxed",
                      open ? "block" : "hidden",
                    ].join(" ")}
                  >
                    {item.answer}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}

