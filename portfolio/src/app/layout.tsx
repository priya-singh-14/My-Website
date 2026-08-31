import type { Metadata } from "next";
import "./globals.css";
import "./components/navbar";
import NavBar from "./components/navbar";
import SiteFooter from "./components/site-footer";
import CursorDot from "./components/cursor-dot";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://priyasingh.dev"),
  title: "Priya Singh",
  description: "priyasingh.dev",
  openGraph: {
    title: "Priya Singh",
    description: "priyasingh.dev",
    url: "/",
    siteName: "priyasingh.dev",
    type: "website",
    images: [
      {
        url: "/meta.png",
        width: 1200,
        height: 630,
        alt: "portfolio thumbnail",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Priya Singh",
    description: "priyasingh.dev — product design portfolio",
    images: ["/meta.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-primary ${manrope.className} ${manrope.variable}`}>
        <NavBar></NavBar>
        <CursorDot />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
