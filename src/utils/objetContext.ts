import { createContext, useContext } from 'react'

interface ObjetData {
  creator: string
  creatorId: number
  name: string
  description: string
  objet_image: string
  createdAt: string
  callingPeople: number
  loungeId: number
}

export const ObjetContext = createContext<ObjetData | null>(null)
export const useObjetContext = () => useContext(ObjetContext)
