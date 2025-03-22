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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#0E9C58",
        secondary: "#000000",
      },
      fontFamily: {
        "font-monserrat": "var(--font-montserrat)",
        "font-open-sans": "var(--font-open-sans)",
      },
      gridTemplateColumns: {
        64: "6fr 4fr",
      },
    },
  },
  plugins: [],
} satisfies Config;
