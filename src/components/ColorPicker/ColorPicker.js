import React from 'react'
import cx from 'classnames'

import RadioGroup from '@material-ui/core/RadioGroup'

import Color from '../Color'

import useCardColors from '../../utils/useCardColors'

import useStyles from './ColorPicker.styles.js'

function ColorPicker({ onSelect, selected, className, ...props }) {
  const classes = useStyles()
  const cardColors = useCardColors()

  const rootProps = {
    name: 'colors',
    className: cx(classes.list, className),
    onChange: e => {
      onSelect(cardColors.getColorIndexByValue(e.target.value))
    },
    ...props,
  }

  return (
    <RadioGroup {...rootProps}>
      {cardColors.colors.map(color => (
        <Color interactive key={color} code={color} selected={cardColors.colors[selected] === color} />
      ))}
    </RadioGroup>
  )
}

export default ColorPicker
