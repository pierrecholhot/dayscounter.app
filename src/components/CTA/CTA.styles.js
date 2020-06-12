import { makeStyles } from '@material-ui/core/styles'
import { name } from './package.json'

const styles = theme => ({
  root: {
    margin: theme.spacing(0, 'auto'),
    maxWidth: theme.spacing(40),
    width: '100%',
  },
})

export default makeStyles(styles, { name })
