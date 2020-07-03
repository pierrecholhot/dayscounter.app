import { makeStyles } from '@material-ui/core/styles'
import { name } from './package.json'

const styles = theme => ({
  root: {
    fontWeight: 'bold',
    color: theme.palette.primary.light,
    whiteSpace: 'nowrap',
    lineHeight: 1,
  },
})

export default makeStyles(styles, { name })
