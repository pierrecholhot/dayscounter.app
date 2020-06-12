import { makeStyles } from '@material-ui/core/styles'
import { name } from './package.json'

const styles = theme => ({
  title: {
    margin: theme.spacing(4, 'auto', 3),
    fontSize: '3rem',
    [theme.breakpoints.up('md')]: {
      fontSize: theme.typography.h1.fontSize,
    },
    '&::after': {
      content: '".app"',
      fontSize: 24,
      color: theme.palette.secondary.light,
    },
    '& a:hover': { textDecoration: 'none' },
  },
  intro: {
    fontSize: '1.5rem',
    margin: theme.spacing(0, 'auto'),
    [theme.breakpoints.down('sm')]: {
      maxWidth: 600,
    },
    [theme.breakpoints.up('md')]: {
      fontSize: theme.typography.h4.fontSize,
    },
  },
  colorTransition: {
    transitionProperty: 'color',
    transitionDuration: theme.transitions.duration.short,
    transitionEasing: theme.transitions.easing.sharp,
  },
})

export default makeStyles(styles, { name })
