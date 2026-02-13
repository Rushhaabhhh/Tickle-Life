import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          900: '#2B1E17',
          800: '#4A3428',
          700: '#4A3A2E',
          accent: '#C9A24D',
          cream: '#F8F6F3',
          paper: '#f8f6f4',
          paper2: '#f0ede9'
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-ardela)', 'system-ui', 'sans-serif']
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem'
      },
      borderRadius: {
        ui: 'var(--radius-md)',
        'ui-lg': 'var(--radius-lg)',
        'ui-pill': 'var(--radius-pill)'
      },
      boxShadow: {
        ui: 'var(--shadow-sm)',
        'ui-lg': 'var(--shadow-lg)'
      },
      transitionDuration: {
        ui: 'var(--duration-normal)'
      },
      transitionTimingFunction: {
        ui: 'var(--ease-standard)'
      }
    }
  }
};
export default config;
