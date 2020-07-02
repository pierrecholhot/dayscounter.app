import { makeStyles } from '@material-ui/core/styles'
import { name } from './package.json'

const styles = theme => ({
  root: props => {
    return {
      pointerEvents: props.interactive ? 'inherit' : 'none',

      '& svg': {
        transition: theme.transitions.create('color'),
      },
    }
  },
})

export default makeStyles(styles, { name })
