import dayjs from 'dayjs'

export function sortDatesAsc(a, b) {
  return dayjs(a.date).startOf('day').isBefore(dayjs(b.date).startOf('day')) ? 1 : -1
}

export function sortDatesDsc(a, b) {
  return dayjs(a.date).startOf('day').isBefore(dayjs(b.date).startOf('day')) ? -1 : 1
}
