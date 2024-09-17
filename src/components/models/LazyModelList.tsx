import { lazy, LazyExoticComponent } from 'react'

export const ObjetModelList: {
  O0001: LazyExoticComponent<(props: any) => JSX.Element>
  O0002: LazyExoticComponent<(props: any) => JSX.Element>
  O0003: LazyExoticComponent<(props: any) => JSX.Element>
} = {
  O0001: lazy(() => import('@assets/models/ObjetModel1')),
  O0002: lazy(() => import('@assets/models/ObjetModel2')),
  O0003: lazy(() => import('@assets/models/ObjetModel3')),
}

export const LoungeModelList: {
  L0001: LazyExoticComponent<(props: any) => JSX.Element>
  L0002: LazyExoticComponent<(props: any) => JSX.Element>
  L0003: LazyExoticComponent<(props: any) => JSX.Element>
  L0004: LazyExoticComponent<(props: any) => JSX.Element>
} = {
  L0001: lazy(() => import('@assets/models/LoungeModel1')),
  L0002: lazy(() => import('@assets/models/LoungeModel2')),
  L0003: lazy(() => import('@assets/models/LoungeModel3')),
  L0004: lazy(() => import('@assets/models/LoungeModel4')),
}
