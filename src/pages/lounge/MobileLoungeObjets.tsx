import type { Objet } from '@/types/ModelType'
import {
  Line,
  CardContainer,
  User,
  ObjetContainer,
  CardList,
  TopContainer,
} from './MiniObjetCardStyles'
import { useNavigate } from 'react-router-dom'
import { URL } from '@/static'
import { extractYearMonthDate2 } from '@/utils/formatDatetime'

export default function MobileLoungeObjets({
  objets,
}: {
  objets: Objet[]
  loungeId: number
}) {
  const navigate = useNavigate()

  return (
    <CardList>
      {objets?.map((objet, index) => {
        return (
          <CardContainer
            key={objet.objet_id}
            onClick={() => navigate(`${URL.objet}/${objet.objet_id}`)}
          >
            <TopContainer>
              <User>
                <img src={objet.owner?.profile_image} />
                <div>{objet.owner?.nickname}</div>
              </User>
              <div>
                {objet.created_at && extractYearMonthDate2(objet.created_at)}
              </div>
            </TopContainer>
            <ObjetContainer>
              <img src={objet.objet_image} />
              <div>{objet.name}</div>
            </ObjetContainer>
            {index !== objets.length - 1 && <Line />}
          </CardContainer>
        )
      })}
    </CardList>
  )
}
