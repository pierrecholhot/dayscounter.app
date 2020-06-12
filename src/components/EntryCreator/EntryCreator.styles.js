import { makeStyles } from '@material-ui/core/styles'
import { name } from './package.json'

const styles = theme => ({
  examplesTrigger: {
    marginTop: theme.spacing(1),
  },
})

export default makeStyles(styles, { name })
