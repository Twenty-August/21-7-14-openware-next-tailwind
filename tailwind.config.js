module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        'dark': '#0d1017',
        'red': '#ed5267',
        'darkblue': '#1e375a',
        'blue': '#0030AE',
        'cyan': '#1be6e6',
        'yellow': '#e6db74',
      },
      backgroundImage: theme => ({
        'intro': 'url("/images/home/intro-bg.svg")',
      }),
    },
  },
  variants: {
    extend: {
      display: ['group-hover'],
      margin: ['group-hover'],
      translate: ['group-hover'],
      rotate: ['group-hover'],
    },
  },
  plugins: [],
};
