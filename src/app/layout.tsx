import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Brick & Throttle | Premium LEGO Racing Car Kits",
  description:
    "Build your racing legend brick by brick. Premium LEGO-compatible Porsche 911 building kits engineered for true automotive enthusiasts. Shop the 911 RSR, Gulf Racing, and Turbo S collections.",
  keywords: [
    "LEGO",
    "Porsche 911",
    "building blocks",
    "racing car kit",
    "brick",
    "RC car",
    "Technic",
  ],
  openGraph: {
    title: "Brick & Throttle | Premium LEGO Racing Car Kits",
    description:
      "Build your racing legend brick by brick. Premium LEGO-compatible Porsche 911 building kits.",
    type: "website",
    siteName: "Brick & Throttle",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
