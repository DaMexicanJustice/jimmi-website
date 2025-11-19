import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

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
});

export const metadata: Metadata = {
  title: "Mentorplan - Sociale Indsatser og Støtte til Borgere",
  description: "Mentorplan tilbyder professionelle sociale indsatser som ungeindsatser, beskæftigelsesindsatser, social støtte under §85 og virksomhedssamarbejde i Københavnsområdet. Hjælp til unge, beskæftigelse og social udvikling.",
  keywords: "ungeindsatser, beskæftigelsesindsatser, social støtte, mentorplan, københavn, ungdomsarbejde, social indsats, §85 støtte, virksomhedssamarbejde",
  authors: [{ name: "Mentorplan" }],
  creator: "Mentorplan",
  publisher: "Mentorplan",
  openGraph: {
    title: "Mentorplan - Sociale Indsatser og Støtte til Borgere",
    description: "Professionelle sociale indsatser for unge, beskæftigelse og social støtte i København. Mentorplan hjælper borgere med at finde vejen til en bedre fremtid.",
    url: "https://mentorplan.dk",
    siteName: "Mentorplan",
    images: [
      {
        url: "/images/mentorplan-og.jpg", // Replace with actual image path
        width: 1200,
        height: 630,
        alt: "Mentorplan - Sociale Indsatser",
      },
    ],
    locale: "da_DK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mentorplan - Sociale Indsatser og Støtte til Borgere",
    description: "Professionelle sociale indsatser for unge, beskæftigelse og social støtte i København.",
    images: ["/images/mentorplan-twitter.jpg"], // Replace with actual image path
  },
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
  alternates: {
    canonical: "https://mentorplan.dk",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Mentorplan",
    "url": "https://mentorplan.dk",
    "logo": "https://mentorplan.dk/images/mentorplan-logo.svg",
    "description": "Mentorplan tilbyder professionelle sociale indsatser som ungeindsatser, beskæftigelsesindsatser og støtte til socialt udsatte borgere i Københavnsområdet.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "København",
      "addressCountry": "DK"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+45-XXXXXXX", // Replace with actual phone
      "contactType": "customer service"
    },
    "sameAs": [
      "https://www.linkedin.com/company/mentorplan" // If applicable
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Sociale Indsatser",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Ungeindsatser",
            "description": "Støtte til unge op til 23 år med fokus på stabilitet, beskæftigelse og kriminalitetsforebyggelse."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Beskæftigelsesindsatser",
            "description": "Individuelle beskæftigelsesforløb med 360-graders vurdering for tilbagevenden til arbejdsmarkedet."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Social Indsats under §85",
            "description": "Bostøtte og helhedsorienteret støtte til voksne med psykiske, fysiske eller sociale udfordringer."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Virksomhedssamarbejde",
            "description": "Samarbejde med virksomheder for at hjælpe socialt udsatte borgere tilbage på arbejdsmarkedet."
          }
        }
      ]
    }
  };

  return (
    // Include UTF-8 encoding
    <html
      lang="da"
      className={`${conduit.variable} ${yantramanav.variable} ${conduitBold.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className={`${conduit.variable}`}>{children}</body>
    </html>
  );
}
