import React, { useEffect, useState } from "react";

function SemiCircleProgress({ value = 70 }) {
  const radius = 80;
  const circumference = Math.PI * radius; // half circle
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setProgress(value);
    }, 200);

    return () => clearTimeout(timeout);
  }, [value]);

  return (
    <div className="relative w-50 h-30 mb-4">
      <svg width="100%" height="100%" viewBox="0 0 200 100">

        {/* Background Arc */}
        <path
          d="M20 100 A 80 80 0 1 1 180 100"
          stroke="#e5e7eb"
          strokeWidth="14"
          fill="none"
          strokeLinecap="round"
        />

        {/* Animated Progress Arc */}
        <path
          d="M20 100 A 80 80 0 1 1 180 100"
          stroke="#ff6b1a"
          strokeWidth="14"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - (progress / 100) * circumference}
          style={{
            transition: "stroke-dashoffset 1.5s ease-out",
          }}
        />
      </svg>
    </div>
  );
}

export default SemiCircleProgress;
