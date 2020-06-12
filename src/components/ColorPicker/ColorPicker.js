import React from 'react'
import Typography from '@material-ui/core/Typography'

import cardColors from '../../constants/cardColors'
import Color from '../Color'
import useStyles from './ColorPicker.styles.js'

function ColorPicker(props) {
  const classes = useStyles()

  return (
    <React.Fragment>
      <Typography variant="caption" color="textSecondary">
        Color
      </Typography>
      <div className={classes.list}>
        {cardColors.map((cc, idx) => (
          <Color key={cc} interactive code={cc} onClick={() => props.onChange(idx)} selected={idx === props.selected} />
        ))}
      </div>
    </React.Fragment>
  )
}

export default ColorPicker
