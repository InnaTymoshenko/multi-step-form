import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		screens: {
			sx: '350px',
			sm: '480px',
			md: '640px',
			md2: '768px',
			lg: '960px',
			xl: '1200px',
			'2xl': '1440px',
			'3xl': '1600px'
		},
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				md: '2.5rem'
			}
		},
		spacing: {
			px: '1px',
			0: '0',
			0.5: '0.125rem',
			1: '0.25rem',
			1.5: '0.375rem',
			2: '0.5rem',
			2.5: '0.625rem',
			3: '0.75rem',
			3.5: '0.875rem',
			4: '1rem',
			5: '1.25rem',
			6: '1.5rem',
			7: '1.75rem',
			8: '2rem',
			9: '2.25rem',
			10: '2.5rem',
			11: '2.75rem',
			12: '3rem',
			14: '3.5rem',
			16: '4rem',
			20: '5rem',
			24: '6rem',
			28: '7rem',
			32: '8rem',
			36: '9rem',
			40: '10rem',
			44: '11rem',
			48: '12rem',
			52: '13rem',
			56: '14rem',
			60: '15rem',
			64: '16rem',
			72: '18rem',
			80: '20rem',
			96: '24rem'
		},
		borderRadius: {
			none: '0',
			sm: '.25rem',
			DEFAULT: '.5rem',
			md: '.75rem',
			lg: '1rem',
			full: '9999px'
		},
		fontFamily: {
			sans: 'Ubuntu, sans-serif'
		},
		fontSize: {
			us: ['10px', '12px'],
			sm: ['12px', '16px'],
			md: ['14px', '20px'],
			lg: ['16px', '24px'],
			xl: ['20px', '24px'],
			'2xl': ['24px', '28px'],
			'3xl': ['30px', '36px'],
			'4xl': ['40px', '40px'],
			'5xl': ['48px', '48px']
		},
		colors: {
			red: {
				100: 'hsl(354, 84%, 57%)'
			},
			blue: {
				50: 'hsl(206, 94%, 87%)',
				100: 'hsl(228, 100%, 84%)',
				200: ' hsl(243, 100%, 62%)',
				300: 'hsl(213, 96%, 18%)'
			},
			gray: {
				25: 'hsl(231, 100%, 99%)',
				50: 'hsl(217, 100%, 97%)',
				100: 'hsl(229, 24%, 87%)',
				200: 'hsl(231, 11%, 63%)'
			},
			white: 'hsl(0, 0%, 100%)'
		},
		backgroundColor: ({ theme }) => ({
			...theme('colors'),
			primary: 'rgba(var(--color-white))'
		}),
		textColor: ({ theme }) => ({
			...theme('colors'),
			primary: 'rgba(var(--color-white))'
		}),
		borderColor: ({ theme }) => ({
			...theme('colors'),
			primary: 'rgba(var(--color-white))'
		}),
		extend: {
			backgroundImage: {
				'sidebar-desktop': "url('/images/bg-sidebar-desktop.svg')",
				'sidebar-mobile': "url('/images/bg-sidebar-mobile.svg')"
			}
		}
	},

	plugins: []
}
export default config
