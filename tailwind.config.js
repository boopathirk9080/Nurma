/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FDF8E7',
          100: '#FCF1CF',
          200: '#F9E29F',
          300: '#F6D36F',
          400: '#F3C43F',
          500: '#E5B520', // Golden sand
          600: '#C69B1B',
          700: '#A68116',
          800: '#866712',
          900: '#664D0D',
        },
        desert: {
          50: '#FBF7F1',
          100: '#F7EFE3',
          200: '#EFDFC7',
          300: '#E7CFAB',
          400: '#DFBF8F',
          500: '#D7AF73', // Desert sand
          600: '#B89362',
          700: '#997751',
          800: '#7A5C40',
          900: '#5B412F',
        },
        nile: {
          50: '#F0F9FF',
          100: '#E0F2FE',
          200: '#B9E6FE',
          300: '#7CD4FD',
          400: '#36BFFA',
          500: '#0BA5EC', // Nile blue
          600: '#0086C9',
          700: '#026AA2',
          800: '#065986',
          900: '#0B4A6F',
        }
      },
      backgroundImage: {
        'desert-pattern': "url('https://images.unsplash.com/photo-1547234935-80c7145ec969?auto=format&fit=crop&q=80')",
        'pyramid-pattern': "url('https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&q=80')",
      },
    },
  },
  plugins: [],
};