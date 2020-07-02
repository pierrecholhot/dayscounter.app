import React from 'react'

import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import FileCopyIcon from '@material-ui/icons/FileCopy'
import MoreVertIcon from '@material-ui/icons/MoreVert'

function DateCardActions({ id, onRequestEdit, onRequestDuplicate, onRequestDelete }) {
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
        id={id}
        anchorEl={state.anchor}
        open={state.open}
        onClose={hideMenu}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleEdit}>
          <ListItemIcon>
            <EditIcon />
          </ListItemIcon>
          <ListItemText primary="Edit" />
        </MenuItem>
        <MenuItem onClick={handleDupe}>
          <ListItemIcon>
            <FileCopyIcon />
          </ListItemIcon>
          <ListItemText primary="Duplicate" />
        </MenuItem>
        <MenuItem onClick={handleDelete}>
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
