"use client"; // This is a client component"use client";
import type React from "react";
import { useRouter } from "next/navigation";

const DownloadButton: React.FC = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/presentation-card");
  };

  return (
    <button
      onClick={handleClick}
      className="
        bg-stone-500
        text-white
        font-bold
        py-3
        px-6
        text-sm
        uppercase
        tracking-wider
        transition-colors
        duration-300
        ease-in-out
        hover:bg-white
        hover:text-black
        focus:outline-none
        focus:ring-2
        focus:ring-yellow-600
        focus:ring-opacity-50
        shadow-md
      "
    >
      Download præsentationskort
    </button>
  );
};

export default DownloadButton;
