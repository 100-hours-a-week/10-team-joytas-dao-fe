export const extractYearMonthDate = (datetime: string) => {
  const dateObj = new Date(datetime)
  const year = dateObj.getFullYear()
  const month = dateObj.getMonth() + 1
  const date = dateObj.getDate()

  return `${year}년 ${month}월 ${date}일`
}

export const extractHourMinute = (datetime: string) => {
  const dateObj = new Date(datetime)
  const hours = dateObj.getHours()
  const minutes = dateObj.getMinutes()

  const isAfternoon = hours >= 12
  const formattedHours = hours % 12 || 12 // 0시는 12시로 표시
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes
  const period = isAfternoon ? '오후' : '오전'

  return `${period} ${formattedHours}:${formattedMinutes}`
}

export const extractTime = (datetime: string) => {
  const dateObj = new Date(datetime)
  const hours = dateObj.getHours()

  // 24시간제로 표시
  const timeString = `${hours}시`

  return timeString
}

export const extractYearMonthDate2 = (datetime: string) => {
  const date = new Date(datetime)

  const year = (date.getFullYear() % 100).toString().padStart(2, '0')
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const day = date.getDate().toString().padStart(2, '0')

  return `${year}년 ${month}월 ${day}일`
}
