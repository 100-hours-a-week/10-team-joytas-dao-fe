import { createContext, useContext } from 'react'

interface ObjetData {
  owner: {
    user_id: number
    nickname: string
  }
  name: string
  description: string
  objet_image: string
  created_at: string
  lounge_id: number
}

interface ObjetContextType {
  objetData: ObjetData
  callingPeople: number
}

export const ObjetContext = createContext<ObjetContextType | null>(null)
export const useObjetContext = () => useContext(ObjetContext)
