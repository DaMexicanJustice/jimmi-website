import type { Metadata } from "next";
import { SITE } from "./site";

type PageMetaInput = {
  title: string;
  description: string;
  /** Site path with trailing slash (matches `trailingSlash: true`), e.g. "/contact/". */
  path: string;
  image?: string;
  noIndex?: boolean;
};

/**
 * Builds consistent per-page metadata: title, description, canonical URL,
 * Open Graph and Twitter cards. Relative URLs resolve against `metadataBase`
 * set in the root layout.
 */
export function pageMetadata({
  title,
  description,
  path,
  image = SITE.ogImage,
  noIndex = false,
}: PageMetaInput): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: SITE.name,
      locale: SITE.locale,
      type: "website",
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    ...(noIndex ? { robots: { index: false, follow: true } } : {}),
  };
}
