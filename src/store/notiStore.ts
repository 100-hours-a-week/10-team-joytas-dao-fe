import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface Objet {
  notiNum: number
  setNotiNum: (num: number) => void
}

const useObjetStore = create(
  persist<Objet>(
    (set) => ({
      notiNum: 0,
      setNotiNum: (num: number) => set({ notiNum: num }),
    }),
    {
      name: 'noti-storage',
    }
  )
)

export default useObjetStore
