import React from 'react'
import cx from 'classnames'

import useStyles from './MicroButton.styles.js'

function MicroButton({ className, ...props }) {
  const classes = useStyles()
  return <button className={cx(classes.root, className)} {...props} />
}

export default MicroButton
