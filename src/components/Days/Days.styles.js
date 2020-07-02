import { makeStyles } from '@material-ui/core/styles'
import { name } from './package.json'

const styles = theme => ({
  root: {
    fontWeight: 'bold',
    color: theme.palette.primary.light,
    whiteSpace: 'nowrap',
  },
})

export default makeStyles(styles, { name })
