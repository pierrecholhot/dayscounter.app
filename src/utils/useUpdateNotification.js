import React from 'react'
import { useSnackbar } from 'notistack'

import Button from '@material-ui/core/Button'

export default function useUpdateNotification() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()

  const opts = {
    key: 'UpdateNotification',
    persist: true,
    preventDuplicate: true,
    action: (
      <Button color="primary" size="small" onClick={() => window.location.reload(true)}>
        Update
      </Button>
    ),
  }

  return {
    show: () => enqueueSnackbar(`A new version of this app is available`, opts),
    hide: () => closeSnackbar(opts.key),
  }
}
