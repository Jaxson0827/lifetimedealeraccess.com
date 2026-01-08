"use client";

import { useState } from "react";
import Image from "next/image";

interface CarPart {
  id: string;
  name: string;
  cost: string;
  position: {
    top: string;
    left: string;
  };
  // Optional: different positions for different vehicle types
  suvPosition?: { top: string; left: string };
  truckPosition?: { top: string; left: string };
}

interface InteractiveCarProps {
  vehicleType: "car" | "suv" | "truck";
}

export default function InteractiveCar({ vehicleType }: InteractiveCarProps) {
  const [selectedPart, setSelectedPart] = useState<CarPart | null>(null);
  const [hoveredPart, setHoveredPart] = useState<string | null>(null);
  const [imageError, setImageError] = useState(false);

  // Define car parts with their positions and costs - EXACTLY matching Endurance's layout
  // Car is shown from front-left perspective (3D view), not pure side view
  // Positions adjusted based on Endurance's actual hotspot placement
  const carParts: CarPart[] = [
    // Front bumper/grille - 3 hotspots
    {
      id: "front-bumper-lower-left",
      name: "Front Bumper",
      cost: "$800+",
      position: { top: "75%", left: "18%" },
    },
    {
      id: "front-bumper-lower-right",
      name: "Front Bumper",
      cost: "$800+",
      position: { top: "75%", left: "25%" },
    },
    {
      id: "front-grille-upper",
      name: "Grille",
      cost: "$600+",
      position: { top: "55%", left: "20%" },
    },
    // Headlights - 2 hotspots
    {
      id: "headlight-left",
      name: "Headlight",
      cost: "$400+",
      position: { top: "60%", left: "16%" },
    },
    {
      id: "headlight-right",
      name: "Headlight",
      cost: "$400+",
      position: { top: "60%", left: "22%" },
    },
    // Hood - 3 hotspots
    {
      id: "hood-front-left",
      name: "Cooling System",
      cost: "$1,200+",
      position: { top: "45%", left: "28%" },
    },
    {
      id: "hood-front-right",
      name: "Electrical System",
      cost: "$2,000+",
      position: { top: "45%", left: "32%" },
    },
    {
      id: "hood-center",
      name: "Engine",
      cost: "$6,500+",
      position: { top: "50%", left: "30%" },
    },
    // Front fender/wheel - 2 hotspots
    {
      id: "fender-front-above-wheel",
      name: "Front Fender",
      cost: "$600+",
      position: { top: "62%", left: "28%" },
    },
    {
      id: "wheel-front",
      name: "Brake System",
      cost: "$800+",
      position: { top: "82%", left: "26%" },
    },
    // Side mirror
    {
      id: "side-mirror",
      name: "Side Mirror",
      cost: "$300+",
      position: { top: "52%", left: "38%" },
    },
    // Driver's side doors - 2 hotspots
    {
      id: "door-front",
      name: "Power Window Motor",
      cost: "$400+",
      position: { top: "50%", left: "45%" },
    },
    {
      id: "door-rear",
      name: "Door Assembly",
      cost: "$1,500+",
      position: { top: "50%", left: "58%" },
    },
    // Rear fender/wheel - 2 hotspots
    {
      id: "fender-rear-above-wheel",
      name: "Rear Fender",
      cost: "$600+",
      position: { top: "62%", left: "68%" },
    },
    {
      id: "wheel-rear",
      name: "Suspension",
      cost: "$1,200+",
      position: { top: "82%", left: "70%" },
    },
    // Rear quarter panel/fuel cap
    {
      id: "fuel-cap",
      name: "Fuel System",
      cost: "$800+",
      position: { top: "58%", left: "72%" },
    },
    // Trunk/taillight - 2 hotspots
    {
      id: "taillight",
      name: "Taillight",
      cost: "$300+",
      position: { top: "55%", left: "82%" },
    },
    {
      id: "trunk",
      name: "Trunk Lid",
      cost: "$600+",
      position: { top: "48%", left: "80%" },
    },
  ];

  const getPartPosition = (part: CarPart) => {
    if (vehicleType === "suv" && part.suvPosition) {
      return part.suvPosition;
    }
    if (vehicleType === "truck" && part.truckPosition) {
      return part.truckPosition;
    }
    return part.position;
  };

  const handlePartClick = (part: CarPart) => {
    if (selectedPart?.id === part.id) {
      setSelectedPart(null);
    } else {
      setSelectedPart(part);
    }
  };

  // Get the appropriate car image based on vehicle type
  const getCarImageSrc = () => {
    const imageMap: Record<string, string> = {
      car: "/images/car-side-view.png",
      suv: "/images/suv-side-view.png",
      truck: "/images/truck-side-view.png",
    };
    return imageMap[vehicleType] || "/images/car-side-view.png";
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto">
      {/* Car Image Container - Much larger like Endurance */}
      <div className="relative w-full h-[600px] lg:h-[700px] xl:h-[800px] flex items-center justify-center">
        {/* Car Image - Much larger */}
        {!imageError ? (
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src={getCarImageSrc()}
              alt={`${vehicleType} side view`}
              fill
              className="object-contain"
              style={{ 
                filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.3))",
                maxWidth: "90%",
                maxHeight: "90%"
              }}
              priority
              onError={() => setImageError(true)}
            />
          </div>
        ) : (
          // Fallback SVG if image doesn't exist - larger version
          <svg
            viewBox="0 0 1200 600"
            className="w-full h-full max-w-[90%] max-h-[90%]"
            style={{ filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.3))" }}
          >
            {/* Car body - larger */}
            <rect x="200" y="200" width="800" height="200" rx="20" fill="#ffffff" />
            {/* Car roof */}
            <rect x="300" y="100" width="600" height="150" rx="15" fill="#f5f5f5" />
            {/* Windows */}
            <rect x="350" y="120" width="250" height="110" rx="8" fill="#4a90e2" opacity="0.4" />
            <rect x="650" y="120" width="250" height="110" rx="8" fill="#4a90e2" opacity="0.4" />
            {/* Wheels */}
            <circle cx="400" cy="400" r="50" fill="#1a1a1a" />
            <circle cx="400" cy="400" r="35" fill="#333" />
            <circle cx="900" cy="400" r="50" fill="#1a1a1a" />
            <circle cx="900" cy="400" r="35" fill="#333" />
            {/* Headlights */}
            <circle cx="200" cy="280" r="25" fill="#ffd700" opacity="0.9" />
            <circle cx="200" cy="320" r="25" fill="#ffd700" opacity="0.9" />
            {/* Taillights */}
            <rect x="1000" y="250" width="30" height="50" rx="6" fill="#ff3333" opacity="0.9" />
            <rect x="1000" y="310" width="30" height="50" rx="6" fill="#ff3333" opacity="0.9" />
          </svg>
        )}

        {/* Clickable Hotspots */}
        {carParts.map((part) => {
          const position = getPartPosition(part);
          const isSelected = selectedPart?.id === part.id;
          const isHovered = hoveredPart === part.id;

          return (
            <div
              key={part.id}
              className="absolute cursor-pointer group z-10"
              style={{
                top: position.top,
                left: position.left,
                transform: "translate(-50%, -50%)",
              }}
              onClick={() => handlePartClick(part)}
              onMouseEnter={() => setHoveredPart(part.id)}
              onMouseLeave={() => setHoveredPart(null)}
            >
              {/* Hotspot Button - Orange with white plus sign like Endurance */}
              <div
                className={`relative w-12 h-12 rounded-full transition-all duration-300 ${
                  isSelected
                    ? "bg-orange-500 scale-125 shadow-lg"
                    : isHovered
                    ? "bg-orange-500 scale-110 shadow-md"
                    : "bg-orange-500 hover:bg-orange-600"
                }`}
                style={{
                  boxShadow: isSelected || isHovered 
                    ? "0 0 20px rgba(249, 115, 22, 0.6)" 
                    : "0 2px 8px rgba(0,0,0,0.2)"
                }}
              >
                <div
                  className={`absolute inset-0 rounded-full ${
                    isSelected || isHovered ? "animate-ping bg-orange-500 opacity-40" : ""
                  }`}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* White plus sign */}
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                </div>
              </div>

              {/* Tooltip/Popup - Matching Endurance style */}
              {(isSelected || isHovered) && (
                <div
                  className={`absolute bottom-full left-1/2 mb-4 whitespace-nowrap transition-all duration-200 z-20 ${
                    isSelected ? "opacity-100 scale-100" : "opacity-90 scale-95"
                  }`}
                  style={{ transform: "translateX(-50%)" }}
                >
                  <div className="bg-white rounded-lg shadow-2xl p-5 border-2 border-orange-500 relative min-w-[180px]">
                    <div className="text-gray-900 font-bold text-[18px] mb-2 text-center">{part.name}</div>
                    <div className="text-orange-600 font-bold text-[24px] text-center">{part.cost}</div>
                    {/* Arrow pointing down */}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1">
                      <div className="w-4 h-4 bg-white border-r-2 border-b-2 border-orange-500 transform rotate-45" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Instructions */}
      <p className="text-white/60 text-center mt-6 text-[14px]">
        Click on any part to see repair costs without Lifetime Warranty coverage
      </p>
    </div>
  );
}

