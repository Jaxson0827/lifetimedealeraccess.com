interface ExitPathCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function ExitPathCard({ icon, title, description }: ExitPathCardProps) {
  return (
    <div className="group relative bg-white border border-gray-200 rounded-2xl p-6 hover:border-[#C9A227]/40 hover:shadow-lg transition-all duration-500 cursor-default">
      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-2xl bg-[#C9A227]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        {/* Icon */}
        <div className="w-12 h-12 rounded-xl bg-[#C9A227]/15 border border-[#C9A227]/20 flex items-center justify-center mb-4 text-[#C9A227] group-hover:scale-110 group-hover:bg-[#C9A227]/25 transition-all duration-300">
          {icon}
        </div>
        
        {/* Title */}
        <h4 className="text-[#0a1a40] text-[17px] lg:text-[19px] font-semibold mb-2 group-hover:text-[#C9A227] transition-colors duration-300">
          {title}
        </h4>
        
        {/* Description */}
        <p className="text-gray-600 text-[13px] lg:text-[14px] leading-relaxed">
          {description}
        </p>
      </div>
      
      {/* Arrow indicator */}
      <div className="absolute top-6 right-6 text-gray-300 group-hover:text-[#C9A227]/50 transition-colors duration-300">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );
}

