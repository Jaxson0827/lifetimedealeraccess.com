interface IntakeProgressProps {
  currentStep: number;
  totalSteps: number;
  stepLabels: string[];
}

export default function IntakeProgress({ currentStep, totalSteps, stepLabels }: IntakeProgressProps) {
  return (
    <div className="mb-8">
      {/* Progress bar */}
      <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden mb-4">
        <div 
          className="absolute left-0 top-0 h-full bg-gradient-to-r from-[#1F3E8E] to-gold transition-all duration-500 ease-out"
          style={{ width: `${(currentStep / totalSteps) * 100}%` }}
        />
      </div>
      
      {/* Step indicators */}
      <div className="flex justify-between">
        {stepLabels.map((label, index) => {
          const stepNum = index + 1;
          const isActive = stepNum === currentStep;
          const isCompleted = stepNum < currentStep;
          
          return (
            <div 
              key={label}
              className={`flex flex-col items-center ${
                index === 0 ? 'items-start' : index === stepLabels.length - 1 ? 'items-end' : ''
              }`}
            >
              <div className={`
                w-8 h-8 rounded-full flex items-center justify-center text-[13px] font-semibold transition-all duration-300
                ${isCompleted ? 'bg-gold text-white' : ''}
                ${isActive ? 'bg-[#1F3E8E] text-white ring-4 ring-[#1F3E8E]/20' : ''}
                ${!isActive && !isCompleted ? 'bg-gray-200 text-gray-500' : ''}
              `}>
                {isCompleted ? (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  stepNum
                )}
              </div>
              <span className={`
                hidden sm:block mt-2 text-[12px] font-medium transition-colors duration-300
                ${isActive ? 'text-[#1F3E8E]' : isCompleted ? 'text-gold' : 'text-gray-400'}
              `}>
                {label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

