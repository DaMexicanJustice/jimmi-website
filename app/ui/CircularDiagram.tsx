import React, { useState } from "react";

const sections = [
  {
    color: "#F05B4F",
    label: "Gæld til skat/\nGældstyrelsen",
    startAngle: 0,
    endAngle: 51.4,
  },
  { color: "#FAA73F", label: "Boligløs", startAngle: 51.4, endAngle: 102.8 },
  {
    color: "#8DC63F",
    label: "Hjælp til\nmøder i det\noffentlige",
    startAngle: 102.8,
    endAngle: 154.2,
  },
  {
    color: "#4DB3E6",
    label: "Udfordringer\ni familien",
    startAngle: 154.2,
    endAngle: 205.6,
  },
  {
    color: "#00B0B9",
    label: "Psykiske og\nFysiske\nProblemer",
    startAngle: 205.6,
    endAngle: 257,
  },
  {
    color: "#2A3890",
    label: "Mangler\nAt\nGennemføre\nFolkeskolen",
    startAngle: 257,
    endAngle: 308.4,
  },
  {
    color: "#782C7F",
    label: "Manglende\nBeskæftigelse",
    startAngle: 308.4,
    endAngle: 360,
  },
];

export default function CircularDiagram() {
  const [activeSection, setActiveSection] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveSection(index);
    console.log(`Clicked on section: ${sections[index].label}`);
  };

  const polarToCartesian = (
    centerX: number,
    centerY: number,
    radius: number,
    angleInDegrees: number
  ) => {
    const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
    return {
      x: centerX + radius * Math.cos(angleInRadians),
      y: centerY + radius * Math.sin(angleInRadians),
    };
  };

  const describeArc = (
    x: number,
    y: number,
    radius: number,
    startAngle: number,
    endAngle: number
  ) => {
    const start = polarToCartesian(x, y, radius, endAngle);
    const end = polarToCartesian(x, y, radius, startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
    return [
      "M",
      start.x,
      start.y,
      "A",
      radius,
      radius,
      0,
      largeArcFlag,
      0,
      end.x,
      end.y,
      "L",
      x,
      y,
      "Z",
    ].join(" ");
  };

  return (
    <svg viewBox="0 0 200 200" className="w-full max-w-md">
      <circle
        cx="100"
        cy="100"
        r="95"
        fill="white"
        stroke="black"
        strokeWidth="2"
      />
      {sections.map((section, index) => {
        const middleAngle = (section.startAngle + section.endAngle) / 2;
        const textPos = polarToCartesian(100, 100, 70, middleAngle);
        return (
          <g key={index}>
            <path
              d={describeArc(
                100,
                100,
                95,
                section.startAngle,
                section.endAngle
              )}
              fill={section.color}
              stroke="black"
              strokeWidth="2"
              onClick={() => handleClick(index)}
              className="cursor-pointer transition-opacity duration-200 hover:opacity-80"
            />
            <text
              x={textPos.x}
              y={textPos.y}
              textAnchor="middle"
              fill="white"
              fontSize="6"
              fontWeight="bold"
            >
              {section.label.split("\n").map((line, i) => (
                <tspan key={i} x={textPos.x} dy={i ? "1.2em" : "0"}>
                  {line}
                </tspan>
              ))}
            </text>
          </g>
        );
      })}
      <circle cx="100" cy="100" r="40" fill="black" />
    </svg>
  );
}
