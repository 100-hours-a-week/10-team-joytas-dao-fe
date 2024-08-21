import { APIs } from '../static'

export const checkNicknameDuplicate = async (
  nickname: string
): Promise<boolean> => {
  try {
    const response = await fetch(`${APIs.nickname}=${nickname}`, {
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      },
    })
    if (response.status === 200) return false
    else return true
  } catch (error) {
    console.error('Error: ', error)
    return true
  }
}
