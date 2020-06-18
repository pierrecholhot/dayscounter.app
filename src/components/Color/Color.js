import React from 'react'
import cx from 'classnames'

import MicroButton from '../MicroButton'

import useStyles from './Color.styles.js'

function Color({ code, selected, interactive, className, ...props }) {
  const classes = useStyles({ code, selected })
  const Root = interactive ? MicroButton : 'div'
  return <Root className={cx(classes.root, className)} {...props} />
}

export default Color
