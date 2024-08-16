import {
  InputBox,
  ItemInput,
  ItemLabel,
  ItemWrapper,
  RedText,
} from '../../pages/objet/ObjetStyles'

interface ItemProps {
  label: string
  className?: string
  longtext?: boolean
  img?: boolean
  input: JSX.Element
  helperText?: string
}

export function InputItem({
  label,
  className,
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
      <ItemInput>
        <InputBox className={className} longtext={longtext} img={img}>
          {input}
        </InputBox>
        <RedText>{helperText}</RedText>
      </ItemInput>
    </ItemWrapper>
  )
}
