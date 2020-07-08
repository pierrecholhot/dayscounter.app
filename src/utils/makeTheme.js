import 'typeface-roboto'
import 'typeface-righteous'

import cyan from '@material-ui/core/colors/cyan'
import grey from '@material-ui/core/colors/grey'
import lime from '@material-ui/core/colors/lime'
import pink from '@material-ui/core/colors/pink'
import teal from '@material-ui/core/colors/teal'

export const themeVariables = {
  headingsFontFamily: "'Righteous', arial",
  backgroundColor: {
    light: grey['100'],
    dark: grey['900'],
  },
  paperBackgroundColor: {
    light: '#FFF',
    dark: grey['A400'],
  },
  primaryColor: {
    light: cyan['800'],
    dark: cyan['600'],
  },
  secondaryColor: {
    light: pink['800'],
    dark: pink['600'],
  },
  selectionColor: {
    light: teal['800'],
    dark: lime['600'],
  },
}

export const makeTheme = dark => {
  const key = dark ? 'dark' : 'light'

  const palette = {
    type: key,
    primary: { main: themeVariables.primaryColor[key] },
    secondary: { main: themeVariables.secondaryColor[key] },
    background: {
      default: themeVariables.backgroundColor[key],
      paper: themeVariables.paperBackgroundColor[key],
    },
  }

  if (dark) {
    palette.primary.contrastText = themeVariables.backgroundColor.light
  }

  const typography = {
    h1: {
      fontFamily: themeVariables.headingsFontFamily,
      color: themeVariables.primaryColor[key],
    },
  }

  const globalCSS = {
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
      backgroundColor: themeVariables.selectionColor[key],
      color: themeVariables.backgroundColor[key],
    },
    a: {
      color: themeVariables.primaryColor[key],
      textDecoration: 'none',
      '&:hover, &:focus': {
        textDecoration: 'underline',
        outline: 'none',
      },
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
        backgroundColor: themeVariables.paperBackgroundColor[key],
        transitionProperty: 'background-color',
        transitionDuration: '250ms',
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.6, 1)',
      },
    },
    MuiCssBaseline: {
      '@global': globalCSS,
    },
  }

  return {
    typography,
    palette,
    overrides,
  }
}
