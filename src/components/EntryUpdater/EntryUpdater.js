import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import TextField from '@material-ui/core/TextField'
import { DatePicker } from '@material-ui/pickers'

import ColorPicker from '../ColorPicker'
import DateCard from '../DateCard'
import useStyles from './EntryUpdater.styles.js'

function EntryUpdater({ cardData, onRequestUpdate }) {
  const classes = useStyles()

  const [newDate, setNewDate] = React.useState(cardData.date)
  const [newLabel, setNewLabel] = React.useState(cardData.label)
  const [newColor, setNewColor] = React.useState(cardData.color)

  const handleLabelChange = e => {
    setNewLabel(e.target.value)
  }

  const handleSave = () => {
    onRequestUpdate({
      id: cardData.id,
      date: newDate,
      label: newLabel,
      color: newColor,
    })
  }

  const handleCancel = () => {
    onRequestUpdate(null)
  }

  return (
    <Dialog open maxWidth="md" onClose={handleCancel} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Editing counter</DialogTitle>
      <DialogContent>
        <div className={classes.preview}>
          <DateCard data={{ date: newDate, label: newLabel, color: newColor }} interactive={false} />
        </div>
        <DatePicker
          margin="dense"
          gutterBottom
          label="Date"
          variant="inline"
          onChange={setNewDate}
          value={newDate}
          fullWidth
          format="MMMM Do, YYYY"
          autoOk
        />
        <TextField margin="dense" label="Label" fullWidth value={newLabel} onChange={handleLabelChange} />
        <div className={classes.colors}>
          <ColorPicker selected={newColor} onChange={idx => setNewColor(idx)} />
        </div>
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
