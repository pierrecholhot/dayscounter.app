import React from 'react'
import dayjs from 'dayjs'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import { KeyboardDatePicker } from '@material-ui/pickers'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles'

import backToTheFuture from '../../utils/backToTheFuture'
import normalizeDate from '../../utils/normalizeDate'
import today from '../../utils/today'
import suggestions from '../../constants/suggestions'
import cardColors from '../../constants/cardColors'
import ColorPicker from '../ColorPicker'
import MicroButton from '../MicroButton'
import DateCard from '../DateCard'
import useStyles from './EntryUpdater.styles.js'

function EntryUpdater(props) {
  const classes = useStyles()
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))

  const entryData = props.data || {}
  const isEditing = typeof props.data === 'object' && props.data !== null
  const randomColor = Math.floor(Math.random() * cardColors.length)

  const [newId] = React.useState(entryData.id || Date.now())
  const [newDate, setNewDate] = React.useState(entryData.date || today)
  const [newLabel, setNewLabel] = React.useState(entryData.label || '')
  const [newColor, setNewColor] = React.useState(entryData.id ? entryData.color : randomColor)

  const previewData = {
    date: dayjs(newDate).isValid() ? newDate : today,
    label: newLabel,
    color: newColor,
  }

  const handleDateChange = date => {
    setNewDate(date)
  }

  const handleLabelChange = e => {
    setNewLabel(e.target.value)
  }

  const handleColorChange = idx => {
    setNewColor(idx)
  }

  const handleSave = () => {
    if (!dayjs(newDate).isValid()) {
      return
    }
    props.onRequestSave({
      id: newId,
      date: normalizeDate(newDate),
      label: newLabel,
      color: newColor,
    })
  }

  const handleCancel = () => {
    props.onRequestSave(null)
  }

  const handleInputSuggestion = ({ date, label, color }) => {
    setNewDate(backToTheFuture(date))
    setNewLabel(label)
    setNewColor(color)
  }

  const renderSuggestions = () => {
    if (isEditing) {
      return null
    }
    return (
      <div>
        <Typography component="span" variant="caption" color="textSecondary">
          Suggestions:
        </Typography>{' '}
        {suggestions.map(event => (
          <MicroButton className={classes.suggestionButton} onClick={() => handleInputSuggestion(event)}>
            {event.label}
          </MicroButton>
        ))}
      </div>
    )
  }

  return (
    <Dialog fullScreen={fullScreen} disableBackdropClick open fullWidth maxWidth="sm" onClose={handleCancel} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">{isEditing ? 'Editing' : 'Creating'} counter</DialogTitle>
      <DialogContent>
        <div className={classes.preview}>
          <DateCard data={previewData} interactive={false} />
        </div>
        <KeyboardDatePicker required margin="dense" label="Date" onChange={handleDateChange} value={newDate} fullWidth format="DD/MM/YYYY" autoOk />
        {renderSuggestions()}
        <TextField margin="dense" label="Label" fullWidth value={newLabel} onChange={handleLabelChange} />
        <ColorPicker className={classes.colors} selected={newColor} onChange={handleColorChange} />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCancel} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSave} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default EntryUpdater
