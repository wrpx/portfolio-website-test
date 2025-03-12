/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',
        secondary: '#1e40af',
        text: {
          DEFAULT: '#1f2937',
          dark: '#f3f4f6',
        },
        'light-text': {
          DEFAULT: '#6b7280', 
          dark: '#cbd5e1',
        },
        background: {
          DEFAULT: '#ffffff',
          dark: '#0f172a',
        },
        'section-bg': {
          DEFAULT: '#f3f4f6',
          dark: '#1e293b',
        },
        'card-bg': {
          DEFAULT: '#ffffff',
          dark: '#1e293b',
        },
        'card-border': {
          DEFAULT: '#e5e7eb',
          dark: '#334155',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      animation: {
        fadeInUp: 'fadeInUp 0.5s ease-out',
        slideInLeft: 'slideInLeft 0.5s ease-out',
        slideInRight: 'slideInRight 0.5s ease-out',
        float: 'float 3s ease-in-out infinite',
        shimmer: 'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        slideInLeft: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        slideInRight: {
          '0%': {
            opacity: '0',
            transform: 'translateX(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
        },
        shimmer: {
          '100%': {
            transform: 'translateX(100%)',
          },
        }
      },
      boxShadow: {
        'inner-lg': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        'soft': '0 2px 15px rgba(0, 0, 0, 0.05)',
        'soft-dark': '0 2px 15px rgba(0, 0, 0, 0.2)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-dots': 'radial-gradient(circle, #e5e7eb 1px, transparent 1px)',
        'gradient-dots-dark': 'radial-gradient(circle, #475569 1px, transparent 1px)',
      },
      backgroundSize: {
        'dots-sm': '20px 20px',
        'dots-lg': '30px 30px',
      },
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
