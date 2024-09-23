import type { Metadata } from "next";
import { Play, Roboto } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const play = Play({
  subsets: ["latin"],
  weight: ["400", "700"], // Add this to specify font weights
  variable: "--font-play",
});
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"], // Add this to specify font weights
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Grip Gear",
  description:
    "Discover high-quality grip socks that enhance your performance and reflect your unique style. Customise with logos and colors for a perfect match. Join the Grip Gear community today!",
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
    <html lang="en" className={`${play.variable} ${roboto.variable}`}>
      <body>
        {/* <Navbar /> */}
        {children}
        <SpeedInsights />
        <Analytics />
        {/* <Footer /> */}
      </body>
    </html>
  );
}
