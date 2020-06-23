import { makeStyles } from '@material-ui/core/styles'
import { name } from './package.json'

const styles = theme => ({
  title: {
    margin: theme.spacing(0, 'auto', 3),
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
    maxWidth: 450,
    margin: theme.spacing(0, 'auto', 6),
    [theme.breakpoints.up('md')]: {
      fontSize: theme.typography.h4.fontSize,
      maxWidth: 650,
    },
  },
})

export default makeStyles(styles, { name })
