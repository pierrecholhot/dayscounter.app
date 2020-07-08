import React from 'react'
import createPersistedState from 'use-persisted-state'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const usePersistedState = createPersistedState('dayscounter-ui')

function useUserInterface() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const [userInterface, setUserInterface] = usePersistedState({
    enableDarkMode: null,
    hidePrivacyStatement: null,
  })

  React.useEffect(() => {
    if (userInterface.enableDarkMode === null) {
      setUserInterface(ui => ({ ...ui, enableDarkMode: prefersDarkMode }))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prefersDarkMode, userInterface.enableDarkMode])

  return {
    userInterface,
    setUserInterface,
    toggleDarkMode: () => {
      setUserInterface(ui => ({ ...ui, enableDarkMode: !ui.enableDarkMode }))
    },
    togglePrivacyStatement: () => {
      setUserInterface(ui => ({ ...ui, hidePrivacyStatement: !ui.hidePrivacyStatement }))
    },
  }
}

export default useUserInterface
