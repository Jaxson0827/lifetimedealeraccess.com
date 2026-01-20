import { FEE_SCHEDULE } from "@/lib/fee-schedule";

interface FeeScheduleTableProps {
  highlightPriceRange?: string;
}

export default function FeeScheduleTable({ highlightPriceRange }: FeeScheduleTableProps) {
  // Map price range value to fee schedule row
  const getHighlightIndex = (): number => {
    if (!highlightPriceRange) return -1;
    
    const rangeMap: Record<string, number> = {
      "up_to_8k": 0,
      "8k_12k": 1,
      "12k_16k": 2,
      "16k_20k": 3,
      "20k_25k": 4,
      "25k_30k": 5,
      "30k_40k": 6,
      "40k_50k": 6,
      "50k_60k": 6,
      "60k_70k": 6,
      "70k_80k": 6,
      "80k_plus": 6,
    };
    
    return rangeMap[highlightPriceRange] ?? -1;
  };

  const highlightIndex = getHighlightIndex();

  return (
    <div className="rounded-xl border border-gray-200 overflow-hidden">
      {/* Mobile (stacked) */}
      <div className="sm:hidden">
        <div className="bg-[#1F3E8E] text-white px-4 py-3">
          <p className="text-[14px] font-semibold">Consultant Fee Schedule</p>
          <p className="text-[12px] text-white/80">Final OTD vehicle price → fee</p>
        </div>

        <div className="divide-y divide-gray-200">
          {FEE_SCHEDULE.map((row, index) => {
            const isHighlighted = index === highlightIndex;

            return (
              <div
                key={row.label}
                className={`px-4 py-3 ${
                  isHighlighted ? "bg-gold/10 border-l-4 border-l-gold" : "bg-white"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <p
                      className={`text-[14px] leading-snug whitespace-normal ${
                        isHighlighted ? "font-semibold text-[#1F3E8E]" : "text-gray-700"
                      }`}
                    >
                      {row.label}
                      {isHighlighted && (
                        <span className="ml-2 text-[12px] text-gold font-medium">
                          ← Your range
                        </span>
                      )}
                    </p>
                  </div>
                  <p
                    className={`text-[14px] text-right whitespace-nowrap ${
                      isHighlighted ? "font-bold text-[#1F3E8E]" : "text-gray-900 font-semibold"
                    }`}
                  >
                    ${row.fee.toLocaleString()}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Desktop/tablet */}
      <div className="hidden sm:block">
        <table className="w-full table-fixed">
          <thead>
            <tr className="bg-[#1F3E8E] text-white">
              <th className="w-2/3 px-4 sm:px-6 py-3.5 text-left text-[13px] sm:text-[14px] font-semibold">
                Final OTD Vehicle Price
              </th>
              <th className="w-1/3 px-4 sm:px-6 py-3.5 text-right text-[13px] sm:text-[14px] font-semibold whitespace-nowrap">
                Consultant Fee
              </th>
            </tr>
          </thead>
          <tbody>
            {FEE_SCHEDULE.map((row, index) => {
              const isHighlighted = index === highlightIndex;

              return (
                <tr
                  key={row.label}
                  className={`
                    border-t border-gray-200 transition-colors
                    ${
                      isHighlighted
                        ? "bg-gold/10 border-l-4 border-l-gold"
                        : index % 2 === 0
                          ? "bg-white"
                          : "bg-gray-50"
                    }
                  `}
                >
                  <td
                    className={`px-4 sm:px-6 py-3.5 text-[13px] sm:text-[14px] whitespace-normal break-words ${
                      isHighlighted ? "font-semibold text-[#1F3E8E]" : "text-gray-700"
                    }`}
                  >
                    {row.label}
                    {isHighlighted && (
                      <span className="ml-2 text-[12px] text-gold font-medium">
                        ← Your range
                      </span>
                    )}
                  </td>
                  <td
                    className={`px-4 sm:px-6 py-3.5 text-right text-[13px] sm:text-[14px] whitespace-nowrap ${
                      isHighlighted
                        ? "font-bold text-[#1F3E8E]"
                        : "text-gray-900 font-medium"
                    }`}
                  >
                    ${row.fee.toLocaleString()}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

