import CheckIcon from "./CheckIcon";

interface WinItemProps {
  title: string;
  description: string;
}

export default function WinItem({ title, description }: WinItemProps) {
  return (
    <div className="flex gap-3 sm:gap-4">
      <CheckIcon className="mt-0.5" />
      <div>
        <p className="text-gold font-semibold text-[15px] sm:text-[16px] lg:text-[17px] mb-1 leading-snug">
          {title}
        </p>
        <p className="text-white/90 text-[14px] sm:text-[15px] lg:text-[16px] leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
