/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      fontSize: {
        hero: [
          "64px",
          {
            lineHeight: "96px",
            fontWeight: "600",
          },
        ],
        sabe: [
          "56px",
          {
            lineHeight: "84px",
            fontWeight: "400",
          },
        ],
        h1: [
          "40px",
          {
            lineHeight: "60px",
            fontWeight: "700",
          },
        ],
        h2: [
          "32px",
          {
            lineHeight: "48px",
            fontWeight: "500",
          },
        ],
        h3: [
          "24px",
          {
            lineHeight: "36px",
            fontWeight: "500",
          },
        ],
        h4: [
          "20px",
          {
            lineHeight: "30px",
            fontWeight: "600",
          },
        ],
        body: [
          "16",
          {
            lineHeight: "30px",
            fontWeight: "300",
          },
        ],
        bodyLight: [
          "16",
          {
            lineHeight: "30px",
            fontWeight: "100",
          },
        ],
        bodyLarge: [
          "20",
          {
            lineHeight: "30px",
            fontWeight: "300",
          },
        ],
      },
    },
  },
  plugins: [],
};
