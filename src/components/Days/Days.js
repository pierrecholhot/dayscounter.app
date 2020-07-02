import React from 'react'
import cx from 'classnames'

import Typography from '@material-ui/core/Typography'

import useStyles from './Days.styles.js'

function Days({ className, ...props }) {
  const classes = useStyles()
  return <Typography variant="h6" component="span" className={cx(classes.root, className)} {...props} />
}

export default Days
