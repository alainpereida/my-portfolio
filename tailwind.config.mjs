/** @type {import('tailwindcss').Config} */
const baseColors = {
	primary: {
	  dark: '#000308',
	  light: '#fff',
	},
	secondary: {
	  dark: '#008D54',
	  light: '#00db82',
  }
}

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				// ...baseColors,
				primary: baseColors.primary.light,
				secondary: baseColors.secondary.light,
			},
		},
	},
	plugins: [],
}
