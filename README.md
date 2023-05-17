# ayush-component-library

> A React Component Library

## Install

```bash
npm install ayush-component-library
```

## Usage

```tsx
import React, { Component } from 'react'

import { MyComponent } from 'ayush-component-library'
import 'ayush-component-library/dist/index.css'

class Example extends Component {
  render() {
    return <MyComponent />
  }
}
```

## Components

Alert\
Button\
CustomButton\
DropDownBox\
Dropdown\
Header\
KeyValueDisplay\
Loading\
OTPInput\
OTPRegistrationHeader\
ProfileNumber\
QRModal\
Radio\
RegisterForm\
ResendOTPButton\
SectionTitleDisplay\
TextBox\
UpdateButtons

## OverRiding CSS


You can override each of the property by providing your own tailwind config like this
and giving values



## tailwind.config.js
```js

const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        selected: 'var(--boxShadow-selected)',
        header: 'var(--boxShadow-header)',
        textBox: 'var(--boxShadow-textBox)',
        textBoxInset: 'var(--boxShadow-textBoxInset)',
      },
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        preFillText:'var(--color-preFillText)',
        outline: 'var(--color-outline)',
        backgroundText: 'var(--color-backgroundText)',
        delete: 'var(--color-delete)',

      },
      backgroundColor: {
        primary: 'var(--bg-primary)',
        secondary: 'var(--bg-secondary)',
        backgroundText: 'var(--bg-backgroundText)',
        submit: 'var(--bg-submit)',
        preFillText: 'var(--bg-preFillText)',
        textBox: 'var(--bg-textBox)',
        options: 'var(--bg-options)',
        deactivate: 'var(--bg-deactivate)',
        delete: 'var(--bg-delete)',
        healthRecordContainer: 'var(--bg-healthRecordContainer)',
        resend: 'var(--bg-resend)',
      },
      padding: {
        desktop: 'var(--padding-desktop)',
        tablet: 'var(--padding-tablet)',
      },
      dropShadow: {
        keyValueDisplay: 'var(--dropShadow-keyValueDisplay)',
      },
      fontFamily: {
        sans: ['Avenir', 'sans-serif']
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
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
  ],
  important: true
}

```


index.css/app.css 
```css
:root{
  --boxShadow-selected: 0px 4px 4px rgba(0, 0, 0, 0.25);
  --color-primary: #B6EBB7;
  --bg-primary: #732872;
  --padding-desktop: 28vw;
  --dropShadow-keyValueDisplay: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

```


## License

MIT ©
