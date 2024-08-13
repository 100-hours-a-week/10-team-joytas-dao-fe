import Header from './Header'
import {
  Title,
  Content,
  Container,
  Section,
  SubTitle,
  Text,
  List,
  ListItem,
} from './Styles'

export default function Terms() {
  return (
    <>
      <Header />
      <Container>
        <Title>이용약관</Title>
        <Content>
          <Section>
            <SubTitle>제1조 목적</SubTitle>
            <Text>
              본 약관은 다오(DAO)(이하 "회사")가 제공하는 메타버스 공간 및
              오브제 작성 서비스(이하 "서비스")의 이용과 관련하여 회사와 이용자
              간의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정하는 것을
              목적으로 합니다.
            </Text>
          </Section>

          <Section>
            <SubTitle>제2조 정의</SubTitle>
            <Text>
              1. "서비스"란 타인이 작성한 자신에 대한 오브제를 조회하고,
              라운지에서 여러 유저들과 소통하며 오브제를 공유할 수 있는 메타버스
              공간을 말합니다.
            </Text>
            <Text>
              2. "이용자"란 본 약관에 따라 회사가 제공하는 서비스를 이용하는
              자를 말합니다.
            </Text>
            <Text>
              3. "오브제"란 이용자가 작성한 콘텐츠로, 다른 이용자들이 조회하고
              피드백을 남길 수 있는 요소를 말합니다.
            </Text>
            <Text>
              4. "라운지"란 이용자들이 모여 오브제를 공유하고 소통할 수 있는
              가상공간을 말합니다.
            </Text>
            <Text>
              5. "마이룸"이란 이용자가 개인적으로 사용할 수 있는 공간을
              말합니다.
            </Text>
          </Section>

          <Section>
            <SubTitle>제3조 약관의 효력 및 변경</SubTitle>
            <Text>
              1. 본 약관은 서비스 초기 화면에 게시하여 이용자에게 공지함으로써
              효력이 발생합니다.
            </Text>
            <Text>
              2. 회사는 필요한 경우 관련 법령을 위반하지 않는 범위 내에서 본
              약관을 변경할 수 있으며, 약관을 변경할 경우 변경 내용과 시행일자를
              명시하여 서비스 초기 화면에 시행일자 7일 전부터 공지합니다. 단,
              이용자에게 불리한 변경사항이 있는 경우 시행일자 30일 전부터
              공지합니다.
            </Text>
            <Text>3. 변경된 약관은 공지된 시행일로부터 효력이 발생합니다.</Text>
            <Text>
              4. 이용자는 변경된 약관에 동의하지 않을 권리가 있으며, 변경된
              약관에 동의하지 않는 경우 서비스 이용을 중단하고 탈퇴할 수
              있습니다. 변경된 약관의 효력 발생일 이후에도 서비스를 계속 이용할
              경우 변경된 약관에 동의한 것으로 간주합니다.
            </Text>
          </Section>

          <Section>
            <SubTitle>제4조 서비스의 제공 및 변경</SubTitle>
            <Text>1. 회사는 다음과 같은 서비스를 제공합니다:</Text>
            <List>
              <ListItem>타인이 작성한 자신에 대한 오브제 조회 기능</ListItem>
              <ListItem>타인에게 오브제를 작성해달라고 요청하는 기능</ListItem>
              <ListItem>라운지에서 오브제를 조회하고 소통하는 기능</ListItem>
              <ListItem>라운지 생성 및 관리 기능</ListItem>
              <ListItem>오브제에 대한 피드백 작성/수정/삭제 기능</ListItem>
              <ListItem>마이룸 설정 및 이용 기능</ListItem>
              <ListItem>음성통화 및 실시간 채팅 기능(WebRTC)</ListItem>
              <ListItem>OAuth를 통한 로그인 및 유저 인증 기능</ListItem>
            </List>
            <Text>
              2. 회사는 서비스의 내용, 기술적 사항 등을 변경할 수 있으며, 변경
              시 변경 내용과 시행일자를 명시하여 서비스 초기 화면에 공지합니다.
            </Text>
            <Text>
              3. 회사는 이용자에게 제공하는 서비스의 일부 또는 전부를 회사의
              운영상, 기술상의 이유로 변경하거나 중단할 수 있습니다.
            </Text>
          </Section>

          <Section>
            <SubTitle>제5조 서비스 이용</SubTitle>
            <Text>
              1. 서비스 이용은 회사의 서비스 제공상, 기술상 가능하며 이용자의
              서비스 이용 신청에 대해 회사가 이를 승낙한 때부터 개시됩니다.
            </Text>
            <Text>
              2. 서비스 이용은 연중무휴, 1일 24시간을 원칙으로 합니다. 단,
              회사의 업무상 또는 기술상의 이유로 서비스가 일시 중지될 수 있으며,
              이 경우 회사는 사전 또는 사후에 이를 공지합니다.
            </Text>
          </Section>

          <Section>
            <SubTitle>제6조 이용자 계정</SubTitle>
            <Text>
              1. 이용자는 서비스 이용을 위해 계정을 생성할 수 있으며, 계정 생성
              시 정확하고 완전한 정보를 제공해야 합니다.
            </Text>
            <Text>
              2. 이용자는 자신의 계정 정보를 유지하고, 타인이 이를 무단으로
              사용하지 않도록 해야 합니다.
            </Text>
            <Text>
              3. 이용자는 계정을 타인에게 양도하거나 대여할 수 없습니다.
            </Text>
          </Section>

          <Section>
            <SubTitle>제7조 이용자의 의무</SubTitle>
            <Text>
              1. 이용자는 서비스 이용 시 관계 법령, 본 약관의 규정, 이용안내 및
              서비스와 관련하여 공지한 주의사항 등을 준수하여야 하며, 기타
              회사의 업무에 방해되는 행위를 하여서는 안 됩니다.
            </Text>
            <Text>2. 이용자는 다음 각 호의 행위를 하여서는 안 됩니다:</Text>
            <List>
              <ListItem>타인의 정보 도용</ListItem>
              <ListItem>회사가 게시한 정보의 변경</ListItem>
              <ListItem>
                회사가 정한 정보 이외의 정보(컴퓨터 프로그램 등) 등의 송신 또는
                게시
              </ListItem>
              <ListItem>
                회사와 기타 제3자의 저작권 등 지적재산권에 대한 침해
              </ListItem>
              <ListItem>
                회사 및 기타 제3자의 명예를 손상시키거나 업무를 방해하는 행위
              </ListItem>
              <ListItem>
                외설 또는 폭력적인 메시지, 화상, 음성, 기타 공서양속에 반하는
                정보를 서비스에 공개 또는 게시하는 행위
              </ListItem>
            </List>
          </Section>

          <Section>
            <SubTitle>제8조 개인정보 보호</SubTitle>
            <Text>
              회사는 이용자의 개인정보를 보호하기 위해 관련 법령에 따라 개인정보
              처리방침을 수립하고 이를 준수합니다.
            </Text>
          </Section>

          <Section>
            <SubTitle>제9조 서비스 이용제한</SubTitle>
            <Text>
              회사는 이용자가 본 약관의 의무를 위반하거나 서비스의 정상적인
              운영을 방해한 경우, 경고, 일시정지, 영구이용정지 등의 조치를 취할
              수 있습니다.
            </Text>
          </Section>

          <Section>
            <SubTitle>제10조 책임제한</SubTitle>
            <Text>
              1. 회사는 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를
              제공할 수 없는 경우에는 서비스 제공에 관한 책임이 면제됩니다.
            </Text>
            <Text>
              2. 회사는 이용자의 귀책사유로 인한 서비스 이용 장애에 대하여
              책임을 지지 않습니다.
            </Text>
            <Text>
              3. 회사는 이용자가 서비스와 관련하여 게재한 정보, 자료, 사실의
              신뢰도, 정확성 등의 내용에 관하여는 책임을 지지 않습니다.
            </Text>
          </Section>

          <Section>
            <SubTitle>제11조 준거법 및 재판관할</SubTitle>
            <Text>
              1. 본 약관의 해석 및 회사와 이용자 간의 분쟁에 대하여는 대한민국의
              법을 적용합니다.
            </Text>
            <Text>
              2. 서비스 이용과 관련하여 회사와 이용자 간에 발생한 분쟁에
              대해서는 민사소송법상의 관할 법원을 재판관할로 합니다.
            </Text>
          </Section>

          <Section>
            <SubTitle>부칙</SubTitle>
            <Text>본 약관은 2024년 7월 28일부터 시행됩니다.</Text>
          </Section>
        </Content>
      </Container>
    </>
  )
}
