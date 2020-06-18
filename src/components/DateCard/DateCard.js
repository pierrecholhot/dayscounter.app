import React from 'react'
import cx from 'classnames'

import HighlightOffIcon from '@material-ui/icons/HighlightOff'
import IconButton from '@material-ui/core/IconButton'
import Paper from '@material-ui/core/Paper'
import Tooltip from '@material-ui/core/Tooltip'
import Typography from '@material-ui/core/Typography'

import Color from '../Color'
import MicroButton from '../MicroButton'

import formatDate from '../../utils/formatDate'
import getCardColor from '../../utils/getCardColor'
import normalizeDate from '../../utils/normalizeDate'
import today from '../../utils/today'

import useStyles from './DateCard.styles.js'

function DateCard(props) {
  const classes = useStyles(props)

  const djsDate = normalizeDate(props.data.date)
  const formattedDate = formatDate(djsDate)
  const daysDiff = Math.abs(djsDate.diff(today, 'day'))

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

  const renderDaysDiff = () => {
    const content = (
      <Typography component="span" variant="h6" className={classes.days}>
        {daysDiff} {daysDiff > 1 ? 'days' : 'day'}
      </Typography>
    )
    return daysDiff < 25 ? (
      content
    ) : (
      <Tooltip arrow title={djsDate.isBefore(today) ? djsDate.from(today) : today.to(djsDate)}>
        {content}
      </Tooltip>
    )
  }

  const renderLabels = () => {
    if (!props.data.label) {
      return (
        <Typography component="span" variant="subtitle1">
          {formattedDate}
        </Typography>
      )
    }
    return (
      <React.Fragment>
        <Typography component="span" variant="subtitle1">
          {props.data.label}
        </Typography>
        <Typography component="span" variant="subtitle1" color="textSecondary">
          ({formattedDate})
        </Typography>
      </React.Fragment>
    )
  }

  const renderDeleteButton = () => {
    if (!props.interactive) {
      return null
    }
    return (
      <div>
        <Tooltip title="Delete">
          <IconButton className={classes.deleteBtn} aria-label="delete counter" onClick={handleDelete}>
            <HighlightOffIcon />
          </IconButton>
        </Tooltip>
      </div>
    )
  }

  return (
    <div className={cx(classes.root, props.className)}>
      <div className={classes.content}>
        <div className={classes.color}>
          <Color code={getCardColor(props.data.color)} />
        </div>
        <MicroButton className={classes.button}>
          <Paper variant="outlined" className={cx(classes.paper, { [classes.interactivePaper]: props.interactive })} onClick={handleEdit}>
            {renderDaysDiff()}
            <Typography component="span" variant="caption" color="textSecondary">
              {djsDate.isBefore(today) ? 'since' : 'until'}
            </Typography>
            {renderLabels()}
          </Paper>
        </MicroButton>
        {renderDeleteButton()}
      </div>
    </div>
  )
}

DateCard.defaultProps = {
  interactive: true,
}

export default DateCard
