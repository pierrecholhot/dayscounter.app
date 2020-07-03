import 'typeface-roboto'
import 'typeface-righteous'

import theme from '../constants/theme'

const { selectionColor, backgroundColor, paperBackgroundColor, primaryColor, secondaryColor, headingsFontFamily } = theme

export default dark => {
  const key = dark ? 'dark' : 'light'

  const palette = {
    type: key,
    primary: { main: primaryColor[key] },
    secondary: { main: secondaryColor[key] },
    background: {
      default: backgroundColor[key],
      paper: paperBackgroundColor[key],
    },
  }

  if (dark) {
    palette.primary.contrastText = backgroundColor.light
  }

  const typography = {
    h1: {
      fontFamily: headingsFontFamily,
      color: primaryColor[key],
    },
  }

  const overrides = {
    MuiBackdrop: {
      root: {
        backgroundColor: 'rgba(0,0,0,0.8)',
      },
    },
    MuiPaper: {
      root: {
        transitionProperty: 'background-color',
        transitionDuration: '250ms',
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.6, 1)',
      },
    },
    MuiListSubheader: {
      sticky: {
        backgroundColor: paperBackgroundColor[key],
        transitionProperty: 'background-color',
        transitionDuration: '250ms',
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.6, 1)',
      },
    },
    MuiCssBaseline: {
      '@global': {
        'html, body, #root': {
          width: '100%',
          height: '100%',
        },
        body: {
          '-webkit-tap-highlight-color': 'transparent',
          transitionProperty: 'background-color',
          transitionDuration: '250ms',
          transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.6, 1)',
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
  }

  return {
    typography,
    palette,
    overrides,
  }
}
