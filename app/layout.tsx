import type { Metadata } from "next";
import "./globals.css";
import Snow from "@/components/Snow";
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: "MintzCheatz | Undetectable Spoofer & Cheats",
    template: "%s | https://mintzcheatz.vercel.app/" // vercel url
  },
  description: "Best Spoofer & Cheats for your games!",
  keywords: ["hwid spoofer", "undetectable spoofer", "valorant spoofer", "eac spoofer", "gaming spoofer", "valorant cheat", "valorant cheats", "cs2 cheat", "cs2 cheats", "mintzcheatz", "spoofer", "cheats"],
  authors: [{ name: "Stounr Sepix" }],

  openGraph: {
    title: "MintzCheatz - Stay Undetected",
    description: "The most reliable Spoofer and cheats on the market. Instant delivery.",
    url: "https://mintzcheatz.vercel.app/", // vercel url
    siteName: "MintzCheatz",
    images: [
      {
        url: "/mintzcheatz.jpg",
        width: 1200,
        height: 630,
        alt: "MintzCheatz Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-[#0a0a0a] text-white selection:bg-purple-500/30">
        <Snow />        
        {children}
        <Footer />
      </body>
    </html>
  );
}
