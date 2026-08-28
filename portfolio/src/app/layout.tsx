import type { Metadata } from "next";
import "./globals.css";
import "./components/navbar"
import NavBar from "./components/navbar";
import SiteFooter from "./components/site-footer";
import CursorDot from "./components/cursor-dot";
import { IBM_Plex_Mono, IBM_Plex_Sans, IBM_Plex_Sans_Condensed, Manrope } from "next/font/google";
import localFont from "next/font/local";

const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["100","200","300","400", "700"] });
const sans = IBM_Plex_Sans({ subsets: ["latin"], weight: ["100","200","300","400", "700"] });
const condensed = IBM_Plex_Sans_Condensed({ subsets: ["latin"], weight: ["100","200","300","400", "700"] });

const manrope = Manrope({ subsets: ["latin"], weight: ["200","300","400","500","600","700","800"], variable: "--font-manrope" });
const generalSans = localFont({
  src: [
    { path: "./fonts/general-sans/GeneralSans-Extralight.woff2", weight: "200", style: "normal" },
    { path: "./fonts/general-sans/GeneralSans-Light.woff2", weight: "300", style: "normal" },
    { path: "./fonts/general-sans/GeneralSans-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/general-sans/GeneralSans-Medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/general-sans/GeneralSans-Semibold.woff2", weight: "600", style: "normal" },
    { path: "./fonts/general-sans/GeneralSans-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-general-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Priya Singh",
  description: "My Development and Design Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-primary ${manrope.className} ${manrope.variable} ${generalSans.variable}`}
      >
      <NavBar></NavBar>
        <CursorDot />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
