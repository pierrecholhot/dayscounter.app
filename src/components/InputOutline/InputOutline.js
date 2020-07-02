import React from 'react'
import ReactDOM from 'react-dom'

import FormHelperText from '@material-ui/core/FormHelperText'
import InputLabel from '@material-ui/core/InputLabel'
import NotchedOutline from '@material-ui/core/OutlinedInput/NotchedOutline'

import useStyles from './InputOutline.styles.js'

const InputOutline = ({ id, label, helperText, children }) => {
  const classes = useStyles()
  const [labelWidth, setLabelWidth] = React.useState(0)
  const labelRef = React.useRef(null)

  React.useEffect(() => {
    const labelNode = ReactDOM.findDOMNode(labelRef.current)
    setLabelWidth(labelNode != null ? labelNode.offsetWidth : 0)
  }, [label])

  return (
    <div className={classes.root}>
      <InputLabel ref={labelRef} htmlFor={id} variant="outlined" className={classes.inputLabel} shrink>
        {label}
      </InputLabel>
      <div className={classes.wrapper}>
        <div id={id} className={classes.content}>
          {children}
          <NotchedOutline notched labelWidth={labelWidth} className={classes.notch} />
        </div>
      </div>
      {!!helperText && <FormHelperText variant="outlined">{helperText}</FormHelperText>}
    </div>
  )
}
export default InputOutline
