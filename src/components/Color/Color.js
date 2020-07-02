import React from 'react'
import cx from 'classnames'

import Radio from '@material-ui/core/Radio'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked'

import useStyles from './Color.styles.js'

function Color({ code, selected, interactive, size, className, ...props }) {
  const classes = useStyles({ code, selected, interactive })
  const iconStyle = { width: size, height: size, color: code }

  return (
    <Radio
      tabIndex={interactive ? null : -1}
      value={code}
      checked={selected}
      className={cx(classes.root, className)}
      icon={<FiberManualRecordIcon style={iconStyle} />}
      checkedIcon={<RadioButtonCheckedIcon style={iconStyle} />}
    />
  )
}

Color.defaultProps = {
  size: 28,
}

export default Color
