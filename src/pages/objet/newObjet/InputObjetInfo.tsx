import { useState } from 'react'
import { InputItem } from '../../../components/objet/InputItem'
import {
  ChooseContainer,
  GenerateButton,
  ObjetImgPreview,
  TagWrapper,
  UploadButton,
} from '../ObjetStyles'
import { Tag, Mentions } from 'antd'
import { CloseCircleOutlined } from '@ant-design/icons'
import type { MentionsProps } from 'antd'

const MOCK_USERS = ['jamie', 'erica', 'jun', 'hong', 'jikky']

export default function InputObjetInfo() {
  const [form, setForm] = useState({
    objetMember: [],
    objetName: '',
    objetDescription: '',
    objetImage: '',
  })
  const onSearch: MentionsProps['onSearch'] = (_, newPrefix) => {
    if (newPrefix) {
      return MOCK_USERS.filter((user) => user.includes(newPrefix))
    }
  }

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
        className='member'
        input={
          <>
            <Mentions
              variant='borderless'
              onSearch={onSearch}
              options={(MOCK_USERS || []).map((value) => ({
                key: value,
                value,
                label: value,
              }))}
            />
            <TagWrapper>
              <Tag
                closeIcon={<CloseCircleOutlined />}
                color='white'
                style={{ color: 'black' }}
              >
                태그1
              </Tag>
              <Tag
                closeIcon={<CloseCircleOutlined />}
                color='white'
                style={{ color: 'black' }}
              >
                태그1
              </Tag>
              <Tag
                closeIcon={<CloseCircleOutlined />}
                color='white'
                style={{ color: 'black' }}
              >
                태그1
              </Tag>
              <Tag
                closeIcon={<CloseCircleOutlined />}
                color='white'
                style={{ color: 'black' }}
              >
                태그1
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
            <textarea
              value={form.objetDescription}
              placeholder='오브제 설명을 입력해주세요.'
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
            <label htmlFor='objetImage'>
              <UploadButton type='button' onClick={handleUploadClick}>
                이미지 업로드
              </UploadButton>
            </label>
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

      <ChooseContainer>
        <GenerateButton>생성하기</GenerateButton>
      </ChooseContainer>
    </>
  )
}
