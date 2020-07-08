import React from 'react'
import { useSnackbar } from 'notistack'

import Button from '@material-ui/core/Button'

const eventName = 'DaysCounterAppUpdate'

export const dispatchUpdateEvent = () => {
  window.dispatchEvent(new Event(eventName))
}

export default function useUpdateNotification() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()

  const renderAction = () => (
    <Button color="primary" size="small" onClick={() => window.location.reload(true)}>
      Update
    </Button>
  )

  const showUpdateNotification = () => {
    const opts = { key: eventName, persist: true, action: renderAction() }
    enqueueSnackbar('A new version of this app is available', opts)
  }

  React.useEffect(() => {
    window.addEventListener(eventName, showUpdateNotification, { once: true })
    return () => window.removeEventListener(eventName, showUpdateNotification)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    dismiss: () => {
      closeSnackbar(eventName)
    },
  }
}
