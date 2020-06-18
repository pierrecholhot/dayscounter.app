import React from 'react'

import Typography from '@material-ui/core/Typography'

import Color from '../Color'

import cardColors from '../../constants/cardColors'

import useStyles from './ColorPicker.styles.js'

function ColorPicker({ onChange, selected, ...props }) {
  const classes = useStyles()

  return (
    <div {...props}>
      <Typography variant="caption" color="textSecondary">
        Color
      </Typography>
      <div className={classes.list}>
        {cardColors.map((cc, idx) => (
          <Color key={cc} interactive code={cc} onClick={() => onChange(idx)} selected={idx === selected} />
        ))}
      </div>
    </div>
  )
}

export default ColorPicker
