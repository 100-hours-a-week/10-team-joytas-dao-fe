import create from 'zustand'

interface User {
  userId: number
  profileImage: string
  nickname: string
  updateId: (id: number) => void
  updateProfileImage: (image: string) => void
  updateNickname: (nickname: string) => void
  logout: () => void
}

const useUserStore = create<User>((set) => ({
  userId: 0,
  profileImage: '',
  nickname: '익명',
  updateId: (id) => set({ userId: id }),
  updateProfileImage: (image) => set({ profileImage: image }),
  updateNickname: (nickname) => set({ nickname: nickname }),
  logout: () => set({ userId: 0, profileImage: '', nickname: '' }),
}))

export default useUserStore
