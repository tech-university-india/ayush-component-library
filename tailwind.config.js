const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */

module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'publish',
    content: ['./src/**/*.{js,jsx,ts,tsx}']
  },
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        selected: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        header: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        textBox: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        textBoxInset: 'inset 0 4px 4px rgba(0, 0, 0, 0.25)'
      },
      colors: {
        primary: '#B6EBB7',
        secondary: '#008080',
        preFillText: '#4D4242',
        outline: '#005FCC',
        delete: '#FF6464'

      },
      backgroundColor: {
        primary: '#B6EBB7',
        secondary: '#008080',
        backgroundText: '#948585',
        submit: '#E5FCF4',
        preFillText: '#4D4242',
        textBox: '#F2FEFF',
        options: '#DAE1FB',
        deactivate: '#FBA997',
        delete: '#FF6464',
        resend: '#FFFFFF'
      },
      padding: {
        desktop: '28vw',
        tablet: '20vw'
      },
      dropShadow: {
        keyValueDisplay: '0px 4px 4px rgba(0, 0, 0, 0.25)'
      },
      fontFamily: {
        sans: ['Avenir', 'sans-serif']
      }
    }
  },
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities, theme }) {
      addComponents({
        '.th-h1': {
          fontFamily: 'Avenir',
          fontStyle: 'normal',
          fontWeight: 800,
          fontSize: '32px',
          lineHeight: '44px'
        },
        '.th-h2': {
          fontFamily: 'Avenir',
          fontStyle: 'normal',
          fontWeight: 800,
          fontSize: '28px',
          lineHeight: '44px'
        },
        '.th-body-text': {
          fontFamily: 'Avenir',
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize: '16px',
          lineHeight: '22px'
        },
        '.th-small-text': {
          fontFamily: 'Avenir',
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize: '12px',
          lineHeight: '16px'
        }
      })
    })
  ]
}
