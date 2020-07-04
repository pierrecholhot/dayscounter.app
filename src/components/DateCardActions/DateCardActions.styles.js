import { makeStyles } from '@material-ui/core/styles'
import { name } from './package.json'

const styles = theme => ({
  divider: {
    margin: theme.spacing(1, 0),
  },
  subheader: {
    lineHeight: 1,
    padding: theme.spacing(1, 2, 0.5),
  },
  colors: {
    maxWidth: 5 * 46,
    flexWrap: 'wrap',
  },
})

export default makeStyles(styles, { name })
