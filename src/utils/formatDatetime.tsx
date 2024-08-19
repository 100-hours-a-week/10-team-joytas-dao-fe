export const formatDatetime = (datetime: string) => {
  const dateObj = new Date(datetime)
  const year = dateObj.getFullYear()
  const month = dateObj.getMonth() + 1
  const day = dateObj.getDate()

  const hours = dateObj.getHours()
  const minutes = dateObj.getMinutes()

  const isAfternoon = hours >= 12
  const formattedHours = hours % 12 || 12 // 0시는 12시로 표시
  const period = isAfternoon ? '오후' : '오전'

  // "12시 00분"인 경우 "12시"로만 표시
  const timeString =
    minutes === 0 ? `${formattedHours}시` : `${formattedHours}시 ${minutes}분`

  return `${year}년 ${month}월 ${day}일\n${period} ${timeString}`
}

export const extractTime = (datetime: string) => {
  const dateObj = new Date(datetime)
  const hours = dateObj.getHours()

  // 24시간제로 표시
  const timeString = `${hours}시`

  return timeString
}
