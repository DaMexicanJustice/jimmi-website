"use client"; // This is a client component
import { useEffect } from "react";

const SocialFeedWidget: React.FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.type = "text/javascript";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <div className="elfsight-app-9ddb833c-5bef-4cfc-a903-061b9d6b0357" data-elfsight-app-lazy></div>
    </>
  );
};

export default SocialFeedWidget;
