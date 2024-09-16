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
  longtext?: string
  img?: string
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
        <RedText
          style={{
            marginTop: '10px',
            height: '20px',
          }}
        >
          {helperText}
        </RedText>
      </ItemInput>
    </ItemWrapper>
  )
}
