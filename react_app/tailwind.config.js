/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        '128': '24rem',
      },
      maxHeight: {
        '128': '30rem',
      },
      width: {
        '84': '21rem',    // 84/4 = 21
        '86': '21.5rem',  // 86/4 = 21.5
        '90': '22.5rem',  // 90/4 = 22.5
        '94': '23.5rem',  // 94/4 = 23.5
        '100': '25rem',   // 100/4 = 25
      },
      colors: {
        brown: {
          100: '#F5E7E0',
          200: '#EAC2A6',
          300: '#DF9D6C',
          400: '#D47832',
          500: '#C95300', // This is the main brown color you might want to use for border-brown-500
          600: '#A14300',
          700: '#783200',
          800: '#4F2100',
          900: '#261000',
        'smoke-light': 'rgba(0, 0, 0, 0.5)',
        },
        backgroundImage: {
          'gradient-radial': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
          'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
        },
      }, 
    },
  },
  plugins: [],
}
