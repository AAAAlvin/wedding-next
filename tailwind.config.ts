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
      },
      fontFamily: {
        gowun: ['Gowun Dodum', 'sans-serif'], // Gowun Dodum 폰트를 Tailwind로 사용할 수 있도록 추가
      },
    },
  },
  plugins: [],
} satisfies Config;