import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-heading", weight: ["400","500","600","700","800"] });
const inter = Inter({ subsets: ["latin"], variable: "--font-body" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://color.toolboxlite.com";

export const metadata: Metadata = {
  title: "Color Converter — HEX to RGB, HSL, OKLCH | ColorSwitch",
  description: "Convert colors between HEX, RGB, HSL, and OKLCH formats instantly. Color picker, one-click copy, CSS new-standard oklch support. Free, private, no sign-up.",
  keywords: ["hex to rgb", "color converter", "rgb to hex", "hsl converter", "oklch converter", "color picker", "hex to hsl", "css color converter"],
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Color Converter — HEX ↔ RGB ↔ HSL ↔ OKLCH | ColorSwitch",
    description: "Convert colors between HEX, RGB, HSL, and OKLCH formats. Free color picker tool.",
    url: siteUrl, siteName: "ColorSwitch", type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "ColorSwitch" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Color Converter | ColorSwitch",
    description: "HEX ↔ RGB ↔ HSL ↔ OKLCH color conversion. Free, instant, private.",
    images: ["/opengraph-image"],
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
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `(function(){try{var d=document.documentElement;var t=localStorage.getItem('theme');if(t==='dark'||((!t)&&window.matchMedia('(prefers-color-scheme:dark)').matches)){d.classList.add('dark')}else{d.classList.remove('dark')}}catch(e){}})()` }} />
      </head>
      <body className={`${jakarta.variable} ${inter.variable} font-sans antialiased bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100`}>
        {children}
      </body>
    </html>
  );
}
