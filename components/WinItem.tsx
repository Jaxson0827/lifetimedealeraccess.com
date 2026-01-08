import CheckIcon from "./CheckIcon";

interface WinItemProps {
  title: string;
  description: string;
}

export default function WinItem({ title, description }: WinItemProps) {
  return (
    <div className="flex gap-4">
      <CheckIcon className="mt-0.5" />
      <div>
        <p className="text-gold font-semibold text-[16px] lg:text-[17px] mb-1">
          {title}
        </p>
        <p className="text-white/90 text-[15px] lg:text-[16px] leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
