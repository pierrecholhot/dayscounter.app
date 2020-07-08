import React from 'react'
import DayJsUtils from '@date-io/dayjs'
import { SnackbarProvider } from 'notistack'

import CssBaseline from '@material-ui/core/CssBaseline'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { LocalizationProvider } from '@material-ui/pickers'

import App from '../App'

import useUserInterface from '../../utils/useUserInterface'
import { makeTheme } from '../../utils/makeTheme'

function Root(props) {
  const { userInterface } = useUserInterface()
  const muiTheme = createMuiTheme(makeTheme(userInterface.enableDarkMode))

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <LocalizationProvider dateAdapter={DayJsUtils}>
        <SnackbarProvider maxSnack={3}>
          <App />
        </SnackbarProvider>
      </LocalizationProvider>
    </ThemeProvider>
  )
}

export default Root
