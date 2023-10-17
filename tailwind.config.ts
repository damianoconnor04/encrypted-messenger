import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        grow: {
          '0%': { transform: 'scale(0.8)' },
          '100%': { transform: 'scale(1)' },
        },
        overlay: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        shake: {
          '0%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-10px)' },
          '50%': { transform: 'translateX(0)' },
          '75%': { transform: 'translateX(10px)' },
          '100%': { transform: 'translateX(0)' },
        }
      },
      animation: {
        marquee: 'marquee 20s linear infinite',
        grow: 'grow 150ms linear',
        overlay: 'overlay 250ms linear',
        shake: 'shake 100ms linear'
      },
      colors: {
        'd-border': '#2f3132ee',
        'l-border': '#d1d7d0ee',

        'd-accent': '#101010ee',
        'l-accent': '#c0c0c086',
        'd-accent2': '#3e4348aa',
        'l-accent2': '#d3d6d955',

        'l-soft-text': '#777777',
        'd-soft-text': '#999999',

        'l-hoverbg': '#32323233',
        'l-hoverbg2': '#3232321a',
        'd-hoverbg': '#ffffff33',
        'd-hoverbg2': '#ffffff1a',

        'l-panelbg': '#f0f0f0',
        'd-panelbg': '#1a1a1a',

        'l-overlay': '#242d35a8',
        'd-overlay': '#48596866',

      }
    },
  },
  plugins: [],
}
export default config
