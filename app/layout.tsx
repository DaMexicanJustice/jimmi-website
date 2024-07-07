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
  title: "Mentorplan",
  description: "SEO beskrivelse her",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Include UTF-8 encoding
    <html
      lang="en"
      className={`${conduit.variable} ${yantramanav.variable} ${conduitBold.variable}`}
    >
      <body className={`${conduit.variable}`}>{children}</body>
    </html>
  );
}
