import { makeStyles } from '@material-ui/core/styles'
import { name } from './package.json'

const styles = theme => ({
  previewTitle: {
    marginTop: theme.spacing(4),
  },
})

export default makeStyles(styles, { name })
