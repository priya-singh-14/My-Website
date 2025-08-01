import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFFFFC",
        greyPrimary: "#433D3C",
        bluePrimary: "#006AF5",
        blueSecondary: "#46648B",
        blueSecondaryLight: "#5B7FAE",
        blackPrimary: "#0B1215",
        cardBlue: "#B4C0D1",
        cardGrey: "#C0C0BD",
        cardWhite: "#EFECE5",
        cardDarkGrey: "#868684",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        mono: ["'IBM Plex Mono'"],
        sans: ["'IBM Plex Sans'"],
        condensed: ["'IBM Plex Sans Condensed'"],

      },
      fontSize: {
        h1: [
          "40px",
          {
            lineHeight: "1.2",
            fontWeight: "300",
          },
        ],
        h2: [
          "32px",
          {
            lineHeight: "1.3",
            fontWeight: "400",
          },
        ],
        h3: [
          "24px",
          {
            lineHeight: "1.3",
            fontWeight: "400",
          },
        ],
        h4: [
          "22px",
          {
            lineHeight: "1.4",
            fontWeight: "400",
          },
        ],
        p: [
          "20px",
          {
            lineHeight: "1.5",
            fontWeight: "400",
          },
        ],
        p2: [
          "16px",
          {
            lineHeight: "1.5",
            fontWeight: "400",
          },
        ],
        li: [
          "20px",
          {
            lineHeight: "1.6",
            fontWeight: "400",
          },
        ],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
} satisfies Config;
