import { makeStyles } from '@material-ui/core/styles'
import { name } from './package.json'

const styles = theme => ({
  suggestions: {
    textAlign: 'right',
    margin: theme.spacing(1, 0),
  },
  suggestionButton: {
    display: 'inline-block',
    '&:not(:last-child):after': {
      content: '","',
      marginRight: theme.spacing(0.5),
    },
  },
  colorsWrapper: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  picker: {
    width: '100%',
  },
  dialogPaper: {
    backgroundColor: theme.palette.background.default,
  },
})

export default makeStyles(styles, { name })
