import styled from 'styled-components'

export const Greetings = styled.div`
  color: white;
  padding: 20px 32px;
`

export const WelcomeMessage = styled.div`
  font-size: 18px;
  font-weight: bold;
`

export const Nickname = styled.div`
  font-size: 23px;
  padding: 5px 10px;
  width: fit-content;
  border-radius: 10px;
  background-color: rgba(117, 117, 117, 0.5);
  margin-top: 5px;
  font-weight: bold;
  color: rgba(255, 204, 0);
`

export const Banner = styled.div`
  background-color: grey;
  width: 100%;
  display: flex;
  object-fit: cover;
  align-items: center;
  justify-content: center;
  height: 200px;
`

export const BannerImage = styled.img`
  background-color: grey;
  width: 100%;
  height: 250px;
  display: flex;
  object-fit: cover;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1.9;
`

export const BannerVideo = styled.video`
  background-color: grey;
  width: 100%;
  height: 250px;

  display: flex;
  object-fit: cover;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1.9;
`

export const MyObjetContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const MyObjetTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px 32px;
  margin-top: 20px;
  font-size: 17px;
  font-weight: 500;

  img {
    width: 22px;
    height: 22px;
    margin-right: 10px;
  }

  @media (min-width: 600px) {
    font-size: 20px;
  }
`

export const LottieContainer = styled.div`
  margin-top: 70px;
`

export const PreparingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;

  span {
    color: gray;
  }
`
