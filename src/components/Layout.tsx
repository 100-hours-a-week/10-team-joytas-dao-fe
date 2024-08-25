import Header from './Header'
import Footer from './Footer'
import { Main, ChildrenDiv } from './LayoutStyles'
import { useEffect } from 'react'
import { useUserInfo } from '../hooks/useInfo'

interface LayoutStyles {
  padding: string
}

export default function Layout({
  style,
  children,
}: {
  style?: LayoutStyles
  children: JSX.Element
}) {
  const { getProfile } = useUserInfo()

  useEffect(() => {
    getProfile()
  }, [])

  return (
    <Main>
      <Header />
      <ChildrenDiv style={style}>{children}</ChildrenDiv>
      <Footer />
    </Main>
  )
}
