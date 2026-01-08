interface CheckIconProps {
  size?: "sm" | "md";
  className?: string;
}

export default function CheckIcon({ size = "md", className = "" }: CheckIconProps) {
  const sizeClasses = {
    sm: "w-5 h-5",
    md: "w-6 h-6",
  };

  const iconSizeClasses = {
    sm: "w-3 h-3",
    md: "w-3.5 h-3.5",
  };

  return (
    <div
      className={`flex-shrink-0 ${sizeClasses[size]} rounded-full bg-gold flex items-center justify-center ${className}`}
    >
      <svg
        className={`${iconSizeClasses[size]} text-black`}
        fill="currentColor"
        viewBox="0 0 20 20"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
}




