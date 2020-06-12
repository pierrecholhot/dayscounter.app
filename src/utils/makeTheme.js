import 'typeface-roboto'
import 'typeface-righteous'

import theme from '../constants/theme'

const { selectionColor, backgroundColor, primaryColor, secondaryColor, headingsFontFamily } = theme

export default dark => {
  const key = dark ? 'dark' : 'light'

  return {
    typography: {
      h1: {
        fontFamily: headingsFontFamily,
        color: primaryColor[key],
      },
    },
    palette: {
      type: key,
      primary: { main: primaryColor[key] },
      secondary: { main: secondaryColor[key] },
      background: { default: backgroundColor[key] },
    },
    overrides: {
      MuiCssBaseline: {
        '@global': {
          'html, body, #root': {
            width: '100%',
            height: '100%',
          },
          body: {
            '-moz-osx-font-smoothing': 'grayscale',
            '-webkit-font-smoothing': 'antialiased',
            '-webkit-font-feature-settings': 'normal',
            '-webkit-tap-highlight-color': 'transparent',
            transitionProperty: 'background-color',
            transitionDuration: '250ms',
            transitionEasing: 'cubic-bezier(0.4, 0, 0.6, 1)',
          },
          '::selection': {
            backgroundColor: selectionColor[key],
            color: backgroundColor[key],
          },
          a: {
            color: primaryColor[key],
            textDecoration: 'none',
            '&:hover, &:focus': {
              textDecoration: 'underline',
              outline: 'none',
            },
          },
        },
      },
    },
  }
}
