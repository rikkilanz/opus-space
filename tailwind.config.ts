import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5561FB',
        secondary: '#C746E7',
        black: '#050A11',
        white: '#FFFFFF',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily:{
        epilogue: ['var(--font-epilogue)'],
        opensauce: ['OpenSauceSans-Regular', 'sans'],
        opensaucebold: ['OpenSauceSans-Bold', 'sans'],
        opensaucebolditalic: ['OpenSauceSans-BoldItalic', 'sans'],
        opensauceitalic: ['OpenSauceSans-Italic', 'sans'],
        opensaucelight: ['OpenSauceSans-Light', 'sans'],
        opensaucelightitalic: ['OpenSauceSans-LightItalic', 'sans'],
      },
    },
  },
  plugins: [],
}
export default config
