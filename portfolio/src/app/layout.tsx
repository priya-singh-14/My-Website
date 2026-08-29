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
      <body className={`bg-primary ${manrope.className} ${manrope.variable}`}>
        <NavBar></NavBar>
        <CursorDot />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
