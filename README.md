# 🪐 DAO - 추억을 행성으로 저장하다

![image](https://github.com/user-attachments/assets/25cc1279-18bd-4714-93bc-738e5109452e)

<div align=center> 
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> 
<img src="https://img.shields.io/badge/spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white"> 
<img src="https://img.shields.io/badge/amazonaws-232F3E?style=for-the-badge&logo=amazonaws&logoColor=white">
</div>

## 🔖 프로젝트 소개

### 개요

- DAO는 추억을 3D 모델을 통해 사람들과 공유하는 커뮤니티입니다.
- 라운지를 만들어 사람들을 초대하고, 그 안에서 추억을 공유할 수 있습니다.
- [DAO 바로가기](https://joytas.io)
- [Disquiet 바로가기](https://disquiet.io/product/dao)

### 개발 인원 및 기간

- 개발기간 : 2024-07-23 ~, 현재 고도화 단계
- 개발 인원
  <table style="text-align: center;">
    <tr>
      <th colspan="3">Back-End</th>
      <th colspan="2">Front-End</th>
    </tr>
    <tr>
      <td>박준서</td>
      <td>김지홍</td>
      <td>김윤직</td>
      <td>노현아</td>
      <td>박재영</td>
    </tr>
    <tr>
      <td><a href="https://github.com/junseoparkk"><img src="https://avatars.githubusercontent.com/u/98972385?v=4"/></a></td>
      <td><a href="https://github.com/JiHongKim98"><img src="https://avatars.githubusercontent.com/u/144337839?v=4" /></a></td>
      <td><a href="https://github.com/jjikky"><img src="https://avatars.githubusercontent.com/u/59151187?v=4"/></a></td>
      <td><a href="https://github.com/erica0321"><img src="https://avatars.githubusercontent.com/u/81230764?v=4" /></a></td>
      <td><a href="https://github.com/yoouung"><img src="https://avatars.githubusercontent.com/u/78146904?v=4" /></a></td>
    </tr>
  </table>

### 사용 기술 및 tools
- React, Typescript, Styled-Components, React-Query, Zustand, WebRTC, Stomp, Three.js
<br/>

## 🖥️ 서비스 화면

`홈`

| 로그인 | 메인 | 메뉴 | 프로필 |
|---|---|---|---|
|![image](https://github.com/user-attachments/assets/a6469df4-812f-4ede-aab8-4672e852e23b)|![image](https://github.com/user-attachments/assets/8cfbe325-aa6a-42bd-a619-d66bd4f954e1)|![image](https://github.com/user-attachments/assets/64328a80-f1b4-4edd-a5ad-48d752bf0326)|![image](https://github.com/user-attachments/assets/21b3a96d-9fd6-41f8-9b2f-c5ccc9d9b14d)|

`라운지`

| 라운지 목록 | 라운지 생성 | 라운지 상세 |
|---|---|---|
|![image](https://github.com/user-attachments/assets/83cd5f12-1aa8-4237-a7b8-6439f380e39c)|![image](https://github.com/user-attachments/assets/866770d8-65f0-484c-a11c-b6b269304921)|![image](https://github.com/user-attachments/assets/49a5d5f9-997a-4328-9d7a-d0193fc7345f)|![image](https://github.com/user-attachments/assets/81bf6a2d-1b06-42f1-9df2-3ddd761954c0)|

`오브제`

|오브제 상세|오브제 생성|오브제 수정|오브제 통화|오브제 채팅|
|---|---|---|---|---|
|![image](https://github.com/user-attachments/assets/d500cc15-7c5a-4a06-8eb8-8542bed8a6be)|![image](https://github.com/user-attachments/assets/592a8f68-105d-4bf4-9727-272b40b0406c)|![image](https://github.com/user-attachments/assets/ac1d0c0d-2dc2-4620-bb08-68c8923e73a6)|![image](https://github.com/user-attachments/assets/caac4ba1-2e51-4e5b-8dd6-0e220271a680)|![image](https://github.com/user-attachments/assets/fd18f2f3-4cb0-464b-985d-9539f4f02b08)| 

`기타 기능`

|알림|유저 검색|회원탈퇴|
|---|---|---|
|![image](https://github.com/user-attachments/assets/15d83004-4e8c-4dd3-a35b-63f24b984cdc)|![image](https://github.com/user-attachments/assets/5ba44c6e-9dae-48e6-b52b-34159bb1a3dd)|![image](https://github.com/user-attachments/assets/16649813-ec19-4797-8791-6d0514bfb63d)|

<br />

## 🚧 트러블 슈팅
🧷 [웹 메모리 사용량 증가 이슈](https://flash-inch-968.notion.site/34f3c50a41684ef8adeab0a6d1637839?pvs=4)

<br/>

## 💬 프로젝트 후기

👥 노현아

<div>프로젝트에서 가장 큰 어려움은 3D 모델과 실시간 통화 기능을 구현하는 과정에서 웹 브라우저의 메모리 사용량이 급격히 증가한 문제였습니다. 특히 Three.js를 사용해 복잡한 3D 모델을 렌더링하는 과정에서 메모리 사용량이 최대 6.1GB에 도달했고, 그로 인해 웹 페이지가 버벅거리며 사용자 경험이 크게 저하되는 상황을 겪었습니다. 이러한 문제는 프로젝트의 성능과 사용자 만족도에 직접적인 영향을 미치는 큰 도전이었습니다. <br/> 문제 해결을 위해 3D 모델의 최적화와 효율적인 자원 관리를 중점적으로 고민했습니다. 먼저, <strong>lazy loading</strong>을 도입하여 3D 모델을 한 번에 로드하는 대신 필요할 때만 불러오도록 개선했고, 로딩 중에는 다른 UI를 먼저 보여줘 사용자가 기다리는 시간을 최소화했습니다. 또한, 상태가 자주 변하지 않는 컴포넌트에 <strong>useMemo</strong> 훅을 적용해 불필요한 렌더링을 방지했습니다. 이러한 최적화 작업을 통해 메모리 사용량을 500MB 내외로 줄이고, 웹 페이지의 성능을 크게 향상시킬 수 있었습니다. <br/> 저는 복잡한 기술 스택에서 성능 최적화의 중요성을 배웠으며, 사용자 경험을 개선하기 위해 효율적인 자원 관리와 최적화 방법을 적극적으로 적용하며 현재 프로젝트를 고도화하고 있습니다.</div>

<br/>

👥 박재영

기존의 줄글 형식으로만 제공되던 커뮤니티 경험을 시각적이고 몰입감 있는
방식으로 재구성하는 것을 목표로, 커뮤니티 공간을 `우주`로 설정하고 게시글을
`행성`으로 시각화했습니다. 이를 통해 사용자들에게 단순한 리스트 형식에서 벗어나
3D 공간에서 게시글을 탐색하는 **새로운 경험을 제공** 하고자 했습니다.  
또한, 커뮤니티 내에서 사용자들이 자유롭게 상호작용할 수 있도록, 그룹별로
게시글을 구분하고 `라운지(우주)`와 `오브제(행성)`를 생성하는 기능을
구현했습니다. Stomp와 WebRTC를 활용해 각 게시글에서 채팅과 음성 통화가
가능하도록 개발하여, 사용자들이 실시간으로 소통할 수 있는 환경을 조성했습니다.  
이 프로젝트는 디스콰이엇(IT 서비스 플랫폼)에서 트렌딩 프로덕트로 선정되었으며,
사용자들로부터 재미있는 커뮤니티 경험이라는 긍정적인 피드백을 받았습니다. 이
과정에서 저는 창의적인 아이디어와 기술적 구현이 결합될 때, 사용자에게 독창적이고
매력적인 경험을 제공할 수 있다는 것을 깨달았습니다.  
앞으로도 사용자들의 니즈를 파악하고, 그에 맞는 창의적인 솔루션을 제공하는
개발자가 되기 위해 노력하겠습니다.
