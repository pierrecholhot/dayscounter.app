import cardColors from '../constants/cardColors'

export default function (index = 0) {
  return cardColors[index] || cardColors[0]
}
