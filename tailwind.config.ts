import type { Config } from "tailwindcss";
const themeConfig = require('./theme.config');

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
		  backgroundImage: {
			  'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  			'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
		},
		borderRadius: {
			lg: 'var(--radius)',
			md: 'calc(var(--radius) - 2px)',
			sm: 'calc(var(--radius) - 4px)'
		},
		colors: {
			c1: themeConfig.themes.theme1,
			c2: themeConfig.themes.theme2,
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  		},
		fontSize: {
			'3xs': '.5rem',
			'2xs': '.625rem',
			'xs': '.75rem',
			'sm': '.875rem',
			'base': '1rem',
			'md': '1.125rem',
			'lg': '1.25rem',
			'xl': '1.5rem',
			'2xl': '1.875rem',
			'3xl': '2.25rem',
			'4xl': '3rem',
		},
		fontWeight: {
			'thin': '100',
			'extralight': '200',
			'light': '300',
			'normal': '400',
			'medium': '500',
			'semibold': '600',
			'bold': '700',
			'extrabold': '800',
		},
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
