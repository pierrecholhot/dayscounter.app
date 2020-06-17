import { makeStyles } from '@material-ui/core/styles'
import { name } from './package.json'

const styles = theme => ({
  root: {
    transitionProperty: 'transform',
    transitionDuration: theme.transitions.duration.shortest,
    transitionEasing: theme.transitions.easing.sharp,
    userSelect: 'none',
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(2),
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
    [theme.breakpoints.down('sm')]: {
      alignItems: 'stretch',
    },
  },
  color: {
    [theme.breakpoints.down('sm')]: {
      '& > div': {
        height: '100%',
        width: theme.spacing(1),
        borderTopRightRadius: 0,
        borderTopLeftRadius: 4,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 4,
        margin: 0,
      },
    },
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
    wordBreak: 'break-word',
    [theme.breakpoints.down('sm')]: {
      borderRadius: 0,
      '& > :last-child': {
        display: 'block',
        fontSize: '1em',
      },
    },
    '& > *': {
      display: 'inline-block',
      '&:not(:last-child)': {
        marginRight: theme.spacing(1),
      },
    },
    [theme.breakpoints.up('md')]: {
      margin: theme.spacing(0, 2),
      '& > *:not(:last-child)': {
        marginRight: theme.spacing(2),
      },
    },
  },
  interactivePaper: {
    transitionProperty: 'background-color',
    transitionDuration: theme.transitions.duration.shortest,
    transitionEasing: theme.transitions.easing.sharp,
  },
  days: {
    color: theme.palette.primary.light,
    fontWeight: 'bold',
    whiteSpace: 'nowrap',
  },
  deleteBtn: {
    color: theme.palette.error.dark,
    [theme.breakpoints.down('sm')]: {
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.error.dark,
      height: '100%',
      borderColor: theme.palette.divider,
      borderWidth: 1,
      borderStyle: 'solid',
      borderTopRightRadius: 4,
      borderTopLeftRadius: 0,
      borderBottomRightRadius: 4,
      borderBottomLeftRadius: 0,
      borderLeftWidth: 0,
      '&:hover, &:focus, &:active': {
        color: theme.palette.error.main,
        backgroundColor: theme.palette.background.paper,
      },
    },
    [theme.breakpoints.up('md')]: {
      '@media (any-hover: hover)': {
        opacity: 0,
        transitionProperty: 'opacity',
        transitionDuration: theme.transitions.duration.longest,
        transitionEasing: theme.transitions.easing.sharp,
      },
    },
    '&:focus': {
      opacity: 1,
    },
  },
})

export default makeStyles(styles, { name })
