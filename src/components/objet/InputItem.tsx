import {
  InputBox,
  ItemLabel,
  ItemWrapper,
  RedText,
} from '../../pages/objet/ObjetStyles'

interface ItemProps {
  label: string
  longtext?: boolean
  img?: boolean
  input: JSX.Element
  helperText?: string
}

export function InputItem({
  label,
  longtext,
  img,
  input,
  helperText,
}: ItemProps) {
  return (
    <ItemWrapper>
      <ItemLabel>
        {label}
        <RedText>*</RedText>
      </ItemLabel>
      <InputBox longtext={longtext} img={img}>
        {input}
        <RedText>{helperText}</RedText>
      </InputBox>
    </ItemWrapper>
  )
}
