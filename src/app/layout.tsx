import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit, Great_Vibes } from "next/font/google";
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
    <html lang="en" className={`${cormorant.variable} ${outfit.variable} ${greatVibes.variable}`}>
      <body>{children}</body>
    </html>
  );
}
