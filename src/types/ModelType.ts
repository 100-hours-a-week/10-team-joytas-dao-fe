import * as THREE from 'three'

export interface RandomModelsProps {
  onModelClick: (model: THREE.Group) => void
  objets?: Objet[]
}

export interface ObjetsProps {
  objets?: Objet[]
}

export interface Objet {
  objet_id: number
  type: string
  name: string
  description: string
  objet_image: File
}
