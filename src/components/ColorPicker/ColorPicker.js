import React from 'react'
import cx from 'classnames'

import RadioGroup from '@material-ui/core/RadioGroup'

import Color from '../Color'

import useCardColors from '../../utils/useCardColors'

import useStyles from './ColorPicker.styles.js'

function ColorPicker({ onSelect, selected, hideSelected, className, ...props }) {
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
      {cardColors.colors.map(color => {
        const isSelected = cardColors.colors[selected] === color
        if (isSelected && hideSelected) {
          return null
        }
        return <Color interactive key={color} code={color} selected={isSelected} />
      })}
    </RadioGroup>
  )
}

export default ColorPicker
