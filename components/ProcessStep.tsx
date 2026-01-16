interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  showConnector?: boolean;
}

export default function ProcessStep({
  number,
  title,
  description,
  showConnector = true,
}: ProcessStepProps) {
  return (
    <>
      <div className="flex gap-4 sm:gap-6">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full bg-[#D81326] flex items-center justify-center">
            <span className="text-white text-[16px] sm:text-[18px] lg:text-[20px] font-bold">{number}</span>
          </div>
        </div>
        <div className="flex-1 pt-1">
          <h3 className="text-gold text-[19px] sm:text-[21px] lg:text-[26px] font-bold mb-2 sm:mb-3 leading-snug">
            {number}. {title}
          </h3>
          <p className="text-white text-[14px] sm:text-[15px] lg:text-[17px] leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      {showConnector && (
        <div className="flex gap-4 sm:gap-6">
          <div className="flex-shrink-0 w-12 sm:w-14 lg:w-16 flex items-center justify-center">
            <div className="w-0.5 h-6 sm:h-8 bg-gray-300" />
          </div>
          <div />
        </div>
      )}
    </>
  );
}
