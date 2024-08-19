export const fetchAPI = async (url: string, method: string) => {
  try {
    const response = await fetch(url, { method })
    const responseData = await response.json()
    return responseData
  } catch (error) {
    console.log(error)
    return null
  }
}
