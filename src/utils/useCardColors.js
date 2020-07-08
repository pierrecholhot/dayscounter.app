import { useTheme } from '@material-ui/core/styles'

import purple from '@material-ui/core/colors/purple'
import deepOrange from '@material-ui/core/colors/deepOrange'
import amber from '@material-ui/core/colors/amber'
import blue from '@material-ui/core/colors/blue'
import red from '@material-ui/core/colors/red'
import yellow from '@material-ui/core/colors/yellow'
import pink from '@material-ui/core/colors/pink'
import teal from '@material-ui/core/colors/teal'
import indigo from '@material-ui/core/colors/indigo'
import green from '@material-ui/core/colors/green'

function useCardColors() {
  const colors = []
  const theme = useTheme()
  const shade = theme.palette.type === 'dark' ? '400' : '300'

  colors[0] = theme.palette.divider
  colors[1] = purple[shade]
  colors[2] = amber[shade]
  colors[3] = deepOrange[shade]
  colors[4] = blue[shade]
  colors[5] = red[shade]
  colors[6] = yellow[shade]
  colors[7] = pink[shade]
  colors[8] = teal[shade]
  colors[9] = indigo[shade]
  colors[10] = green[shade]

  return {
    colors,
    getColorValueByIndex: (index = 0) => {
      return colors[index] || colors[0]
    },
    getColorIndexByValue: value => {
      return colors.findIndex(color => value === color) || 0
    },
    getRandomColor: () => {
      return Math.floor(Math.random() * colors.length)
    },
  }
}

export default useCardColors
