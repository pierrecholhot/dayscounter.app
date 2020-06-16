import { makeStyles } from '@material-ui/core/styles'
import { name } from './package.json'

const styles = theme => ({
  preview: {
    marginBottom: theme.spacing(2),
  },
  colors: {
    marginTop: theme.spacing(1),
  },
})

export default makeStyles(styles, { name })
