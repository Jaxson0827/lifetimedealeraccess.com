interface InvestorFeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  highlights?: string[];
}

export default function InvestorFeatureCard({
  icon,
  title,
  description,
  highlights = [],
}: InvestorFeatureCardProps) {
  return (
    <div className="group relative bg-white border border-gray-200 rounded-2xl p-8 hover:border-[#C9A227]/40 hover:shadow-lg transition-all duration-500">
      {/* Top accent line */}
      <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#C9A227]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Icon container */}
      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#C9A227]/20 to-[#C9A227]/5 border border-[#C9A227]/20 flex items-center justify-center mb-6 text-[#C9A227] group-hover:scale-105 transition-transform duration-300">
        {icon}
      </div>
      
      {/* Title */}
      <h3 className="text-[#0a1a40] text-[22px] lg:text-[26px] font-bold mb-3">
        {title}
      </h3>
      
      {/* Description */}
      <p className="text-gray-700 text-[15px] lg:text-[16px] leading-relaxed mb-5">
        {description}
      </p>
      
      {/* Highlights list */}
      {highlights.length > 0 && (
        <ul className="space-y-2.5">
          {highlights.map((highlight, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#C9A227]/20 flex items-center justify-center mt-0.5">
                <svg className="w-3 h-3 text-[#C9A227]" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="text-gray-700 text-[14px] lg:text-[15px]">{highlight}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

