import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import Navbar from "./ui/navbar";
import Footer from "./ui/footer";
import { SERVICES, SITE } from "./lib/site";

const conduit = localFont({
  src: "../public/fonts/ConduitITC.woff2",
  display: "swap",
  variable: "--font-conduitITC",
});
const conduitBold = localFont({
  src: "../public/fonts/ConduitITC-Bold.woff2",
  display: "swap",
  variable: "--font-conduitITC-bold",
});
const yantramanav = localFont({
  src: "../public/fonts/Yantramanav-Regular.woff2",
  display: "swap",
  variable: "--font-yantramanav-regular",
  preload: false, // not used above the fold
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Mentorplan - Sociale indsatser og støtte til borgere i København",
    template: "%s | Mentorplan",
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  publisher: SITE.name,
  formatDetection: { telephone: false },
  openGraph: {
    siteName: SITE.name,
    locale: SITE.locale,
    type: "website",
    images: [{ url: SITE.ogImage, width: 1200, height: 630, alt: SITE.name }],
  },
  twitter: { card: "summary_large_image", images: [SITE.ogImage] },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#0f1326",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE.url}/#organization`,
  name: SITE.name,
  url: SITE.url,
  logo: `${SITE.url}/svg/mentorplan-logo.svg`,
  image: `${SITE.url}${SITE.ogImage}`,
  description: SITE.description,
  telephone: SITE.phone.e164,
  email: SITE.email,
  vatID: `DK${SITE.cvr}`,
  foundingDate: String(SITE.foundingYear),
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.street,
    postalCode: SITE.address.postalCode,
    addressLocality: SITE.address.city,
    addressCountry: SITE.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: SITE.address.lat,
    longitude: SITE.address.lng,
  },
  areaServed: "Storkøbenhavn",
  sameAs: [SITE.linkedIn],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Sociale indsatser",
    itemListElement: SERVICES.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.title,
        url: `${SITE.url}${s.href}`,
      },
    })),
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="da" className={`${conduit.variable} ${conduitBold.variable} ${yantramanav.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Navbar />
        {children}
        <Footer />
        <Toaster position="bottom-center" />
      </body>
    </html>
  );
}
