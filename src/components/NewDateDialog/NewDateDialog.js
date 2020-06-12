import React from 'react'
import { DatePicker } from '@material-ui/pickers'

function NewDateDialog(props) {
  return <DatePicker TextFieldComponent={() => null} {...props} />
}

export default NewDateDialog
