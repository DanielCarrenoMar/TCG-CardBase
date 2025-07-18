/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Quicksand', 'sans-serif'],
      },
    //   colors: {
    //     // Tus colores personalizados de Flowbite
    //     primary: {
    //       50: '#fffbe5',
    //       100: '#fff7cc',
    //       200: '#fff299',
    //       300: '#ffed66',
    //       400: '#ffe844',
    //       500: '#fde844',
    //       600: '#e6d23d',
    //       700: '#bfa832',
    //       800: '#998429',
    //       900: '#66561a',
    //     },
    //     secondary: {
    //       50: '#f0f9ff',
    //       100: '#e0f2fe',
    //       200: '#bae6fd',
    //       300: '#7dd3fc',
    //       400: '#38bdf8',
    //       500: '#0ea5e9',
    //       600: '#0284c7',
    //       700: '#0369a1',
    //       800: '#075985',
    //       900: '#0c4a6e',
    //     },
    //     background: '#454c4d',
    //   }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('flowbite/plugin'),
  ],
};