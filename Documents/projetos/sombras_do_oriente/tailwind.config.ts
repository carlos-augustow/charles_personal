/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Paleta oficial "Sombras do Oriente"
        'marrom-espresso': '#3D2B24',
        'areia-palido': '#F6F1EC',
        'dourado-profundo': '#A87C40',
        'cinza-quente': '#7A6E63',
        'bege-pastel': '#EDE6DC',
        // Cores complementares para o design
        primary: {
          50: '#FAF7F2',
          100: '#F6F1EC',
          200: '#EDE6DC',
          300: '#E0D5C8',
          400: '#D1C2B0',
          500: '#A87C40',
          600: '#956B35',
          700: '#7A572C',
          800: '#634625',
          900: '#3D2B24',
        },
        secondary: {
          50: '#F9F8F6',
          100: '#F1EFEB',
          200: '#E6E1DA',
          300: '#D8CFC5',
          400: '#C7BAA8',
          500: '#7A6E63',
          600: '#6B615A',
          700: '#59504A',
          800: '#4A413D',
          900: '#3D2B24',
        }
      },
      fontFamily: {
        'display': ['var(--font-playfair)', 'Playfair Display', 'serif'],
        'sans': ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-pattern': 'linear-gradient(135deg, #3D2B24 0%, #7A6E63 100%)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      boxShadow: {
        'luxury': '0 8px 30px rgba(61, 43, 36, 0.12)',
        'luxury-lg': '0 15px 40px rgba(61, 43, 36, 0.15)',
        'golden': '0 8px 25px rgba(168, 124, 64, 0.3)',
      }
    },
  },
  plugins: [],
}