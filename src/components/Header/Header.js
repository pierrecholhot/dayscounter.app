import React from 'react'
import cx from 'classnames'

import Typography from '@material-ui/core/Typography'

import CTA from '../CTA'

import useStyles from './Header.styles.js'

function Header({ className, ...props }) {
  const classes = useStyles()

  return (
    <div className={cx(className)}>
      <Typography variant="h1" component="h1" className={cx(classes.title, classes.colorTransition)}>
        <a href="https://dayscounter.app/">Days Counter</a>
      </Typography>
      <Typography variant="h4" component="h2" className={cx(classes.intro, classes.colorTransition)}>
        Simple tool to track and count <strong>days since</strong> and <strong>days until</strong> a certain date
      </Typography>
      <div>
        <CTA onClick={props.onRequestCreate} />
      </div>
    </div>
  )
}

export default Header
