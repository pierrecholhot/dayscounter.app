import { makeStyles } from '@material-ui/core/styles'
import { name } from './package.json'

const styles = theme => ({
  root: {
    height: '100vh',
    width: '100%',
    maxWidth: '960px',
    margin: theme.spacing(0, 'auto'),
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(0, 2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(0, 4),
    },
  },
  create: {
    margin: theme.spacing(6, 0, 7),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  examples: {
    margin: theme.spacing(1, 0, 0, 0),
  },
  list: {
    flex: 1,
    margin: theme.spacing(0, 0, 4, 0),
  },
  title: {
    position: 'relative',
    display: 'block',
    textAlign: 'left',
    paddingLeft: theme.spacing(11),
    padding: theme.spacing(2, 0),
  },
})

export default makeStyles(styles, { name })
