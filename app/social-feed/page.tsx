import type { Metadata } from "next";
import SocialFeedWidget from "../ui/social-feed-widget";
import { pageMetadata } from "../lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Den Gode Historie",
  description:
    "Følg med i Mentorplans hverdag og de gode historier om borgere, samarbejdspartnere og virksomheder.",
  path: "/social-feed/",
});

export default function SocialFeed() {
  return (
    <main
      id="Social-feed"
      className="min-h-[calc(100svh-4rem)] mt-16 bg-slate-50 dark:bg-neutral-900"
    >
      <div className="container-page section-y">
        <h1 className="uppercase font-conduitbold text-2xl text-slate-900 dark:text-slate-50 text-center mb-8">
          Den Gode Historie
        </h1>
        <SocialFeedWidget />
      </div>
    </main>
  );
}
