import React from 'react'

import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { DatePicker } from '@material-ui/pickers'
import { useTheme } from '@material-ui/core/styles'

import ColorPicker from '../ColorPicker'
import DateCard from '../DateCard'
import MicroButton from '../MicroButton'
import InputOutline from '../InputOutline'
import DateCardList from '../DateCardList'

import useCardColors from '../../utils/useCardColors'
import suggestions from '../../constants/suggestions'

import backToTheFuture from '../../utils/backToTheFuture'
import normalizeDate from '../../utils/normalizeDate'
import today from '../../utils/today'

import useStyles from './EntryUpdater.styles.js'

function EntryUpdater(props) {
  const classes = useStyles()
  const cardColors = useCardColors()
  const muiTheme = useTheme()
  const fullScreen = useMediaQuery(muiTheme.breakpoints.down('sm'))

  const entryData = props.data || {}
  const isEditing = typeof props.data === 'object' && props.data !== null
  const randomColor = cardColors.getRandomColor()

  const [newId] = React.useState(entryData.id || Date.now())
  const [newDate, setNewDate] = React.useState(entryData.date || today)
  const [newLabel, setNewLabel] = React.useState(entryData.label || '')
  const [newColor, setNewColor] = React.useState(entryData.id ? entryData.color : randomColor)

  const previewData = {
    date: newDate,
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
    if (!normalizeDate(newDate).isValid()) {
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
          <MicroButton key={event.color} className={classes.suggestionButton} onClick={() => handleInputSuggestion(event)}>
            {event.label}
          </MicroButton>
        ))}
      </div>
    )
  }

  return (
    <Dialog
      fullScreen={fullScreen}
      disableBackdropClick
      open
      fullWidth
      maxWidth="sm"
      onClose={handleCancel}
      aria-labelledby="form-dialog-title"
      PaperProps={{ className: classes.dialogPaper }}
    >
      <DialogTitle id="form-dialog-title">{isEditing ? 'Editing' : 'Creating a'} counter</DialogTitle>
      <DialogContent dividers className={classes.dialogContent}>
        <DateCardList single className={classes.preview}>
          <DateCard data={previewData} interactive={false} dividerAfter dividerBefore={false} />
        </DateCardList>
        {isEditing ? null : <div className={classes.suggestions}>{renderSuggestions()}</div>}
        <div className={classes.formContent}>
          <DatePicker
            showToolbar={false}
            className={classes.picker}
            label="Date"
            onChange={handleDateChange}
            value={newDate}
            fullWidth
            inputFormat="DD/MM/YYYY"
            autoOk
            minDate={new Date('1900-01-01')}
            maxDate={new Date('2100-12-31')}
            renderInput={props => (
              <TextField
                margin="normal"
                variant="outlined"
                required
                fullWidth
                {...props}
                helperText={!isEditing && 'dd/mm/yyyy'}
                error={!normalizeDate(newDate).isValid()}
                InputLabelProps={{ shrink: true }}
              />
            )}
          />
          <TextField
            margin="normal"
            label="Label"
            InputLabelProps={{ shrink: true }}
            fullWidth
            value={newLabel}
            onChange={handleLabelChange}
            variant="outlined"
            helperText={!isEditing && 'Optional but recommended'}
          />
          <div className={classes.colorsWrapper}>
            <InputOutline id="colors" label="Color" helperText={!isEditing && 'Pick a color to tag your counter'}>
              <ColorPicker className={classes.colors} selected={newColor} onSelect={handleColorChange} />
            </InputOutline>
          </div>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCancel} color="primary">
          Cancel
        </Button>
        <Button
          onClick={handleSave}
          disabled={!normalizeDate(newDate).isValid()}
          color="primary"
          variant={newLabel && newDate ? 'contained' : 'text'}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default EntryUpdater
