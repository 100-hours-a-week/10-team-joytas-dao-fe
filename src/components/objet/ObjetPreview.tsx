import { URL } from '../../static'
import {
  ObjetContainer,
  ObjetDescription,
  ObjetImage,
  ObjetTitle,
  ObjetContent,
  ObjetList,
} from './ObjetComponentStyles'
import { useNavigate } from 'react-router-dom'

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
  if (!objets || objets.length === 0) {
    return null
  }

  return (
    <ObjetList>
      {objets.map((objet, index) => {
        return (
          <Objet
            image={objet.objet_image}
            title={objet.name}
            description={objet.description}
            key={index}
            loungeId={objet.lounge_id}
            objetId={objet.objet_id}
          />
        )
      })}
    </ObjetList>
  )
}

function Objet({
  image,
  title,
  description,
  loungeId,
  objetId,
}: {
  image: string
  title: string
  description: string
  loungeId: number
  objetId: number
}) {
  const navigate = useNavigate()

  return (
    <ObjetContainer
      onClick={() => navigate(`${URL.lounge}/${loungeId}/objet/${objetId}`)}
    >
      <ObjetImage src={image} alt={title} />
      <ObjetContent>
        <ObjetTitle>{title}</ObjetTitle>
        <ObjetDescription>{description}</ObjetDescription>
      </ObjetContent>
    </ObjetContainer>
  )
}
