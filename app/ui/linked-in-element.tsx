import { Linkedin } from "lucide-react";

type LinkedInElementProps = {
  url: string;
  text?: string;
};

export default function LinkedInElement({ url, text = "Følg på LinkedIn" }: LinkedInElementProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="absolute bottom-4 left-4 flex items-center gap-2 text-sm text-slate-700 hover:text-slate-950 transition-colors"
    >
      <Linkedin className="h-4 w-4 text-blue-500" aria-hidden="true" />
      <span className="uppercase font-conduitbold">{text}</span>
    </a>
  );
}
