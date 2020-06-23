import React from 'react'
import cx from 'classnames'

import Typography from '@material-ui/core/Typography'

import useStyles from './ListTitle.styles.js'

function ListTitle({ className, ...props }) {
  const classes = useStyles()

  const baseProps = {
    className: cx(classes.root, className),
    variant: 'overline',
  }

  return <Typography {...baseProps} {...props} />
}

export default ListTitle
