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
  header: {
    margin: theme.spacing(3, 0, 7),
  },
  list: {
    flex: 1,
    margin: theme.spacing(0, 0, 4),
  },
  footer: {
    marginBottom: theme.spacing(2),
  },
  title: {
    position: 'relative',
    display: 'block',
    textAlign: 'left',
    paddingLeft: theme.spacing(11),
    padding: theme.spacing(2, 0),
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 0,
      textAlign: 'center',
    },
  },
})

export default makeStyles(styles, { name })
