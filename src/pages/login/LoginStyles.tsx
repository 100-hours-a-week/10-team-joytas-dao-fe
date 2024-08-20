import styled from 'styled-components'

export const Main = styled.div`
  width: 100%;
  height: 100%;
`

export const LoginImage1 = styled.img`
  width: 230px;
`

export const LoginImagDiv2 = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  margin-top: -20px;
  justify-content: flex-end;
`

export const LoginImagDiv = styled.div`
  width: 100%;
  height: fit-content;
`

export const Logo = styled.h2`
  font-size: 60px;
  display: flex;
  justify-content: center;
  margin-top: 40px;
  width: 100%;
  color: white;
  font-weight: 800;
`

export const LoginButton = styled.button`
  background-color: #fee500;
  border-radius: 5px;
  font-weight: 600;
  position: relative;
  top: -180px;
  border: 0px;
  left: 45px;
  z-index: 10;
  box-shadow:
    0px 4px 10px rgba(0, 0, 0, 0.25),
    0px 2px 5px rgba(0, 0, 0, 0.15);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow:
      0px 8px 15px rgba(0, 0, 0, 0.25),
      0px 4px 10px rgba(0, 0, 0, 0.15);
  }
`

export const Bottom = styled.div`
  width: 100%;
  height: 100%;
  padding: 16px;
  display: flex;
  justify-content: flex-start;
  text-decoration: none;
  gap: 6px;
`

export const Text = styled.div`
  text-decoration: underline lightgray;
  position: relative;
  cursor: pointer;
  top: -120px;
  font-size: 10px;
  width: fit-content;
  color: lightgray;
  padding: 5px 10px;
`
