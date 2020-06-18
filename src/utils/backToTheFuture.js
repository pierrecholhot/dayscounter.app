import today from './today'
import normalizeDate from './normalizeDate'

export default date => {
  let future = normalizeDate(date).set('year', today.year())
  if (future.isBefore(today)) {
    future = future.set('year', today.year() + 1)
  }
  return future
}
