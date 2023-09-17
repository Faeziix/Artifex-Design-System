const plugin = require("tailwindcss/plugin");
import type { Config } from "tailwindcss";
import { radixThemePreset } from "radix-themes-tw";
import { blackA, mauve, violet, indigo, purple } from "@radix-ui/colors";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ...blackA,
        ...mauve,
        ...violet,
        ...purple,
        ...indigo,
        primary: {
          DEFAULT: violet.violet11,
          hover: violet.violet10,
          active: violet.violet9,
          dark: violet.violet3,
          "dark-hover": violet.violet4,
          "dark-active": violet.violet5,
        },
        accent: {
          DEFAULT: indigo.indigo11,
          hover: indigo.indigo10,
          active: indigo.indigo9,
          dark: indigo.indigo3,
          "dark-hover": indigo.indigo4,
          "dark-active": indigo.indigo5,
        },
      },
      keyframes: {
        enterFromRight: {
          from: { opacity: "0", transform: "translateX(200px)" },
          to: { opacity: "100%", transform: "translateX(0)" },
        },
        enterFromLeft: {
          from: { opacity: "0", transform: "translateX(-200px)" },
          to: { opacity: "100%", transform: "translateX(0)" },
        },
        exitToRight: {
          from: { opacity: "100%", transform: "translateX(0)" },
          to: { opacity: "0", transform: "translateX(200px)" },
        },
        exitToLeft: {
          from: { opacity: "100%", transform: "translateX(0)" },
          to: { opacity: "0", transform: "translateX(-200px)" },
        },
        scaleIn: {
          from: { opacity: "0", transform: "rotateX(-10deg) scale(0.9)" },
          to: { opacity: "100%", transform: "rotateX(0deg) scale(1)" },
        },
        scaleOut: {
          from: { opacity: "100%", transform: "rotateX(0deg) scale(1)" },
          to: { opacity: "0", transform: "rotateX(-10deg) scale(0.95)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "100%" },
        },
        fadeOut: {
          from: { opacity: "100%" },
          to: { opacity: "0" },
        },
      },
      animation: {
        scaleIn: "scaleIn 200ms ease",
        scaleOut: "scaleOut 200ms ease",
        fadeIn: "fadeIn 200ms ease",
        fadeOut: "fadeOut 200ms ease",
        enterFromLeft: "enterFromLeft 250ms ease",
        enterFromRight: "enterFromRight 250ms ease",
        exitToLeft: "exitToLeft 250ms ease",
        exitToRight: "exitToRight 250ms ease",
      },
    },
  },
  plugins: [
    plugin(({ matchUtilities }) => {
      matchUtilities({
        perspective: (value) => ({
          perspective: value,
        }),
      });
    }),
  ],
  // presets: [radixThemePreset],
};
export default config;
