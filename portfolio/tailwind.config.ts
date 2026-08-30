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
        primary: "#FFFFFF",
        greyPrimary: "#5E5E5B",
        blackPrimary: "#0B1215",
        greyLight: "#C3C2C1",
        greyAccent: "#939291",
        tag: "#E0E0E0",
        blueAccent: "#576981",
        //
        bluePrimary: "#006AF5",
        blueSecondary: "#46648B",
        blueSecondaryLight: "#5B7FAE",
        cardBlue: "#B4C0D1",
        cardGrey: "#C0C0BD",
        cardWhite: "#EFECE5",
        cardDarkGrey: "#868684",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        manrope: ["var(--font-manrope)"],
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
          "18px",
          {
            lineHeight: "1.5",
            fontWeight: "200",
          },
        ],
        p2: [
          "16px",
          {
            lineHeight: "1.5",
            fontWeight: "300",
          },
        ],
        li: [
          "16px",
          {
            lineHeight: "1.6",
            fontWeight: "300",
          },
        ],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      blur: {
        xs: "1px",
      },
      keyframes: {
        blink: {
          "0%, 50%": { opacity: "1" },
          "50.01%, 100%": { opacity: "0" },
        },
        // Archive grid entrance. Transform here is safe -- it runs on the
        // cell's inner wrapper, not the cell, which the grid engine drives.
        "archive-cell-in": {
          from: { opacity: "0", transform: "translate3d(0, 14px, 0) scale(0.94)" },
          to: { opacity: "1", transform: "translate3d(0, 0, 0) scale(1)" },
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
        // `both` so the cell holds at opacity 0 through its stagger delay
        // instead of flashing in at full opacity first.
        "archive-cell-in": "archive-cell-in 520ms cubic-bezier(0.22, 1, 0.36, 1) both",
      },
    },
  },
  plugins: [],
} satisfies Config;
