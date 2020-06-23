import { makeStyles } from '@material-ui/core/styles'
import { name } from './package.json'

const styles = theme => ({
  root: {
    position: 'relative',
    display: 'block',
    textAlign: 'center',
    padding: theme.spacing(2, 0),
    [theme.breakpoints.up('md')]: {
      textAlign: 'left',
    },
  },
})

export default makeStyles(styles, { name })
