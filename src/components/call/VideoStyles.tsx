import styled from 'styled-components'

interface ProfileImageProps {
  $isSpeaking?: boolean
}

export const Container = styled.div`
  position: relative;
  display: inline-block;
  width: 90px;
  height: 90px;

  @media (min-width: 500px) {
    width: 120px;
    height: 120px;
  }
`

export const ProfileImage = styled.img<ProfileImageProps>`
  border: ${(props) => (props.$isSpeaking ? '3px solid green' : '')};
  position: absolute;
  width: 90px;
  height: 90px;
  margin: 0 auto;
  border-radius: 100%;
  object-fit: cover;
  z-index: 10;
  background-color: white;
  @media (min-width: 500px) {
    width: 120px;
    height: 120px;
  }
`

export const AudioContainer = styled.audio`
  width: 90px;
  border-radius: 100%;
  height: 90px;
  background-color: black;
  position: absolute;

  @media (min-width: 500px) {
    width: 120px;
    height: 120px;
  }
`

export const UserLabel = styled.p`
  width: 100%;
  margin-top: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  @media (min-width: 500px) {
    margin-top: 140px;
    font-size: 14px;
  }
`

export const MyAudio = styled.audio`
  width: 90px;
  height: 90px;
  border-radius: 100%;
  background-color: black;

  @media (min-width: 500px) {
    width: 120px;
    height: 120px;
  }
`
