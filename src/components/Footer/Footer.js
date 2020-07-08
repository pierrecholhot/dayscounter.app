import React from 'react'
import cx from 'classnames'

import Typography from '@material-ui/core/Typography'

import MicroButton from '../MicroButton'

import useUserInterface from '../../utils/useUserInterface'

function Footer({ className, ...props }) {
  const { userInterface, toggleDarkMode, togglePrivacyStatement } = useUserInterface()

  const renderSource = () => (
    <a href="https://github.com/pierrecholhot/dayscounter.app/" target="_blank" rel="noopener noreferrer">
      open source
    </a>
  )

  const renderCredits = () => (
    <a href="https://pierre.cx" target="_blank" rel="noopener noreferrer">
      made with love
    </a>
  )

  const renderThemeSwitch = () => {
    const label = `${userInterface.enableDarkMode ? 'light' : 'dark'} theme`
    return <MicroButton onClick={toggleDarkMode}>{label}</MicroButton>
  }

  const renderPrivacyStatement = () => {
    if (userInterface.hidePrivacyStatement) {
      return null
    }
    return (
      <Typography variant="body2">
        <strong>Privacy:</strong> Your data is never shared or stored outside of this browser.{' '}
        <MicroButton onClick={togglePrivacyStatement}>Dismiss</MicroButton>
      </Typography>
    )
  }

  return (
    <div className={cx(className)}>
      <Typography variant="body2" gutterBottom>
        # {renderSource()} # {renderCredits()} # {renderThemeSwitch()}
      </Typography>
      {renderPrivacyStatement()}
    </div>
  )
}

export default Footer
