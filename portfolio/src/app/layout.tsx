import type { Metadata } from "next";
import "./globals.css";
import "./components/navbar"
import NavBar from "./components/navbar";
import { IBM_Plex_Mono, IBM_Plex_Sans, IBM_Plex_Sans_Condensed } from "next/font/google";

const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["100","200","300","400", "700"] });
const sans = IBM_Plex_Sans({ subsets: ["latin"], weight: ["100","200","300","400", "700"] });
const condensed = IBM_Plex_Sans_Condensed({ subsets: ["latin"], weight: ["100","200","300","400", "700"] });

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
