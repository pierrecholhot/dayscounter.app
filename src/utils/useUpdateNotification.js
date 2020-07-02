import React from 'react'
import { useSnackbar } from 'notistack'

import Button from '@material-ui/core/Button'

export default function useUpdateNotification() {
  const key = 'UpdateNotification'
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()

  const action = (
    <Button color="primary" size="small" onClick={() => window.location.reload(true)}>
      Update
    </Button>
  )

  return {
    show: () => enqueueSnackbar(`A new version of this app is available`, { key, action, persist: true }),
    hide: () => closeSnackbar(key),
  }
}
