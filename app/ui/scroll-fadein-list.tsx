"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "../lib/gsap";

interface ListItem {
  title: string;
  content: string;
}

interface ScrollFadeinListProps {
  items: ListItem[];
  useBackground: boolean;
  textAlign: string;
  textColor: string;
}

export default function ScrollFadeinList({
  items,
  useBackground,
  textAlign,
  textColor,
}: ScrollFadeinListProps) {
  const listRef = useRef<HTMLDivElement>(null);

  // Scoped to this list, so several lists on a page don't animate each other's items
  useGSAP(
    () => {
      const listItems = Array.from(listRef.current?.querySelectorAll<HTMLElement>(".list-item") ?? []);

      listItems.forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: item,
              start: "top bottom-=80",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    },
    { scope: listRef, dependencies: [items] }
  );

  return (
    <div ref={listRef} className="p-0 w-full">
      <ul className="space-y-0">
        {items.map((item, index) => (
          <li key={index} className="list-item">
            <h3
              className={`text-xl uppercase font-conduitbold mb-0 p-0 lg:text-2xl 2xl:text-3xl
                ${useBackground ? "bg-yellow-400" : "bg-transparent"}
                ${textColor}
                ${textAlign}`}
            >
              {item.title}
            </h3>
            <p
              className={`p-0 ${textColor} ${index !== items.length - 1 ? 'mb-4' : ''}`}
            >
              {item.content}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
