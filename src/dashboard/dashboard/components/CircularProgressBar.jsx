// src/components/CircularProgressBar.js (New File)
import React from 'react';

const CircularProgressBar = ({ percentage, color, size = 80, strokeWidth = 8 }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ transform: 'rotate(-90deg)' }}>
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke="#e5e7eb" // Background circle
        strokeWidth={strokeWidth}
        fill="transparent"
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke={color} // Progress circle
        strokeWidth={strokeWidth}
        fill="transparent"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        style={{ transition: 'stroke-dashoffset 0.5s ease-out' }}
      />
      <text
        x="50%"
        y="50%"
        dy=".3em" // Vertically center
        textAnchor="middle"
        style={{
          fontSize: `${size / 4}px`,
          fill: color,
          transform: 'rotate(90deg)',
          transformOrigin: 'center center', // Rotate text back
          fontWeight: 'bold',
        }}
      >
        {`${Math.round(percentage)}%`}
      </text>
    </svg>
  );
};

export default CircularProgressBar;
