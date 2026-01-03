import AccessibilityToolbar from "@/components/AccessibilityToolbar";
import DeferredCSS from "@/components/DeferredCSS";
import MobilePerformanceOptimizer from "@/components/MobilePerformanceOptimizer";
import MobileUXTester from "@/components/MobileUXTester";
import PreloadResources from "@/components/PreloadResources";
import SkipLink from "@/components/SkipLink";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "JCR Elite Protection | Premium Security Services London",
  description:
    "Specialist security services providing elite protection for VIPs, corporate clients, and residential properties in London and Mayfair.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <Providers>
          <PreloadResources />
          <DeferredCSS />
          <MobilePerformanceOptimizer />
          <SkipLink />
          <main>{children}</main>
          <AccessibilityToolbar />
          <MobileUXTester />
          <Analytics />
          <SpeedInsights />
        </Providers>
      </body>
    </html>
  );
}
