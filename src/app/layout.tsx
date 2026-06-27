import type { Metadata } from "next";
import { Geist_Mono, Hanken_Grotesk, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

const siteTitle = "Anthem Media | Out-of-Home Solutions for Multicultural Advertising";
const siteDescription =
  "Anthem Media delivers out-of-home advertising solutions that help brands reach newcomers and multicultural audiences in high-traffic locations across Canada.";

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

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Anthem Media",
  url: siteUrl,
  logo: `${siteUrl}/anthem-logo.png`,
  description: siteDescription,
  sameAs: [],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Anthem Media",
  },
  description: siteDescription,
  keywords: [
    "out-of-home advertising",
    "OOH advertising",
    "multicultural advertising",
    "digital signage",
    "DOOH",
    "newcomer marketing",
    "ethnic audience advertising",
    "Anthem Media",
  ],
  authors: [{ name: "Anthem Media" }],
  creator: "Anthem Media",
  publisher: "Anthem Media",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png", sizes: "any" }],
    shortcut: [{ url: "/favicon.png", type: "image/png" }],
    apple: [{ url: "/favicon.png", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "/",
    siteName: "Anthem Media",
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/anthem-logo.png",
        alt: "Anthem Media logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/anthem-logo.png"],
  },
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
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
          type="application/ld+json"
        />
        {children}
      </body>
    </html>
  );
}
