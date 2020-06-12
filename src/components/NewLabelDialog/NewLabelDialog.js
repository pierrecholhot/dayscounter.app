import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import DateCard from '../DateCard'
import useStyles from './NewLabelDialog.styles.js'

function NewLabelDialog(props) {
  const classes = useStyles()

  const { onSet, open, chosenDate } = props
  const [value, setValue] = React.useState(null)

  const handleValueChange = newValue => {
    onSet(newValue)
    setValue(null)
  }

  if (!open) {
    return null
  }

  return (
    <Dialog open maxWidth="md" onClose={() => handleValueChange(null)} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Would you like to add a label?</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Labels will help you organize numerous dates and their counters
          <br />
          Start typing below to create a preview of your counter
        </DialogContentText>
        <TextField
          maxLength="255"
          autoFocus
          margin="dense"
          label="Label"
          fullWidth
          onKeyUp={e => {
            if (e.keyCode === 13) {
              handleValueChange(e.target.value)
            }
          }}
          onChange={e => setValue(e.target.value)}
          placeholder="example: my birthday"
        />
        <Typography display="block" variant="overline" className={classes.previewTitle}>
          Days Counter Preview:
        </Typography>
        <DateCard interactive={false} hideColor data={{ date: chosenDate, label: value }} />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => handleValueChange(value)} color="primary">
          {value && value.length ? 'Save' : 'Skip'}
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default NewLabelDialog
