import React from 'react'
import dayjs from 'dayjs'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'

import { sortDatesAsc } from '../../utils/sortDates'
import DateCard from '../DateCard'

const data = [
  { id: 1, date: 'Jun 1 2020', label: 'dayscounter.app launched', color: 2 },
  { id: 2, date: 'May 11 2020', label: 'quarantine ended', color: 3 },
  { id: 3, date: dayjs().subtract(2, 'week'), label: 'I went to the movies last time', color: 4 },
  { id: 4, date: dayjs().add(5, 'month'), label: 'my DOTA stream', color: 5 },
].sort(sortDatesAsc)

function ExamplesDialog(props) {
  return (
    <Dialog maxWidth="md" aria-labelledby="form-dialog-title" {...props}>
      <DialogTitle id="form-dialog-title">Examples</DialogTitle>
      <DialogContent>
        {data.map(dc => (
          <DateCard key={dc.id} data={dc} interactive={false} />
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
