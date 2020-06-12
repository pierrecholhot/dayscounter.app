import { makeStyles } from '@material-ui/core/styles'
import { name } from './package.json'

const styles = theme => ({
  root: {
    marginBottom: theme.spacing(2),
  },
})

export default makeStyles(styles, { name })
