import type { Metadata } from "next";
import "./globals.css";
import "./components/navbar"
import NavBar from "./components/navbar";
import { Chivo_Mono } from "next/font/google";

const chivo = Chivo_Mono({ subsets: ["latin"], weight: ["100","200","300","400", "700"] });

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
        className="bg-primary"
      >
      <NavBar></NavBar>
        {children}
      </body>
    </html>
  );
}
