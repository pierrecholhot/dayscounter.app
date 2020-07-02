import React from 'react'

import Skeleton from '@material-ui/lab/Skeleton'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'
import Collapse from '@material-ui/core/Collapse'

import Color from '../Color'
import Days from '../Days'
import DateCardActions from '../DateCardActions'

import formatDate from '../../utils/formatDate'
import normalizeDate from '../../utils/normalizeDate'
import today from '../../utils/today'
import useCardColors from '../../utils/useCardColors'

import useStyles from './DateCard.styles.js'

function DateCard(props) {
  const classes = useStyles(props)
  const cardColors = useCardColors()
  const [hidden, setHidden] = React.useState(false)

  const djsDate = normalizeDate(props.data.date)
  const daysDiff = Math.abs(djsDate.diff(today, 'day'))
  const relativeDate = djsDate.isBefore(today) ? djsDate.from(today) : today.to(djsDate)
  const dateInfo = `${formatDate(djsDate)} ${daysDiff > 25 ? `(${relativeDate})` : ''}`

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

  const handleDupe = e => {
    if (props.onRequestDuplicate) {
      props.onRequestDuplicate()
    }
  }

  const renderActions = () => {
    if (!props.interactive) {
      return null
    }
    return <DateCardActions id={props.data.id} onRequestEdit={handleEdit} onRequestDuplicate={handleDupe} onRequestDelete={handleDelete} />
  }

  const renderDaysDiff = () => {
    if (daysDiff === 0) {
      return <Days>Today</Days>
    }
    return (
      <React.Fragment>
        <Days>
          {daysDiff} {daysDiff > 1 ? 'days' : 'day'}
        </Days>
        <Typography variant="body1" component="span" color="textSecondary" className={classes.when}>
          {djsDate.isBefore(today) ? 'since' : 'until'}
        </Typography>
      </React.Fragment>
    )
  }

  const renderPrimaryText = () => {
    return (
      <span className={classes.primary}>
        {renderDaysDiff()}
        <Typography variant="body1" component="span" className={classes.label}>
          {props.data.label || dateInfo}
        </Typography>
      </span>
    )
  }

  const renderSecondaryText = () => {
    return props.data.label ? dateInfo : null
  }

  return (
    <React.Fragment>
      <Collapse in={!props.isBeingDeleted} onEnter={() => setHidden(false)} onExited={() => setHidden(true)}>
        <div style={{ display: hidden ? 'none' : 'block' }}>
          {props.dividerBefore ? <Divider component="div" /> : null}
          <ListItem component="div">
            <ListItemIcon>
              <Color code={cardColors.getColorValueByIndex(djsDate.isValid() ? props.data.color : 0)} />
            </ListItemIcon>
            <ListItemText
              primary={
                djsDate.isValid() ? (
                  renderPrimaryText()
                ) : (
                  <React.Fragment>
                    <Skeleton className={classes.skeleton} variant="text" width="15%" />
                    <Skeleton className={classes.skeleton} variant="text" width="10%" />
                    <Skeleton className={classes.skeleton} variant="text" width="40%" />
                  </React.Fragment>
                )
              }
              secondary={djsDate.isValid() ? renderSecondaryText() : !!props.data.label && <Skeleton variant="text" width="50%" />}
            />
            {renderActions()}
          </ListItem>
          {props.dividerAfter ? <Divider component="div" /> : null}
        </div>
      </Collapse>
    </React.Fragment>
  )
}

DateCard.defaultProps = {
  dividerBefore: true,
  dividerAfter: false,
  interactive: true,
}

export default DateCard
