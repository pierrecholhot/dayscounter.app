import { makeStyles } from '@material-ui/core/styles'
import { name } from './package.json'

const styles = theme => ({
  privacy: {
    [theme.breakpoints.up('lg')]: {
      display: 'inline-block',
      marginTop: theme.spacing(1.5),
      maxWidth: 300,
    },
  },
})

export default makeStyles(styles, { name })
