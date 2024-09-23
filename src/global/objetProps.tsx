export interface ObjetInfoFormProps {
  path?: string
  type: string
  objetInfo?: {
    lounge_id: number
    name: string
    description: string
    sharers: SharedMembersProps[]
    objet_image: string
  }
}

export interface SharedMembersProps {
  user_id: number
  nickname: string
  profile_url?: string
}
