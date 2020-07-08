import dayjs from 'dayjs'

function formatDate(date) {
  return dayjs(date).format('MMMM Do, YYYY')
}

export default formatDate
