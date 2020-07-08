import normalizeDate from './normalizeDate'

export function sortDatesAsc(data = []) {
  const sortFn = (a, b) => (normalizeDate(a.date).isBefore(normalizeDate(b.date)) ? 1 : -1)
  return [...data].sort(sortFn)
}

export function sortDatesDsc(data = []) {
  const sortFn = (a, b) => (normalizeDate(a.date).isBefore(normalizeDate(b.date)) ? -1 : 1)
  return [...data].sort(sortFn)
}
