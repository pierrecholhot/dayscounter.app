import normalizeDate from './normalizeDate'

export function sortDatesAsc(data = []) {
  return [...data].sort((a, b) => {
    return normalizeDate(a.date).isBefore(normalizeDate(b.date)) ? 1 : -1
  })
}

export function sortDatesDsc(data = []) {
  return [...data].sort((a, b) => {
    return normalizeDate(a.date).isBefore(normalizeDate(b.date)) ? -1 : 1
  })
}
