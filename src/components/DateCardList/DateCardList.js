import React from 'react'
import cx from 'classnames'

import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListSubheader from '@material-ui/core/ListSubheader'

import useStyles from './DateCardList.styles.js'

function DateCardList({ single, subheader, className, children, ...props }) {
  const classes = useStyles()

  return (
    <Paper square={single} elevation={0} className={cx(classes.root, className)}>
      {subheader ? <ListSubheader component="div">{subheader}</ListSubheader> : null}
      <List component="div" className={classes.list}>
        {children}
      </List>
    </Paper>
  )
}

export default DateCardList
