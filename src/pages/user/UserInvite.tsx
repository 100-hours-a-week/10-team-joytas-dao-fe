import Layout from '../../components/Layout'
import { GloablContainer16 } from '../../global/globalStyles'
import {
  SearchTitle,
  SearchUserInput,
  SearchResults,
  SearchContainer,
  ProfileContainer,
  ProfileImage,
  ProfileActive,
  ProfileImageContainer,
  ProfileNickname,
  InviteButton,
} from './UserInviteStyle'

export default function UserInvite() {
  return (
    <Layout>
      <GloablContainer16>
        <SearchTitle>라운지에 초대할 유저를 선택해주세요.</SearchTitle>
        <SearchUserInput
          placeholder='검색할 유저 닉네임을 입력해주세요!'
          maxLength={10}
        />
        <SearchResults>
          <SearchResult />
          <SearchResult />
          <SearchResult />
          <SearchResult />
          <SearchResult />
          <SearchResult />
          <SearchResult />
          <SearchResult />
          <SearchResult />
          <SearchResult />
          <SearchResult />
          <SearchResult />
          <SearchResult />
          <SearchResult />
          <SearchResult />
          <SearchResult />
          <SearchResult />
          <SearchResult />
          <SearchResult />
          <SearchResult />
          <SearchResult />
          <SearchResult />
          <SearchResult />
          <SearchResult />
          <SearchResult />
        </SearchResults>
      </GloablContainer16>
    </Layout>
  )
}

function SearchResult() {
  return (
    <SearchContainer>
      <ProfileContainer>
        <ProfileImageContainer>
          <ProfileImage />
          <ProfileActive />
        </ProfileImageContainer>
        <ProfileNickname>지직지키</ProfileNickname>
      </ProfileContainer>
      <InviteButton>초대하기</InviteButton>
    </SearchContainer>
  )
}
