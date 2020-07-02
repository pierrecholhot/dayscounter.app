import { makeStyles } from '@material-ui/core/styles'
import { name } from './package.json'

const styles = theme => ({
  root: {
    maxWidth: 800,
    margin: theme.spacing(0, 'auto'),
    padding: theme.spacing(0, 2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(0, 4),
    },
  },
  header: {
    margin: theme.spacing(4, 0, 7),
    textAlign: 'center',
  },
  list: {
    marginBottom: theme.spacing(4),
  },
  footer: {
    margin: theme.spacing(4, 0),
    textAlign: 'center',
  },
})

export default makeStyles(styles, { name })
