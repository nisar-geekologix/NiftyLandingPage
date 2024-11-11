/** @type {import('tailwindcss').Config} */
module.exports = {
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
      backgroundImage:{
        'footer-btn': 'linear-gradient(180deg, #4399eb 0%, #00498e 100%)',
        'freetriel-btn' : 'linear-gradient(90deg ,#537E95 0% , #004063 100%)',
      },
      boxShadow:{
        'review' : '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
        'freetrielbanner' : '0px 0px 15px 0px #0000001A',
        'featureCard' : '0px 0px 15px 0px #00000026',
      },
      letterSpacing:{
        'headline':'-0.05em',
      }
    },
  },
  plugins: [],
};





