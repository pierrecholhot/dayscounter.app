import React from 'react'
import DayJsUtils from '@date-io/dayjs'
import { SnackbarProvider } from 'notistack'

import CssBaseline from '@material-ui/core/CssBaseline'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'

import App from '../App'

import makeTheme from '../../utils/makeTheme'

function Root(props) {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false)
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

  React.useEffect(() => {
    setIsDarkTheme(prefersDarkMode)
  }, [prefersDarkMode])

  const theme = createMuiTheme(makeTheme(isDarkTheme))

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MuiPickersUtilsProvider utils={DayJsUtils}>
        <SnackbarProvider maxSnack={3}>
          <App onRequestSwitchTheme={() => setIsDarkTheme(!isDarkTheme)} />
        </SnackbarProvider>
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  )
}

export default Root
