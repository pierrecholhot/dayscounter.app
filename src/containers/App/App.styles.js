import { makeStyles } from '@material-ui/core/styles'
import { name } from './package.json'

const styles = theme => ({
  root: {
    padding: theme.spacing(0, 2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(0, 4),
    },
  },
  header: {
    margin: theme.spacing(6, 0, 0),
    textAlign: 'center',
    [theme.breakpoints.up('xl')]: {
      textAlign: 'left',
    },
  },
  headers: {
    [theme.breakpoints.up('xl')]: {
      height: '100vh',
      position: 'sticky',
      top: 0,
    },
  },
  content: {
    maxWidth: 720,
    margin: theme.spacing(0, 'auto'),
    paddingTop: theme.spacing(6),
    [theme.breakpoints.up('xl')]: {
      padding: theme.spacing(10, 0),
    },
  },
  list: {
    margin: theme.spacing(0, 0, 4, 0),
  },
  footer: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    textAlign: 'center',
    [theme.breakpoints.up('xl')]: {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(0),
      textAlign: 'left',
    },
  },
})

export default makeStyles(styles, { name })
