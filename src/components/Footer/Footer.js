import React from 'react'
import cx from 'classnames'
import createPersistedState from 'use-persisted-state'

import Typography from '@material-ui/core/Typography'
import { useTheme } from '@material-ui/core/styles'

import MicroButton from '../MicroButton'

import useStyles from './Footer.styles.js'

const usePrivacyState = createPersistedState('showPrivacy')

function Footer({ className, ...props }) {
  const classes = useStyles()
  const [showPrivacy, setShowPrivacy] = usePrivacyState(true)
  const theme = useTheme()

  const openSource = (
    <a href="https://github.com/pierrecholhot/dayscounter.app/" target="_blank" rel="noopener noreferrer">
      open source
    </a>
  )

  const madeWithLove = (
    <a href="https://pierre.cx" target="_blank" rel="noopener noreferrer">
      made with love
    </a>
  )

  const themeSwitcher = <MicroButton onClick={props.onRequestSwitchTheme}>{theme.palette.type === 'dark' ? 'light' : 'dark'} theme</MicroButton>

  const renderPrivacyStatement = () => {
    if (!showPrivacy) {
      return null
    }
    return (
      <Typography variant="body2">
        <strong>Privacy:</strong> Your data is never shared or stored outside of this browser.{' '}
        <MicroButton onClick={() => setShowPrivacy(false)}>Dismiss</MicroButton>
      </Typography>
    )
  }

  return (
    <div className={cx(classes.root, className)}>
      <Typography variant="body2" gutterBottom>
        # {openSource} # {madeWithLove} # {themeSwitcher}
      </Typography>
      {renderPrivacyStatement()}
    </div>
  )
}

export default Footer
