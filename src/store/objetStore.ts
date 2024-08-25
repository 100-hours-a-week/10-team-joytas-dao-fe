import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface Objet {
  chatToken: string
  objetName: string
  objetCreatorNickname: string
  objetCreatorId: number
  setChatToken: (chattingToken: string) => void
  setObjetName: (name: string) => void
  setObjetCreatorNickname: (creator: string) => void
  setObjetCreatorId: (id: number) => void
}

const useObjetStore = create(
  persist<Objet>(
    (set) => ({
      chatToken: '',
      objetName: '',
      objetCreatorNickname: '',
      objetCreatorId: 0,
      setChatToken: (chattingToken: string) =>
        set({ chatToken: chattingToken }),
      setObjetName: (name: string) => set({ objetName: name }),
      setObjetCreatorNickname: (creator: string) =>
        set({ objetCreatorNickname: creator }),
      setObjetCreatorId: (id: number) => set({ objetCreatorId: id }),
    }),
    {
      name: 'chatting-storage',
    }
  )
)

export default useObjetStore
