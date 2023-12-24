import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      firaCode: ['var(--fira-code-font)'],
    },
    extend: {
      colors: {
        primary: {
          dark: '#01080E',
          light: '#011627',
          base: '#011221',
        },
        secondary: {
          gray: '#607B96',
          green: '#3C9D93',
          purple: '#4D5BCE',
          white: '#FFFFFF',
        },
        accent: {
          orange: '#FEA55F',
          green: '#43D9AD',
          red: '#E99287',
          pink: '#C98BDF',
        },
        line: '#1E2D3D',
      },
    },
  },
  plugins: [],
}
export default config
