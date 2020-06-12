import React from 'react'

import ExamplesDialog from '../ExamplesDialog'
import NewLabelDialog from '../NewLabelDialog'
import NewDateDialog from '../NewDateDialog'
import MicroButton from '../MicroButton'
import CTA from '../CTA'

import useStyles from './EntryCreator.styles.js'

function EntryCreator(props) {
  const classes = useStyles()

  const [date, setDate] = React.useState(null)
  const [isPickingDate, setIsPickingDate] = React.useState(false)
  const [isPickingLabel, setIsPickingLabel] = React.useState(false)
  const [isViewingExamples, setIsViewingExamples] = React.useState(false)

  const handleDateChange = date => {
    if (date) {
      setDate(date)
      setIsPickingLabel(true)
    }
  }

  const handleLabelChange = label => {
    setIsPickingLabel(false)
    props.onRequestCreate({ id: Date.now(), label, date: date, color: 0 })
    setDate(null)
  }

  return (
    <React.Fragment>
      <CTA onClick={() => setIsPickingDate(true)} />
      {!props.showExamples ? null : (
        <div className={classes.examplesTrigger}>
          <MicroButton onClick={() => setIsViewingExamples(true)}>see some examples</MicroButton>
          <ExamplesDialog open={isViewingExamples} onClose={() => setIsViewingExamples(false)} />
        </div>
      )}
      <NewDateDialog okLabel="Next" open={isPickingDate} value={date} onChange={handleDateChange} onClose={() => setIsPickingDate(false)} />
      <NewLabelDialog chosenDate={date} open={isPickingLabel} onSet={handleLabelChange} />
    </React.Fragment>
  )
}

export default EntryCreator
