import React from 'react'
import cx from 'classnames'
import createPersistedState from 'use-persisted-state'
import Typography from '@material-ui/core/Typography'

import MicroButton from '../MicroButton'
import useStyles from './Footer.styles.js'

const usePrivacyState = createPersistedState('showPrivacy')

function Footer({ className, ...props }) {
  const classes = useStyles()
  const [showPrivacy, setShowPrivacy] = usePrivacyState(true)

  return (
    <div className={cx(classes.root, className)}>
      <Typography variant="body2" gutterBottom>
        #{' '}
        <a href="https://github.com/pierrecholhot/dayscounter.app/" target="_blank" rel="noopener noreferrer">
          open source
        </a>{' '}
        #{' '}
        <a href="https://pierre.cx" target="_blank" rel="noopener noreferrer">
          made with love
        </a>{' '}
        # <MicroButton onClick={props.onRequestSwitchTheme}>{props.isDarkTheme ? 'light' : 'dark'} theme</MicroButton>
      </Typography>
      {!showPrivacy ? null : (
        <Typography variant="body2">
          <strong>Privacy:</strong> Your data is never shared or stored outside of this browser.{' '}
          <MicroButton onClick={() => setShowPrivacy(false)}>Dismiss</MicroButton>
        </Typography>
      )}
    </div>
  )
}

export default Footer
