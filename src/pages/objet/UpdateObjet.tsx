import { useEffect, useRef, useState } from 'react'
import Layout from '../../components/Layout.tsx'
import {
  GloablContainer16,
  GlobalSubTitle,
  GlobalTitle,
} from '../../global/globalStyles.tsx'
import {
  ChooseContainer,
  Container,
  GenerateButton,
  ImageOverlay,
  MiniObjetModel,
  ObjetImgPreview,
  TagWrapper,
  UpperContainer,
} from './ObjetStyles.tsx'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { InputItem } from '../../components/objet/InputItem.tsx'
import { Group } from 'three'
import { ObjetModel1 } from '../../assets/models/ObjetModel1.tsx'
import { Mentions, Tag } from 'antd'
import type { MentionsProps } from 'antd'
import { CloseCircleOutlined } from '@ant-design/icons'
import { random } from 'lodash'
import sampleImg from '../../assets/images/sampleObjet.png'

const MOCK_USERS = ['jamie', 'erica', 'jun', 'hong', 'jikky']

export default function UpdateObjet() {
  const [form, setForm] = useState({
    objetMember: [] as { nickname: string; id: number }[],
    objetName: '',
    objetDescription: '',
    objetImage: '',
  })
  const [isSelected, setIsSelected] = useState(true)
  const colors = [
    'magenta',
    'red',
    'volcano',
    'orange',
    'gold',
    'lime',
    'green',
    'cyan',
    'blue',
    'geekblue',
    'purple',
  ]

  const onSearch: MentionsProps['onSearch'] = (_, newPrefix) => {
    if (newPrefix) {
      return MOCK_USERS.filter((user) => user.includes(newPrefix))
    }
  }

  useEffect(() => {
    setForm({
      objetMember: [
        { nickname: 'jamie', id: 1 },
        { nickname: 'erica', id: 2 },
        { nickname: 'jun', id: 3 },
        { nickname: 'hong', id: 4 },
        { nickname: 'jikky', id: 5 },
      ],
      objetName: '굿나잇 지키 오브제',
      objetDescription:
        '지키 맛점잠 지키 맛점잠 지키 맛점잠 지키 맛점잠 지키 맛점잠 지키 맛점잠',
      objetImage: sampleImg,
    })
  }, [])

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
    <Layout>
      <GloablContainer16>
        <UpperContainer>
          <div>
            <GlobalTitle>어떤 오브제인가요?</GlobalTitle>
            <GlobalSubTitle>
              공유하고 싶은 추억을 오브제로 만들어보세요!
            </GlobalSubTitle>
          </div>
          <MiniObjetModel>
            {isSelected && (
              <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
                <OrbitControls enableZoom={false} enableRotate={false} />
                <ambientLight intensity={1} />
                <RenderObjet />
              </Canvas>
            )}
          </MiniObjetModel>
        </UpperContainer>

        <Container>
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
                  {form.objetMember.map(({ nickname, id }) => {
                    const randomColor = colors[random(0, colors.length - 1)]
                    return (
                      <Tag
                        key={id}
                        closeIcon={<CloseCircleOutlined />}
                        color={randomColor}
                      >
                        {nickname}
                      </Tag>
                    )
                  })}
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
            className='updateImg'
            img={true}
            input={
              <>
                <label htmlFor='objetImage'>
                  <ObjetImgPreview src={form.objetImage} alt='profile' />
                </label>
                <ImageOverlay onClick={handleUploadClick}>
                  <label htmlFor='profile-image'>변경</label>
                  <input
                    type='file'
                    accept='.jpeg, .jpg, .png, .gif, .webp'
                    id='objetImage'
                    onChange={(e) => {
                      const file = e.target.files?.[0]
                      if (file) {
                        setForm({
                          ...form,
                          objetImage: URL.createObjectURL(file),
                        })
                      }
                    }}
                  />
                </ImageOverlay>
              </>
            }
            helperText='최대 25MB까지 첨부 가능합니다.'
          />

          <ChooseContainer>
            <GenerateButton onClick={() => alert('수정이 완료되었습니다.')}>
              수정하기
            </GenerateButton>
          </ChooseContainer>
        </Container>
      </GloablContainer16>
    </Layout>
  )
}

function RenderObjet() {
  const ref = useRef<Group>(null)

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.01
    }
  })

  return (
    <group ref={ref} rotation-y={-Math.PI / 2}>
      <ObjetModel1 scale={[3, 3, 3]} />
    </group>
  )
}
