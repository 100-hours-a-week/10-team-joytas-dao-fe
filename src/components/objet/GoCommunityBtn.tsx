import { CommunityBtn } from './ObjetComponentStyles'

interface Props {
  text: string
  className: string
  people?: number
  onClick?: () => void
}

export default function GoCommunityBtn({
  text,
  className,
  people,
  onClick,
}: Props) {
  return (
    <CommunityBtn className={className} onClick={onClick}>
      {text}
      <span> ( {people || 0} / 9 )</span>
    </CommunityBtn>
  )
}
