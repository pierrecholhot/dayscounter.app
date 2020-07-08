import { makeStyles } from '@material-ui/core/styles'
import { name } from './package.json'

const styles = theme => ({
  root: {
    ...theme.typography.body2,
    padding: 0,
    margin: 0,
    outline: '0 none',
    color: theme.palette.primary.main,
    background: 'none',
    border: 0,
    cursor: 'pointer',
    '&:hover': {
      textDecoration: 'underline',
    },
    '&:focus': {
      textDecoration: 'underline',
      [theme.customBreakpoints.onlyTouch]: {
        textDecoration: 'none',
      },
    },
  },
})

export default makeStyles(styles, { name })
