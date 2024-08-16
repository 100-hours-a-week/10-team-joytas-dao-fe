import { useState } from 'react'
import { InputItem } from '../../../components/objet/InputItem'
import {
  ChooseContainer,
  GenerateButton,
  Icon,
  ObjetImgPreview,
  Tag,
  TagWrapper,
  UploadButton,
} from '../ObjetStyles'
import closeIcon from '../../../assets/images/close.png'

export default function InputObjetInfo() {
  const [form, setForm] = useState({
    objetMember: [],
    objetName: '',
    objetDescription: '',
    objetImage: '',
  })

  const handleInputChange = (field: string, value: string) => {
    setForm((prevForm) => ({ ...prevForm, [field]: value }))
  }

  const handleUploadClick = () => {
    const fileInput = document.getElementById('objetImage')
    if (fileInput) {
      fileInput.click()
    }
  }

  return (
    <>
      <InputItem
        label='오브제 멤버'
        input={
          <>
            <input
              onChange={(e) => handleInputChange('objetMember', e.target.value)}
            />
            <TagWrapper>
              <Tag>
                태그1 <Icon src={closeIcon} alt='close' />
              </Tag>
              <Tag>
                태그1 <Icon src={closeIcon} alt='close' />
              </Tag>
              <Tag>
                태그1 <Icon src={closeIcon} alt='close' />
              </Tag>
              <Tag>
                태그1 <Icon src={closeIcon} alt='close' />
              </Tag>
            </TagWrapper>
          </>
        }
      />
      <InputItem
        label='오브제 이름'
        input={
          <input
            type='text'
            value={form.objetName}
            placeholder='오브제 이름을 입력해주세요.'
            onChange={(e) => handleInputChange('objetName', e.target.value)}
          />
        }
        helperText='최소 2글자, 최대 10글자까지 작성 가능합니다.'
      />
      <InputItem
        label='오브제 설명'
        longtext={true}
        input={
          <>
            <input
              type='text'
              value={form.objetDescription}
              placeholder='오브제 설명을 입력해주세요. (최대 200글자)'
              onChange={(e) =>
                handleInputChange('objetDescription', e.target.value)
              }
            />
          </>
        }
        helperText='최대 200글자까지 작성 가능합니다.'
      />
      <InputItem
        label='오브제 이미지'
        img={true}
        input={
          <>
            <UploadButton type='button' onClick={handleUploadClick}>
              이미지 업로드
            </UploadButton>
            <input
              type='file'
              accept='.jpeg, .jpg, .png, .gif, .webp'
              id='objetImage'
              onChange={(e) => {
                const file = e.target.files?.[0]
                if (file) {
                  setForm({ ...form, objetImage: URL.createObjectURL(file) })
                }
              }}
            />
            {form.objetImage && (
              <ObjetImgPreview src={form.objetImage} alt='오브제 이미지' />
            )}
          </>
        }
        helperText='최대 25MB까지 첨부 가능합니다.'
      />

      <ChooseContainer style={{ marginTop: '95px' }}>
        <GenerateButton>생성하기</GenerateButton>
      </ChooseContainer>
    </>
  )
}
