import { makeStyles } from '@material-ui/core/styles'
import { name } from './package.json'

const styles = theme => ({
  title: {
    margin: theme.spacing(0, 0, 2),
    fontSize: '3rem',
    [theme.breakpoints.up('sm')]: {
      fontSize: '4rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: theme.typography.h1.fontSize,
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 60,
    },
    '& a': {
      display: 'inline-block',
      position: 'relative',
      '&::after': {
        content: '".app"',
        fontSize: '50%',
        color: theme.palette.secondary.light,
        position: 'absolute',
        right: 0,
        top: -14,
        [theme.breakpoints.up('md')]: {
          top: -20,
        },
        [theme.breakpoints.up('lg')]: {
          top: -14,
        },
      },
    },
    '& a:hover': { textDecoration: 'none' },
  },
  intro: {
    display: 'inline-block',
    fontSize: '1.6rem',
    margin: theme.spacing(0, 0, 4),
    maxWidth: 350,
    [theme.breakpoints.up('sm')]: {
      fontSize: '2rem',
      maxWidth: 420,
    },
    [theme.breakpoints.up('md')]: {
      fontSize: theme.typography.h4.fontSize,
      maxWidth: 450,
    },
  },
})

export default makeStyles(styles, { name })
