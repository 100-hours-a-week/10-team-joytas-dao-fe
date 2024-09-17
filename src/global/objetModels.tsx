import { lazy } from 'react'

const ObjetModel1 = lazy(() => import('@assets/models/ObjetModel1'))
const ObjetModel2 = lazy(() => import('@assets/models/ObjetModel2'))
const ObjetModel3 = lazy(() => import('@assets/models/ObjetModel3'))

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
