export function bigInt(int = 0) {
  return int > 4
}

export function bigList(list = []) {
  return bigInt(list.length)
}
