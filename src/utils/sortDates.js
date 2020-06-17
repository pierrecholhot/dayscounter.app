import normalizeDate from './normalizeDate'

export function sortDatesAsc(a, b) {
  return normalizeDate(a.date).isBefore(normalizeDate(b.date)) ? 1 : -1
}

export function sortDatesDsc(a, b) {
  return normalizeDate(a.date).isBefore(normalizeDate(b.date)) ? -1 : 1
}
