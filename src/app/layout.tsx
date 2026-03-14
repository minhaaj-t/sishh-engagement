import type { Metadata } from "next";
import Script from "next/script";
import { Cormorant_Garamond, Noto_Serif_Devanagari, Outfit, Great_Vibes } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
});
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
});
const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-decorative",
});
const notoSerifDevanagari = Noto_Serif_Devanagari({
  subsets: ["devanagari", "latin"],
  weight: ["400", "600"],
  variable: "--font-devanagari",
});

export const metadata: Metadata = {
  title: "Wedding Invitation",
  description: "You're invited to celebrate with us",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${outfit.variable} ${greatVibes.variable} ${notoSerifDevanagari.variable}`}>
      <body>
        {children}
        <Script
          src="https://www.youtube.com/iframe_api"
          strategy="beforeInteractive"
        />
      </body>
    </html>
  );
}
