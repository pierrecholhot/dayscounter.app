import { makeStyles } from '@material-ui/core/styles'
import { name } from './package.json'

const styles = theme => ({
  root: {
    overflow: 'hidden',
  },
  list: {
    padding: 0,
  },
})

export default makeStyles(styles, { name })
