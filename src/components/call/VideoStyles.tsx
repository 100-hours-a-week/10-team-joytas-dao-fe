import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: inline-block;
  width: 90px;
  height: 9px;

  @media (min-width: 500px) {
    width: 120px;
    height: 120px;
  }
`

export const VideoContainer = styled.video`
  width: 90px;
  height: 90px;
  border-radius: 100%;
  background-color: black;

  @media (min-width: 500px) {
    width: 120px;
    height: 120px;
  }
`

export const UserLabel = styled.p`
  width: 100%;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
`

export const MyVideo = styled.video`
  width: 90px;
  height: 90px;
  border-radius: 100%;
  background-color: black;

  @media (min-width: 500px) {
    width: 120px;
    height: 120px;
  }
`
