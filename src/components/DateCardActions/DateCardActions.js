import React from 'react'

import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ListSubheader from '@material-ui/core/ListSubheader'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Divider from '@material-ui/core/Divider'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import FileCopyIcon from '@material-ui/icons/FileCopy'
import MoreVertIcon from '@material-ui/icons/MoreVert'

import ColorPicker from '../ColorPicker'
import useStyles from './DateCardActions.styles'

function DateCardActions({ id, selectedColor, onRequestEdit, onRequestColorChange, onRequestDuplicate, onRequestDelete }) {
  const classes = useStyles()
  const [state, setState] = React.useState({
    open: false,
    anchor: null,
  })

  const hideMenu = () => {
    setState({ open: false, anchor: null })
  }

  const handleDelete = e => {
    hideMenu()
    if (onRequestDelete) {
      onRequestDelete()
    }
  }

  const handleEdit = e => {
    hideMenu()
    if (onRequestEdit) {
      onRequestEdit()
    }
  }

  const handleColorChange = idx => {
    hideMenu()
    if (onRequestColorChange) {
      onRequestColorChange(idx)
    }
  }

  const handleDupe = e => {
    hideMenu()
    if (onRequestDuplicate) {
      onRequestDuplicate()
    }
  }

  return (
    <ListItemSecondaryAction>
      <IconButton
        aria-controls={id}
        aria-haspopup="true"
        onClick={e => {
          setState({ open: true, anchor: e.currentTarget })
        }}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        overrides={{ List: { root: { props: { component: 'div' } } } }}
        className={classes.menu}
        id={id}
        anchorEl={state.anchor}
        open={state.open}
        onClose={hideMenu}
        transformOrigin={{ vertical: 'top' }}
      >
        <MenuItem component="div" onClick={handleEdit}>
          <ListItemIcon>
            <EditIcon />
          </ListItemIcon>
          <ListItemText primary="Edit" />
        </MenuItem>
        <Divider className={classes.divider} />
        <ListSubheader component="div" className={classes.subheader}>
          Pick a new color
        </ListSubheader>
        <MenuItem component="div" button={false}>
          <ColorPicker className={classes.colors} selected={selectedColor} onSelect={handleColorChange} hideSelected />
        </MenuItem>
        <Divider className={classes.divider} />
        <MenuItem component="div" onClick={handleDupe}>
          <ListItemIcon>
            <FileCopyIcon />
          </ListItemIcon>
          <ListItemText primary="Duplicate" />
        </MenuItem>
        <MenuItem component="div" onClick={handleDelete}>
          <ListItemIcon>
            <DeleteIcon />
          </ListItemIcon>
          <ListItemText primary="Delete Counter" />
        </MenuItem>
      </Menu>
    </ListItemSecondaryAction>
  )
}

export default DateCardActions
