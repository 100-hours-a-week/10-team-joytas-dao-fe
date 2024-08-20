import { ObjetModel1 } from '../assets/models/ObjetModel1'
import { ObjetModel2 } from '../assets/models/ObjetModel2'
import { ObjetModel3 } from '../assets/models/ObjetModel3'

interface ObjetModel {
  type: 'O0001' | 'O0002' | 'O0003'
  model: JSX.Element
}

export const objetList: ObjetModel[] = [
  {
    type: 'O0001',
    model: <ObjetModel1 scale={[3, 3, 3]} />,
  },
  {
    type: 'O0002',
    model: <ObjetModel2 scale={[0.5, 0.5, 0.5]} />,
  },
  {
    type: 'O0003',
    model: <ObjetModel3 scale={[0.045, 0.045, 0.045]} />,
  },
]
