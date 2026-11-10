import Script from "next/script";

/** Elfsight LinkedIn feed. The platform script is loaded once, after the page is idle. */
export default function SocialFeedWidget() {
  return (
    <>
      <div className="elfsight-app-fad5eb4b-f6db-4ab6-8eab-34c9dea3e05e" data-elfsight-app-lazy />
      <Script src="https://static.elfsight.com/platform/platform.js" strategy="lazyOnload" />
    </>
  );
}
