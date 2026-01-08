interface ValueCalloutProps {
  value: string;
  label: string;
  size?: 'default' | 'large';
}

export default function ValueCallout({ value, label, size = 'default' }: ValueCalloutProps) {
  const valueSize = size === 'large' 
    ? 'text-[48px] lg:text-[64px] xl:text-[72px]' 
    : 'text-[36px] lg:text-[48px]';
  
  const labelSize = size === 'large'
    ? 'text-[18px] lg:text-[20px]'
    : 'text-[14px] lg:text-[16px]';

  return (
    <div className="relative inline-block">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gold/20 blur-3xl rounded-full scale-150" />
      
      {/* Content */}
      <div className="relative bg-white/5 border border-gold/30 rounded-2xl px-8 lg:px-12 py-6 lg:py-8 backdrop-blur-sm">
        <p className={`text-gold font-bold ${valueSize} leading-none mb-1`}>
          {value}
        </p>
        <p className={`text-white/80 ${labelSize}`}>
          {label}
        </p>
      </div>
    </div>
  );
}




