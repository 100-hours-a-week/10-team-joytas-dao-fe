import {
  ObjetContainer,
  ObjetDescription,
  ObjetImage,
  ObjetTitle,
  ObjetContent,
  ObjetList,
} from './ObjetComponentStyles'

interface ObjetProps {
  objet_id: number
  name: string
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
