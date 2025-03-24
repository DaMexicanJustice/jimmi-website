"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ListItem {
  title: string;
  content: string;
  subtitle?: string;
  subcontent?: string;
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

  useEffect(() => {
    const listItems = gsap.utils.toArray(".list-item");

    listItems.forEach((item) => {
      gsap.fromTo(
        item as HTMLElement,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: item as HTMLElement,
            start: "top bottom-=80",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, [items]);

  return (
    <motion.div
      ref={listRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-0 w-full"
    >
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
              key={index}
              className={`p-0 ${textColor} ${index !== items.length - 1 ? 'mb-4' : ''}`}
            >
              {item.content}
            </p>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
