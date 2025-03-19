import * as React from "react";
import Link from "next/link";

interface CtaButtonProps {
  text: string;
  href: string;
  height?: number;
  width?: number;
}

const CtaButton: React.FC<CtaButtonProps> = ({
  text,
  href,
  height = 4,
  width = 8,
}) => {
  return (
    <>
      <Link
        className={`py-${height} px-${width} uppercase font-conduitbold text-sm bg-yellow-400 rounded-xs
                  lg:text-base`}
        href={href}
        id="basic-button"
      >
        {text}
      </Link>
    </>
  );
};

export default CtaButton;
