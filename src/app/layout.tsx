import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Grip Gear",
  description: "Grip Sock Customiser",
  metadataBase: new URL("https://www.gripgear.co.uk"),
  keywords: [
    "Grip Gear",
    "GripGear",
    "Grip Sock",
    "Grip Socks",
    "Custom Grip Socks",
    "Girl Grip Socks",
    "Anti-slip Socks",
    "Football Socks",
    "Football Grip Socks",
    "Grip Socks kids",
    "Soccer Socks",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Navbar /> */}
        {children}
        <SpeedInsights />
        <Analytics />
        {/* <Footer /> */}
      </body>
    </html>
  );
}
