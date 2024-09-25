import * as THREE from 'three'

export interface RandomModelsProps {
  onModelClick: (model: THREE.Group) => void
  objets?: Objet[]
}

export interface ObjetsProps {
  objets?: Objet[]
  loungeId: number
}

export interface Objet {
  objet_id: number
  lounge_id?: number
  objet_type: 'O0001' | 'O0002' | 'O0003'
  name: string
  description: string
  created_at?: string
  objet_image: string
  owner?: {
    nickname: string
    profile_image: string
  }
}
