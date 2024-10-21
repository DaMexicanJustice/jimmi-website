import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import React, { useState } from "react";

const sections = [
  {
    color: "#F05B4F",
    label: "Gæld til skat/\nGældstyrelsen",
    startAngle: 0,
    endAngle: 51.4,
    content: "This section is about debt to the tax authorities.",
  },
  {
    color: "#FAA73F",
    label: "Boligløs",
    startAngle: 51.4,
    endAngle: 102.8,
    content: "This section is about homelessness.",
  },
  {
    color: "#8DC63F",
    label: "Hjælp til\nmøder i det\noffentlige",
    startAngle: 102.8,
    endAngle: 154.2,
    content:
      "This section is about assistance with meetings with public authorities.",
  },
  {
    color: "#4DB3E6",
    label: "Udfordringer\ni familien",
    startAngle: 154.2,
    endAngle: 205.6,
    content: "This section is about family challenges.",
  },
  {
    color: "#00B0B9",
    label: "Psykiske og\nFysiske\nProblemer",
    startAngle: 205.6,
    endAngle: 257,
    content: "This section is about mental and physical health problems.",
  },
  {
    color: "#2A3890",
    label: "Mangler\nAt\nGennemføre\nFolkeskolen",
    startAngle: 257,
    endAngle: 308.4,
    content: "This section is about not completing primary school.",
  },
  {
    color: "#782C7F",
    label: "Manglende\nBeskæftigelse",
    startAngle: 308.4,
    endAngle: 360,
    content: "This section is about unemployment.",
  },
];

export default function CircularDiagram() {
  const [activeSection, setActiveSection] = useState<number | null>(null);
  const [open, setOpen] = useState(false);

  const handleClick = (index: number) => {
    setActiveSection(index);
    setOpen(true);
  };

  const handleClose = () => {
    setActiveSection(null);
    setOpen(false);
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
    <>
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
            <g
              className="cursor-default transition-opacity duration-200 hover:opacity-80"
              key={index}
            >
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
                  <tspan
                    className="font-conduit"
                    key={i}
                    x={textPos.x}
                    dy={i ? "1.2em" : "0"}
                  >
                    {line}
                  </tspan>
                ))}
              </text>
            </g>
          );
        })}
        <circle cx="100" cy="100" r="40" fill="white" />
        <g transform="translate(60, 60) scale(0.65)">
          <path
            d="M61.44,0c8.32,0,16.25,1.66,23.5,4.66l0.11,0.05c7.47,3.11,14.2,7.66,19.83,13.3l0,0c5.66,5.65,10.22,12.42,13.34,19.95 c3.01,7.24,4.66,15.18,4.66,23.49c0,8.32-1.66,16.25-4.66,23.5l-0.05,0.11c-3.12,7.47-7.66,14.2-13.3,19.83l0,0 c-5.65,5.66-12.42,10.22-19.95,13.34c-7.24,3.01-15.18,4.66-23.49,4.66c-8.31,0-16.25-1.66-23.5-4.66l-0.11-0.05 c-7.47-3.11-14.2-7.66-19.83-13.29L18,104.87C12.34,99.21,7.78,92.45,4.66,84.94C1.66,77.69,0,69.76,0,61.44s1.66-16.25,4.66-23.5 l0.05-0.11c3.11-7.47,7.66-14.2,13.29-19.83L18.01,18c5.66-5.66,12.42-10.22,19.94-13.34C45.19,1.66,53.12,0,61.44,0L61.44,0z M16.99,94.47l0.24-0.14c5.9-3.29,21.26-4.38,27.64-8.83c0.47-0.7,0.97-1.72,1.46-2.83c0.73-1.67,1.4-3.5,1.82-4.74 c-1.78-2.1-3.31-4.47-4.77-6.8l-4.83-7.69c-1.76-2.64-2.68-5.04-2.74-7.02c-0.03-0.93,0.13-1.77,0.48-2.52 c0.36-0.78,0.91-1.43,1.66-1.93c0.35-0.24,0.74-0.44,1.17-0.59c-0.32-4.17-0.43-9.42-0.23-13.82c0.1-1.04,0.31-2.09,0.59-3.13 c1.24-4.41,4.33-7.96,8.16-10.4c2.11-1.35,4.43-2.36,6.84-3.04c1.54-0.44-1.31-5.34,0.28-5.51c7.67-0.79,20.08,6.22,25.44,12.01 c2.68,2.9,4.37,6.75,4.73,11.84l-0.3,12.54l0,0c1.34,0.41,2.2,1.26,2.54,2.63c0.39,1.53-0.03,3.67-1.33,6.6l0,0 c-0.02,0.05-0.05,0.11-0.08,0.16l-5.51,9.07c-2.02,3.33-4.08,6.68-6.75,9.31C73.75,80,74,80.35,74.24,80.7 c1.09,1.6,2.19,3.2,3.6,4.63c0.05,0.05,0.09,0.1,0.12,0.15c6.34,4.48,21.77,5.57,27.69,8.87l0.24,0.14 c6.87-9.22,10.93-20.65,10.93-33.03c0-15.29-6.2-29.14-16.22-39.15c-10-10.03-23.85-16.23-39.14-16.23 c-15.29,0-29.14,6.2-39.15,16.22C12.27,32.3,6.07,46.15,6.07,61.44C6.07,73.82,10.13,85.25,16.99,94.47L16.99,94.47L16.99,94.47z"
            fill="black"
          />
        </g>
      </svg>
      <Dialog disableScrollLock={false} open={open} onClose={handleClose}>
        <DialogTitle className="font-conduitbold">
          {activeSection == null ? "" : sections[activeSection].label}
        </DialogTitle>
        <DialogContent className="font-yantramanav">
          {activeSection == null ? "" : sections[activeSection].content}
        </DialogContent>
        <DialogActions>
          <Button
            className="text-yellow-500 font-conduitbold"
            onClick={handleClose}
            color="primary"
          >
            Luk
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
