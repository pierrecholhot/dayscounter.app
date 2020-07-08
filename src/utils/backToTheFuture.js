import today from './today'
import normalizeDate from './normalizeDate'

function backToTheFuture(date) {
  const future = normalizeDate(date).set('year', today.year())
  return future.isBefore(today) ? future.set('year', today.year() + 1) : future
}

export default backToTheFuture
