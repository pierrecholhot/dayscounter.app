import { makeStyles } from '@material-ui/core/styles'
import { name } from './package.json'

const styles = theme => ({
  root: props => {
    const selectedColor = props.code === 'transparent' ? theme.palette.primary.main : props.code
    const selectedBoxShadow = `0 0 0 ${theme.spacing(0.25)}px ${theme.palette.background.paper}, 0 0 0 ${theme.spacing(0.5)}px ${selectedColor}`
    const focusBoxShadow = `0 0 0 ${theme.spacing(0.25)}px ${theme.palette.primary.main}`

    return {
      width: theme.spacing(3),
      height: theme.spacing(3),
      margin: theme.spacing(1.5),
      borderRadius: '50%',
      backgroundColor: props.code,
      opacity: 0.78,
      transitionProperty: 'box-shadow, background-color',
      transitionDuration: theme.transitions.duration.short,
      transitionTimingFunction: theme.transitions.easing.sharp,
      boxShadow: props.selected ? selectedBoxShadow : 'none',
      '&:focus': {
        boxShadow: props.selected ? selectedBoxShadow : focusBoxShadow,
      },
    }
  },
})

export default makeStyles(styles, { name })
