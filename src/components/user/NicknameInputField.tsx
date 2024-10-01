import { ChangeEvent, useEffect, useState } from 'react'
import {
  NicknameContainer,
  NicknameInput,
  NicknameTitle,
} from '@pages/user/ProfileStyles'
import { RedTextLong } from '@pages/lounge/LoungeStyles'
import { RedText } from '@pages/objet/ObjetStyles'

interface NicknameInputFieldProps {
  nickname: string
  nicknameError: string
  setNickname: (nickname: string) => void
  validateNickname: (nickname: string) => Promise<boolean>
}

export default function NicknameInputField({
  nickname,
  nicknameError,
  setNickname,
  validateNickname,
}: NicknameInputFieldProps) {
  const [debouncedNickname, setDebouncedNickname] = useState(nickname)

  useEffect(() => {
    const handler = setTimeout(() => {
      validateNickname(debouncedNickname)
    }, 200)

    return () => {
      clearTimeout(handler)
    }
  }, [debouncedNickname])

  const handleNicknameChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newNickname = event.target.value
    setNickname(newNickname)
    setDebouncedNickname(newNickname)
  }

  return (
    <NicknameContainer>
      <NicknameTitle>
        닉네임<RedText>*</RedText>
      </NicknameTitle>
      <NicknameInput
        placeholder='닉네임을 입력해주세요'
        minLength={2}
        maxLength={10}
        value={nickname}
        onChange={handleNicknameChange}
      />
      <RedTextLong style={{ marginLeft: '10px' }}>{nicknameError}</RedTextLong>
    </NicknameContainer>
  )
}
