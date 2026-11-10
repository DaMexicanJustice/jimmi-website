import Link from "next/link";

type CtaButtonProps = {
  text: string;
  href: string;
  size?: "sm" | "md";
  tabIndex?: number;
};

// Full class names so Tailwind can detect them (dynamic `py-${n}` strings are purged).
const SIZES = {
  sm: "py-3 px-6",
  md: "py-4 px-8",
} as const;

export default function CtaButton({ text, href, size = "md", tabIndex }: CtaButtonProps) {
  return (
    <Link
      href={href}
      tabIndex={tabIndex}
      className={`${SIZES[size]} uppercase font-conduitbold text-slate-900 text-sm bg-yellow-400 rounded-xs w-fit lg:text-base`}
    >
      {text}
    </Link>
  );
}
