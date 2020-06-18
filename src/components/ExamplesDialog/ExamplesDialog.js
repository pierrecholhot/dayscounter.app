import React from 'react'

import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'

import examples from '../../constants/examples'

import backToTheFuture from '../../utils/backToTheFuture'
import { sortDatesDsc } from '../../utils/sortDates'

import DateCard from '../DateCard'

const data = examples.map(entry => ({ ...entry, date: backToTheFuture(entry.date) })).sort(sortDatesDsc)

function ExamplesDialog(props) {
  return (
    <Dialog maxWidth="md" aria-labelledby="form-dialog-title" {...props}>
      <DialogTitle id="form-dialog-title">Examples</DialogTitle>
      <DialogContent>
        {data.map(entry => (
          <DateCard key={entry.id} data={entry} interactive={false} />
        ))}
      </DialogContent>
      <DialogActions>
        <Button onClick={props.onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default ExamplesDialog
