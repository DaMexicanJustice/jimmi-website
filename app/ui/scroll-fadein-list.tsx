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
}

export default function ScrollFadeinList({ items }: ScrollFadeinListProps) {
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
            start: "top bottom-=100",
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
      className="p-6 bg-yellow-400 dark:bg-yellow-500 shadow-lg w-full"
    >
      <ul className="space-y-6">
        {items.map((item, index) => (
          <li key={index} className="list-item">
            <h3 className="text-xl uppercase font-conduitbold mb-2">
              {item.title}
            </h3>
            <p className="text-slate-900 mb-4">{item.content}</p>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
