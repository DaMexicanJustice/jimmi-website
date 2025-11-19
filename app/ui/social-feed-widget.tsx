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
      <div className="elfsight-app-ecd3e595-919d-4bfc-8863-cf070ac1d97f" data-elfsight-app-lazy></div>
    </>
  );
};

export default SocialFeedWidget;
