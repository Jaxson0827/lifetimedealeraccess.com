interface CoverageCardProps {
  tier: string;
  tagline: string;
  features: string[];
  isPopular?: boolean;
}

export default function CoverageCard({ tier, tagline, features, isPopular = false }: CoverageCardProps) {
  return (
    <div
      className={`relative rounded-2xl p-6 lg:p-8 transition-all duration-300 ${
        isPopular
          ? 'bg-white/10 border-2 border-gold shadow-[0_0_40px_-10px_rgba(201,162,39,0.3)] scale-[1.02]'
          : 'bg-white/5 border border-white/10'
      }`}
    >
      {isPopular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-navy-dark text-[12px] font-bold px-4 py-1 rounded-full">
          POPULAR
        </div>
      )}
      <h3 className={`text-[24px] lg:text-[28px] font-serif italic mb-2 ${isPopular ? 'text-gold' : 'text-white'}`}>
        {tier}
      </h3>
      <p className="text-white/70 text-[14px] lg:text-[15px] italic mb-6">
        {tagline}
      </p>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <svg
              className={`w-5 h-5 flex-shrink-0 mt-0.5 ${isPopular ? 'text-gold' : 'text-white/60'}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-white/90 text-[14px] lg:text-[15px]">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}




