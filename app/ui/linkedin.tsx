"use client"; // This is a client component
import { useEffect } from "react";

const LinkedIn: React.FC = () => {
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
      <div className="elfsight-app-f9fbdcdd-b555-4fae-a366-ae3d40480023" data-elfsight-app-lazy>
      </div>
    </>
  );
};

export default LinkedIn;
