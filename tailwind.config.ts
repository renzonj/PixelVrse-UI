import type { Config } from "tailwindcss";

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
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
			purple: {
				primary: '#ae62d4',
				secondary: "#340f3c",
				accent: '#22202c',
			},
			blue: {
				primary: '#67d3f9',
				accent: '#1e40af',
			},
			gray: {
				primary: '#1d1d1f',
				secondary: '#171717',
				accent: '#2b2b2b',
			},
			gold: {
				primary: '#fdd226',
				secondary: '#ffb806'
			},
			green:
			{
				primary: '#9fe3a1'
			},
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
