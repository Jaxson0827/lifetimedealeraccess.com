interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/[0.07] transition-colors duration-300">
      <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center mb-4 text-gold">
        {icon}
      </div>
      <h3 className="text-white text-[18px] lg:text-[20px] font-semibold mb-2">
        {title}
      </h3>
      <p className="text-white/70 text-[14px] lg:text-[15px] leading-relaxed">
        {description}
      </p>
    </div>
  );
}




