"use client";
import { ArrowUp } from "lucide-react";

export default function ScrollTopButton() {
  return (
    <button
      type="button"
      aria-label="Til toppen af siden"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <ArrowUp className="size-12" />
    </button>
  );
}
