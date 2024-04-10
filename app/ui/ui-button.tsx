"use client"; // This is a client component
import { gsap } from "gsap";

import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const UiButton: React.FC = () => {
  const scrollTo = () => {
    const section = document.getElementById("contact-form");
    if (section) {
      //scroll to 400 pixels down from the top
      gsap.to(window, { duration: 2, scrollTo: section });
    }
  };

  return (
    <button
      onClick={scrollTo}
      className="py-1 px-6 bg-yellow-400 dark:bg-yellow-500 uppercase font-conduit cursor-pointer"
    >
      kontakt mig
    </button>
  );
};

export default UiButton;
