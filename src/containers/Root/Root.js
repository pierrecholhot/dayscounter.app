import React from 'react'
import { SnackbarProvider } from 'notistack'
import CssBaseline from '@material-ui/core/CssBaseline'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import dayjs from 'dayjs'
import DayJsUtils from '@date-io/dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

import makeTheme from '../../utils/makeTheme'
import App from '../App'

dayjs.extend(relativeTime)

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
          <App isDarkTheme={isDarkTheme} onRequestSwitchTheme={() => setIsDarkTheme(!isDarkTheme)} />
        </SnackbarProvider>
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  )
}

export default Root
