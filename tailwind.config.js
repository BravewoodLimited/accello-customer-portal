/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      // "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
    ],
    theme: {
      screens: {
        'xs': '420px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      fontFamily: {
        gilroy: ['gilroy'],
        gilroyLight: ['gilroy-light'],
        NexaBold: ['NexaBold'],
        NexaLight: ['NexaLight'],
      },
      extend: {
        backgroundImage: {
          'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
          'gradient-dash': 'linear-gradient(87.93deg, #E9E6CE 3.83%, #97ADB1 87.25%);',
        },
        boxShadow: {
          'difference': '0px 1px 2px rgba(34, 34, 38, 0.15), 0px 4px 6px rgba(34, 34, 38, 0.08);',
        },
        colors: {
          'accelloBlue': '#04265F',
          'background': '#F9F9FB',
          'bgOpacity': 'rgba(255, 255, 255, 0.1)',
  
        },
        
      },
    },
    plugins: [
    ],
  }
  