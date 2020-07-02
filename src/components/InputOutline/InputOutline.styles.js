import { makeStyles } from '@material-ui/core/styles'
import { name } from './package.json'

const styles = theme => ({
  root: {
    position: 'relative',
    marginTop: theme.spacing(1),
  },
  wrapper: {
    position: 'relative',
  },
  content: {
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
  },
  inputLabel: {
    position: 'absolute',
    left: 0,
    top: 0,
    transform: `translate(0, ${theme.spacing(3)}px) scale(1)`,
  },
  notch: {
    borderColor: theme.palette.type === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)',
  },
})

export default makeStyles(styles, { name })
