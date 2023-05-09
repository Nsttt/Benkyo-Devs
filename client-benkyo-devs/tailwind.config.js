/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",

		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		screens: {
			sm: "480px",
			md: "768px",
			lg: "976px",
			xl: "1440px",
		},
		borderRadius: {
			"r-card": "rounded-md",
			"r-btn": "rounded-md",
			"r-difficult": "rounded-lg",
			"r-avatar": "rounded-full",
		},
		extend: {
			gradient: {
				"bg-gr-app": "bg-gradient-to-r from-bg-app",
			},
			colors: {
				"color-user": "#48A2F5",
				"color-lang": "#716363",
				"color-text": "0F0D79",
				"bg-app": "#EBECF9",
				"bg-card": "A1CCF3",
				"bg-btn": "F7FFF7",
				"bg-btn-correct": "79E477",
				"bg-btn-fail": "F07171",
				"bg-arrow": "48A2F5",
			},
			fontFamily: {
				benkyofont: ["Mclaren", "Nunito", "sans-serif"],
			},
			fontSize: {
				"f-sz-user": "2rem",
				"f-sz-lang": "1.25rem",
				"f-sz-textcard": "1.5rem",
				"f-sz-btn": "1rem",
			},
			spacing: {
				width: {
					"w-btn": "15rem",
					"w-card": "43rem",
					"w-content-card": "22rem",
					"w-avatar": "10rem",
					"w-difficult": "14rem",
					"w-fav": "6rem",
					"w-content-reverse": "31rem",
					"w-arrow": "20rem",
				},
				height: {
					"h-btn": "6rem",
					"h-content-card": "23rem",
					"h-avatar": "10rem",
					"h-difficult": "10rem",
					"h-fav": "5rem",
					"h-content-reverse": "15rem",
					"h-arrow": "6rem",
				},
				transitionDuration: {
					"td-hover": "duration-150",
				},
				shadow: {
					"sh-card": "shadow-lg",
					"sh-btn": "shadow-md",
				},
			},
		},
	},
	plugins: [],
};
