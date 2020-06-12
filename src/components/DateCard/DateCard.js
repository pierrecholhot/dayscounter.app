import React from 'react'
import cx from 'classnames'
import dayjs from 'dayjs'
import IconButton from '@material-ui/core/IconButton'
import Paper from '@material-ui/core/Paper'
import Tooltip from '@material-ui/core/Tooltip'
import Typography from '@material-ui/core/Typography'
import HighlightOffIcon from '@material-ui/icons/HighlightOff'

import getCardColor from '../../utils/getCardColor'
import formatDate from '../../utils/formatDate'

import MicroButton from '../MicroButton'
import Color from '../Color'
import useStyles from './DateCard.styles.js'

function DateCard(props) {
  const classes = useStyles(props)

  const djsNow = dayjs().startOf('day')
  const djsDate = dayjs(props.data.date).startOf('day')
  const formattedDate = formatDate(djsDate)
  const daysDiff = Math.abs(djsDate.diff(djsNow, 'day'))

  if (props.isBeingDeleted) {
    return null
  }

  const handleDelete = e => {
    if (props.onRequestDelete) {
      props.onRequestDelete()
    }
  }

  const handleEdit = e => {
    if (props.onRequestEdit) {
      props.onRequestEdit()
    }
  }

  return (
    <div className={cx(classes.root, props.className)}>
      <div className={classes.content}>
        {props.hideColor ? null : (
          <div>
            <Color code={getCardColor(props.data.color)} />
          </div>
        )}
        <MicroButton className={classes.button}>
          <Paper variant="outlined" className={cx(classes.paper, { [classes.interactivePaper]: props.interactive })} onClick={handleEdit}>
            <Typography display="inline" variant="h6" className={classes.days}>
              {daysDiff} {daysDiff > 1 ? 'days' : 'day'}
            </Typography>
            <Typography display="inline" variant="caption" color="textSecondary">
              {djsDate.isBefore(djsNow) ? 'since' : 'until'}
            </Typography>
            {props.data.label ? (
              <React.Fragment>
                <Typography display="inline" variant="subtitle1">
                  {props.data.label}
                </Typography>
                <Typography display="inline" variant="subtitle1" color="textSecondary">
                  ({formattedDate})
                </Typography>
              </React.Fragment>
            ) : (
              <Typography display="inline" variant="subtitle1">
                {formattedDate}
              </Typography>
            )}
          </Paper>
        </MicroButton>
        {!props.interactive ? null : (
          <div>
            <Tooltip title="Delete">
              <IconButton className={classes.deleteBtn} aria-label="delete counter" onClick={handleDelete}>
                <HighlightOffIcon />
              </IconButton>
            </Tooltip>
          </div>
        )}
      </div>
    </div>
  )
}

DateCard.defaultProps = {
  interactive: true,
}

export default DateCard
