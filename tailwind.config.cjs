const plugin = require('tailwindcss/plugin');

module.exports = {
  darkMode: 'class', // Enable class-based dark mode
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563eb',
          dark: '#1d4ed8',
          light: '#3b82f6',
        },
        background: {
          light: '#f9fafb',
          dark: '#111827',
        },
        accent: '#facc15',
        card: {
          light: '#ffffff',
          dark: '#1f2937',
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 0.6s ease forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    plugin(function({ addUtilities }) {
      addUtilities({
        '.scrollbar-thin': {
          'scrollbar-width': 'thin',
          '-ms-overflow-style': 'auto',
        },
        '.scrollbar-thumb-rounded': {
          'scrollbar-color': '#4b5563 transparent',
        },
        '.scrollbar-thumb-rounded::-webkit-scrollbar-thumb': {
          'border-radius': '0.375rem',
          'background-color': '#4b5563',
        },
        '.scrollbar-track-rounded::-webkit-scrollbar-track': {
          'background-color': 'transparent',
        },
        '.scrollbar-thumb-rounded:hover::-webkit-scrollbar-thumb': {
          'background-color': '#6b7280',
        },
      });
    }),
  ],
};
