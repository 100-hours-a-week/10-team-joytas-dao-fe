import Layout from '../../components/Layout'
import { GloablContainer16 } from '../../global/globalStyles'
import {
  Greetings,
  WelcomeMessage,
  Nickname,
  Banner,
  MyObjetContainer,
  MyObjetTitle,
  ObjetContainer,
  ObjetDescription,
  ObjetImage,
  ObjetTitle,
  ObjetContent,
  ObjetList,
} from './HomeStyles'

export default function Home() {
  const name = 'JunPark'
  return (
    <Layout>
      <GloablContainer16>
        <Greetings>
          <WelcomeMessage>안녕하세요 👋</WelcomeMessage>
          <Nickname>"{name}"님,</Nickname>
        </Greetings>
        <Banner>광고</Banner>
        <MyObjetContainer>
          <MyObjetTitle>👀 나에 대한 오브제가 만들어졌어요!</MyObjetTitle>
          <MyObjets />
        </MyObjetContainer>
      </GloablContainer16>
    </Layout>
  )
}

function MyObjets() {
  return (
    <ObjetList>
      <Objet
        image='https://picsum.photos/id/237/200/300'
        title='오브제 1'
        description='오브제 1의 설명'
      />
      <Objet
        image='https://picsum.photos/id/238/200/300'
        title='오브제 2'
        description='오브제 2의 설명'
      />
      <Objet
        image='https://picsum.photos/id/239/200/300'
        title='오브제 3'
        description='오브제 3의 설명'
      />
      <Objet
        image='https://picsum.photos/id/240/200/300'
        title='오브제 4'
        description='오브제 4의 설명'
      />
    </ObjetList>
  )
}

function Objet({
  image,
  title,
  description,
}: {
  image: string
  title: string
  description: string
}) {
  return (
    <ObjetContainer>
      <ObjetImage src={image} alt={title} />
      <ObjetContent>
        <ObjetTitle>{title}</ObjetTitle>
        <ObjetDescription>{description}</ObjetDescription>
      </ObjetContent>
    </ObjetContainer>
  )
}
