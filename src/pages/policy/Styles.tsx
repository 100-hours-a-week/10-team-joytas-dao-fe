import styled from 'styled-components'

export const Container = styled.div`
  padding: 20px 20px 0;
  margin: 0 auto;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  overflow-y: auto; /* 세로 스크롤이 필요할 경우를 대비하여 추가 */
  max-height: 784px; /* 페이지 높이에 맞게 최대 높이 설정 */
`

export const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: white;
  margin-bottom: 20px;
`

export const Content = styled.div`
  color: white;
  height: fit-content;
  font-size: 15px;
  line-height: 1.6;
`

export const Section = styled.div`
  margin-bottom: 20px;
`

export const SubTitle = styled.h2`
  font-size: 12px;
  font-weight: bold;
  color: #e8e8e8;
  margin-bottom: 10px;
`

export const Text = styled.p`
  margin: 0;
  padding: 0;
  font-size: 12px;
  color: #e0e0e0;
  margin-bottom: 10px;
  text-align: justify;
`

export const HeaderDiv = styled.div`
  margin-top: 30px;
  padding: 0 16px;
  width: 100%;
  display: flex;
  align-items: center;
  box-sizing: border-box;
`

export const BackImg = styled.img`
  width: 20px;
`

export const List = styled.ul`
  margin: 10px 0;
  padding-left: 20px;
`

export const ListItem = styled.li`
  margin-bottom: 8px;
  color: #e0e0e0;
  font-size: 11px;
  list-style-type: disc;
`
