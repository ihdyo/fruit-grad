/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
		extend: {
			fontFamily: {
        montRegular: ["mont-regular"],
        montBold: ["mont-bold"],
        libreBodoni: ["libre-bodoni"],
				southam: ["southam"],
			},
		},
	},
  plugins: [],
}

