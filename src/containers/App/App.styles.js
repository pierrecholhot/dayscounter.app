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
    [theme.breakpoints.up('md')]: {
      paddingLeft: theme.spacing(11),
    },
  },
})

export default makeStyles(styles, { name })
