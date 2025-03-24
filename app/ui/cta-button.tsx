import * as React from "react";
import Link from "next/link";

interface CtaButtonProps {
  text: string;
  href: string;
  height?: number;
  width?: number;
  preventDefault?: boolean;
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
        className={`py-${height} px-${width} uppercase font-conduitbold text-slate-900 text-sm bg-yellow-400 rounded-xs w-fit
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
