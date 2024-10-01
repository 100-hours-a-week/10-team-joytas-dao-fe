import { URL } from '@/static'
import {
  ObjetContainer,
  ObjetDescription,
  ObjetImage,
  ObjetTitle,
  ObjetContent,
  ObjetList,
  ObjetPreviewContainer,
  MoveIcon,
  IconContainer,
} from './ObjetComponentStyles'
import { useNavigate } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import leftCircle from '../../assets/images/leftCircle.webp'
import rightCircle from '../../assets/images/rightCircle.webp'
import { useMediaQuery } from '@uidotdev/usehooks'

interface ObjetProps {
  objet_id: number
  name: string
  lounge_id: number
  objet_image: string
  description: string
}

interface ObjetPreviewProps {
  objets: ObjetProps[] | undefined
}

export default function ObjetPreview({
  objets,
}: ObjetPreviewProps): JSX.Element | null {
  const listRef = useRef<HTMLDivElement>(null)
  const [scrollState, setScrollState] = useState<'left' | 'right'>('right')
  const isMobile = useMediaQuery('only screen and (max-width : 425px)')

  const handleScroll = () => {
    const { current } = listRef
    if (current) {
      if (
        current.scrollLeft <=
        (current.scrollWidth - current.clientWidth) / 2
      ) {
        setScrollState('right')
      } else {
        setScrollState('left')
      }
    }
  }

  useEffect(() => {
    const handleScrollEvent = () => handleScroll()
    const { current } = listRef

    if (current) {
      current.addEventListener('scroll', handleScrollEvent)
    }
    return () => {
      if (current) {
        current.removeEventListener('scroll', handleScrollEvent)
      }
    }
  }, [])

  const handleClickRight = () => {
    listRef.current?.scrollBy({ left: 300, behavior: 'smooth' })
  }

  const handleClickLeft = () => {
    listRef.current?.scrollBy({ left: -300, behavior: 'smooth' })
  }

  if (!objets || objets.length === 0) {
    return null
  }

  return (
    <ObjetPreviewContainer>
      <ObjetList ref={listRef}>
        {objets.map((objet, index) => {
          return (
            <Objet
              image={objet.objet_image}
              title={objet.name}
              description={objet.description}
              key={index}
              objetId={objet.objet_id}
              id={index === 0 ? 'first' : undefined}
            />
          )
        })}
      </ObjetList>

      {objets.length > 3 && !isMobile && (
        <>
          {scrollState === 'right' && (
            <IconContainer className='right'>
              <MoveIcon src={rightCircle} onClick={handleClickRight} />
            </IconContainer>
          )}
          {scrollState === 'left' && (
            <IconContainer className='left'>
              <MoveIcon src={leftCircle} onClick={handleClickLeft} />
            </IconContainer>
          )}
        </>
      )}
    </ObjetPreviewContainer>
  )
}

function Objet({
  image,
  title,
  description,
  objetId,
  id,
}: {
  image: string
  title: string
  description: string
  objetId: number
  id?: string
}) {
  const navigate = useNavigate()

  return (
    <ObjetContainer id={id} onClick={() => navigate(`${URL.objet}/${objetId}`)}>
      <ObjetImage src={image} alt={title} />
      <ObjetContent>
        <ObjetTitle>{title}</ObjetTitle>
        <ObjetDescription>
          {description.length > 50
            ? description.slice(0, 50) + '...'
            : description}
        </ObjetDescription>
      </ObjetContent>
    </ObjetContainer>
  )
}
