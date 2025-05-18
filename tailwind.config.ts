import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './node_modules/flowbite-react/lib/**/*.js',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1536px',
      xxxl: '1920px',
      xxxxl: '2560px',
    },
    colors: {
      blue: '#1fb6ff',
      purple: '#7e5bef',
      pink: '#ff49db',
      orange: '#ff7849',
      green: '#13ce66',
      yellow: '#ffba00',
      'gray-dark': '#273444',
      gray: '#8492a6',
      'gray-light': '#e7e7e7',
      'gray-text': '#58595B',
      black: '#000',
      white: '#fff',
      transparent: 'transparent',
      slate: '#f7f7f7',
      hpRedLight: '#D21E2B',
      hpRedDark: '#C9002C',
      hpGray: '#999999',
      hpGrayBlue: '#EEF0F4',
      'gray-middle': '#666666',
      'shinny-red': '#EB0A1E',
      regalBlue: '#143251',
      denimBlue: '#102841',
      darkRegalBlue: '#081522',
      shinnyGreen: '#50EA02',
      nobelGray: '#F1F1F1',
      regalDarkBlue: '#001021',
      nobelGrayLight: '#697C90',
      'shinny-green': '#7AEA01',
      nobel: '#9B9B9B',
      'nobel-600': '#636363',
      'light-yellow': '#FFED6A',
      gold: '#B29E47',
      'white-DF': '#DFE4E7',
      'gold-butter': '#DEC659',
      'blue-shell': '#001F3F',
    },
    fontFamily: {
      sans: ['Heebo', 'sans-serif'],
      serif: ['Heebo', 'serif'],
      roboto: ['Heebo', 'Roboto'],
      cabin: ['Cabin Regular'],
      cabinMedium: ['Cabin Medium'],
      cabinBold: ['Cabin Bold'],
      cabinSemiBold: ['Cabin SemiBold'],
      cabinItalic: ['Cabin Italic'],
      interRegular: ['Inter Regular'],
      interBold: ['Inter Bold'],
      interSemiBold: ['Inter SemiBold'],
      interMedium: ['Inter Medium'],
      interThin: ['Inter Thin'],
      montserratBold: ['Montserrat Bold'],
    },
    extend: {
      fontSize: {
        xxs: '0.625rem', // Equivale a 10px
        '22': '22.5px', // Equivale a 22.5 px
        '25': '25px', // Equivale a 25 px
        '40': '40px', // Equivale a 40px
        '43': '43px', // Equivale a 43px
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      gridTemplateColumns: {
        '3': 'repeat(3, minmax(0, 1fr))',
        '5': 'repeat(5, minmax(0, 1fr))',
        '6': 'repeat(6, minmax(0, 1fr))',
        '7': 'repeat(7, minmax(0, 1fr))',
      },
      height: {
        '460': '460px',
      },
      backgroundImage: {
        'custom-carousel-gradient':
          'linear-gradient(to right, #C9002C 0%, #C9002C 8%, white 35%, white 39%, #e7e7e7' +
          ' 97%, #e7e7e7 134%)',
      },
      lineHeight: {
        'custom-30': '30px !important',
        'custom-37': '37px !important',
        'custom-50': '50px !important',
        'custom-58': '58px !important',
        'custom-56': '56.25px !important',
      },
      textShadow: {
        black: '1px 0 10px black',
        white: '1px 0px white, 0 0 0px white, 0 0 white',
      },
    },
  },
  plugins: [require('flowbite/plugin'), require('tailwindcss-textshadow')],
};
export default config;
