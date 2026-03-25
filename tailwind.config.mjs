/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				"primary": "#00b894",
				"background-dark": "#0d1117",
				"surface-dark": "#161b22",
				"border-zinc": "#30363d",
				"text-main": "#e6edf3",
				"text-muted": "#8b949e",
			},
			fontFamily: {
				"display": ["Inter", "sans-serif"],
				"mono": ["JetBrains Mono", "monospace"]
			},
			borderRadius: {
				"DEFAULT": "2px",
				"lg": "2px",
				"xl": "2px",
			},
		},
	},
	plugins: [],
}
