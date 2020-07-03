import { makeStyles } from '@material-ui/core/styles'
import { name } from './package.json'

const styles = theme => ({
  li: {
    minHeight: 79,
  },
  primary: props => ({
    display: 'block',
    paddingRight: props.interactive ? theme.spacing(6) : null,
  }),
  when: {
    marginLeft: theme.spacing(1),
  },
  label: {
    marginLeft: theme.spacing(1),
    overflowWrap: 'break-word',
  },
  skeleton: {
    display: 'inline-block',
    margin: theme.spacing(0.5, 1, 0.5, 0),
  },
})

export default makeStyles(styles, { name })
