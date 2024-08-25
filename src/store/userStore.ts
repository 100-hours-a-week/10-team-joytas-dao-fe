import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface User {
  userId: number
  profileImage: string
  nickname: string
  updateId: (id: number) => void
  updateProfileImage: (image: string) => void
  updateNickname: (nickname: string) => void
  logout: () => void
}

const useUserStore = create(
  persist<User>(
    (set) => ({
      userId: 0,
      profileImage: '',
      nickname: '익명',
      updateId: (id) => set({ userId: id }),
      updateProfileImage: (image) => set({ profileImage: image }),
      updateNickname: (nickname) => set({ nickname: nickname }),
      logout: () => set({ userId: 0, profileImage: '', nickname: '익명' }),
    }),
    {
      name: 'user-storage',
      getStorage: () => localStorage,
    }
  )
)

export default useUserStore
