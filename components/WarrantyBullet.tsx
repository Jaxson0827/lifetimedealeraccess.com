import CheckIcon from "./CheckIcon";

interface WarrantyBulletProps {
  title: string;
  description: string;
}

export default function WarrantyBullet({ title, description }: WarrantyBulletProps) {
  return (
    <div className="flex gap-3 items-start">
      <CheckIcon size="sm" className="mt-0.5 flex-shrink-0" />
      <div className="flex-1">
        <h4 className="text-white text-[18px] lg:text-[20px] font-semibold mb-1">
          {title}
        </h4>
        <p className="text-white/90 text-[15px] lg:text-[16px] leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

