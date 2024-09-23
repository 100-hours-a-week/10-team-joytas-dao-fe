import { createContext, useContext } from 'react'

interface ObjetData {
  creator: string
  creatorId: number
  name: string
  description: string
  imageUrl: string
  createdAt: string
  callingPeople: number
  loungeId: number
}

export const ObjetContext = createContext<ObjetData | null>(null)
export const useObjetContext = () => useContext(ObjetContext)
