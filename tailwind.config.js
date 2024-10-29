/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			darkgray: '#161616',
  			lightgray: '#7C7C7C',
  			white: '#fff',
  			sidebarbg: '#1F1F1F',
  			layoutbg: '2F2F2F',
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
