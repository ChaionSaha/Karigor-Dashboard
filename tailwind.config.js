/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./**/*.{html,js}'],
	theme: {
		extend: {},
		screens: {
			sm: '576px',
			md: '768px',
			lg: '992px',
			xl: '1200px',
			'2xl': '1400px',
		},
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#F25422',
					secondary: '#00965C',
					accent: '#280559',
					'base-100': '#ffffff',
					'base-200': '#8B909A',
					'base-300': '#fafafa',
					success: 'rgba(40,199,111,0.16)',
					'success-content': '#28C76F',
					warning: 'rgba(255, 198, 0, 0.16)',
					'warning-content': '#FFC600',
					error: 'rgba(189, 0, 255, 0.16)',
					'error-content': '#BD00FF',
				},
			},
		],
	},
};
