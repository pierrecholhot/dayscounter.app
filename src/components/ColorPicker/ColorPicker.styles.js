import { makeStyles } from '@material-ui/core/styles'
import { name } from './package.json'

const styles = theme => ({
  list: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: theme.spacing(1),
    '& > *': {
      flexShrink: 0,
      cursor: 'pointer',
    },
    '& > :first-child:not(:focus)': {
      boxShadow: '0 0 3px rgba(0, 0, 0, 0.4)',
    },
  },
})

export default makeStyles(styles, { name })
