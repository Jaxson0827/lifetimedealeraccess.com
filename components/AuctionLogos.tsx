export default function AuctionLogos() {
  return (
    <div className="flex items-center justify-center gap-6 sm:gap-8 lg:gap-12 xl:gap-16 flex-wrap">
      {/* Manheim - Gold M in circle with serif text */}
      <div className="flex items-center gap-3">
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          aria-hidden="true"
        >
          {/* Outer circle */}
          <circle
            cx="24"
            cy="24"
            r="22"
            stroke="#C9A227"
            strokeWidth="2"
            fill="none"
          />
          {/* Inner M letter */}
          <text
            x="24"
            y="32"
            textAnchor="middle"
            fill="#C9A227"
            fontSize="26"
            fontWeight="bold"
            fontFamily="Georgia, serif"
          >
            M
          </text>
        </svg>
        <span className="text-white text-[18px] sm:text-[20px] lg:text-[24px] font-serif tracking-wide">
          Manheim
        </span>
      </div>

      {/* ACV AUCTIONS - Red ACV on white rounded rectangle */}
      <div className="flex flex-col items-center">
        <div className="bg-white rounded-md px-4 py-2">
          <svg
            width="70"
            height="28"
            viewBox="0 0 70 28"
            fill="none"
            aria-hidden="true"
          >
            <text
              x="35"
              y="22"
              textAnchor="middle"
              fill="#D81326"
              fontSize="24"
              fontWeight="bold"
              fontFamily="Arial, sans-serif"
            >
              ACV
            </text>
          </svg>
        </div>
        <span className="text-white text-[8px] sm:text-[9px] tracking-[0.25em] mt-1.5 font-semibold">
          AUCTIONS
        </span>
      </div>

      {/* IAA - Horizontal stripes with IAA text */}
      <div className="flex items-center gap-1">
        <svg
          width="100"
          height="40"
          viewBox="0 0 100 40"
          fill="none"
          aria-hidden="true"
        >
          {/* Three horizontal lines on left */}
          <rect x="0" y="12" width="20" height="3" fill="#8B8B8B" rx="1" />
          <rect x="0" y="18" width="20" height="3" fill="#8B8B8B" rx="1" />
          <rect x="0" y="24" width="20" height="3" fill="#8B8B8B" rx="1" />
          {/* IAA text */}
          <text
            x="60"
            y="29"
            textAnchor="middle"
            fill="white"
            fontSize="28"
            fontWeight="bold"
            fontFamily="Arial, sans-serif"
            letterSpacing="-1"
          >
            IAA
          </text>
        </svg>
      </div>

      {/* ADESA - Wing icon with text */}
      <div className="flex items-center gap-2">
        <svg
          width="36"
          height="32"
          viewBox="0 0 36 32"
          fill="none"
          aria-hidden="true"
        >
          {/* Stylized wing/leaf shape */}
          <path
            d="M4 24 C4 24 8 8 18 4 C28 8 32 24 32 24 L28 20 C28 20 24 10 18 8 C12 10 8 20 8 20 L4 24Z"
            fill="#C9A227"
          />
          <path
            d="M8 22 C8 22 12 14 18 12 C24 14 28 22 28 22 L24 19 C24 19 20 13 18 13 C16 13 12 19 12 19 L8 22Z"
            fill="#1F3E8E"
          />
        </svg>
        <span className="text-white text-[22px] sm:text-[24px] lg:text-[28px] font-bold tracking-wider">
          ADESA
        </span>
        <sup className="text-white/80 text-[9px] -ml-1 mt-[-8px]">®</sup>
      </div>
    </div>
  );
}

