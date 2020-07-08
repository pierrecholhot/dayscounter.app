import dayjs from 'dayjs'

function normalizeDate(date) {
  return dayjs(date).startOf('day')
}

export default normalizeDate
