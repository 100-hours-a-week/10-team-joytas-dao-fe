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
