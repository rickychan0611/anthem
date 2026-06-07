import type { Metadata } from "next";
import { Geist_Mono, Hanken_Grotesk, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Anthem Media | Turn Everyday Screens Into Local Attention",
  description:
    "Anthem Media helps Richmond businesses reach local audiences through premium digital-out-of-home screens in high-traffic commercial hubs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${hankenGrotesk.variable} ${plusJakartaSans.variable} ${geistMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
