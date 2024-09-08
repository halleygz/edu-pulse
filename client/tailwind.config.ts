import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-green': '#006756',
        'custom-green-dark': '#004d40',
      },
      zIndex: {
        '10001': '10001',
        '10000': '10000',
          '60': '60',
          '70': '70',
          '80': '80',
          '90': '90',
  
      },
    
    },
  },
  plugins: [],
};
export default config;
