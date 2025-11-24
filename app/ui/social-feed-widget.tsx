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
      <div className="elfsight-app-fad5eb4b-f6db-4ab6-8eab-34c9dea3e05e" data-elfsight-app-lazy></div>
    </>
  );
};

export default SocialFeedWidget;
