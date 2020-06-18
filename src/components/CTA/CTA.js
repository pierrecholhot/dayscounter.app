import React from 'react'
import cx from 'classnames'

import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import Button from '@material-ui/core/Button'

import useStyles from './CTA.styles.js'

function CTA({ className, ...props }) {
  const classes = useStyles()

  const baseProps = {
    className: cx(classes.root, className),
    size: 'large',
    variant: 'contained',
    color: 'secondary',
    startIcon: <AddCircleOutlineIcon />,
  }

  return (
    <Button {...baseProps} {...props}>
      Create counter
    </Button>
  )
}

export default CTA
