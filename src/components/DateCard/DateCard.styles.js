import { makeStyles } from '@material-ui/core/styles'
import { name } from './package.json'

const styles = theme => ({
  root: {
    transitionProperty: 'transform',
    transitionDuration: theme.transitions.duration.shortest,
    transitionEasing: theme.transitions.easing.sharp,
    userSelect: 'none',
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(4),
    },
    '@media (any-hover: hover)': {
      '&:hover': {
        '& $interactivePaper': {
          backgroundColor: 'rgba(192, 202, 51, 0.3)',
          borderColor: 'rgba(192, 202, 51, 0.3)',
        },
        '& $deleteBtn': {
          opacity: 1,
        },
      },
    },
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  button: props => ({
    width: '100%',
    textAlign: 'left',
    cursor: props.onRequestEdit ? 'pointer' : 'default',
    '&:hover, &:focus': {
      textDecoration: 'none',
    },
    '&:focus $interactivePaper': {
      backgroundColor: 'rgba(192, 202, 51, 0.5)',
      borderColor: 'rgba(192, 202, 51, 0.5)',
    },
    '&:focus + div $deleteBtn': {
      opacity: 1,
    },
  }),
  paper: {
    padding: theme.spacing(2, 3),
    margin: theme.spacing(0, 2),
    '& > *:not(:last-child)': {
      marginRight: theme.spacing(2),
    },
  },
  interactivePaper: props => ({
    transitionProperty: 'background-color',
    transitionDuration: theme.transitions.duration.shortest,
    transitionEasing: theme.transitions.easing.sharp,
  }),
  days: {
    color: theme.palette.primary.light,
    fontWeight: 'bold',
  },
  deleteBtn: {
    color: theme.palette.error.dark,
    [theme.breakpoints.up('md')]: {
      opacity: 0,
    },
    '&:focus': {
      opacity: 1,
    },
  },
})

export default makeStyles(styles, { name })
