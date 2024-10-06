/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'header': ["'Poppins', sans-serif"],
				'display': ["'Roboto', sans-serif"]
			},
			backgroundColor: {
				'main-background': '#171717'
			},
			colors: {
				'background-color': '#171717',
				'heading-color': '#f7f7f7',
				'subtitles-color': '#e8e8e8',
				'text-color': '#b2b1b2',
				'other-color': '#fcfcfc'
			}
		},
	},
	plugins: [],
}
