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
import { NoDataContainer, InnerText, GoObjetButton } from './LoungeStyles'
import NoDataLottie from '@components/lotties/NoDataLottie'
import { toast } from 'react-toastify'

export default function MobileLoungeObjets({
  objets,
  loungeId,
}: {
  objets: Objet[]
  loungeId: number
}) {
  const navigate = useNavigate()

  const handleClickGoObjet = () => {
    if (loungeId === 0) {
      toast.info('라운지를 선택 후 오브제를 생성해주세요 🙂')
      navigate(URL.lounge)
    } else {
      navigate(URL.newObjet)
    }
  }

  if (!objets || objets.length === 0) {
    return (
      <NoDataContainer style={{ marginTop: '50px' }}>
        <NoDataLottie />
        <InnerText>
          <span>오브제가 없습니다 🥲</span>
          <GoObjetButton onClick={handleClickGoObjet}>
            오브제 생성하러 가기
          </GoObjetButton>
        </InnerText>
      </NoDataContainer>
    )
  }

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
