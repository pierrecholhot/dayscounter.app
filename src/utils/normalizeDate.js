import dayjs from 'dayjs'

export default date => dayjs(date).startOf('day')
