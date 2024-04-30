"use client"; // This is a client component
import { useEffect } from "react";

const LinkedIn: React.FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//widget.tagembed.com/embed.min.js";
    script.type = "text/javascript";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <div
        className="h-full w-full tagembed-widget"
        data-widget-id="148082"
        view-url="https://widget.tagembed.com/148082"
      ></div>
    </>
  );
};

export default LinkedIn;
