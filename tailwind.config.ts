import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      
      backgroundImage: {
        'gradient-to-right': 'linear-gradient(to right, rgba(255, 255, 255, 0.20) 0%, rgba(41, 48, 46, 0.20) 53%, rgba(255, 255, 255, 0.20) 100%)',
        'hero-bg':'linear-gradient(130deg, #E5CDA8 9.14%, #BA9E73 72.99%)'
      },

        fontFamily: {
          garnett: ['var(--font-garnett)']
        }
    
    },
  },
  plugins: [],
};
export default config;
