export const URL = {
  login: '/login',
  lounge: '/lounge',
  terms: '/terms',
  privacy: '/privacy',
  firstProfile: '/user/first',
  modifyProfile: '/user/profile',
  withdraw: '/user/withdraw',
  main: '/main',
  users: '/users',
  myRoom: '/myRoom',
  newLounge: '/lounge/new',
  createMyRoom: '/myRoom/generate',
  myLounge: '/lounge/my',
  loungeInvite: '/lounge/invite',
  objet: '/objet',
  myRoomObjet: '/myRoom/objet',
  userDetail: '/users/user',
  notification: '/notification',
}

export const KAKAO_AUTH = import.meta.env.VITE_KAKAO_AUTH

export const BACK_HOST = import.meta.env.VITE_BACKHOST

export const APIs = {
  profile: `${BACK_HOST}/api/v1/users/me`,
  reissueToken: `${BACK_HOST}/api/v1/auth/reissue`,
  loungeList: `${BACK_HOST}/api/v1/lounges`,
  myRoom: `${BACK_HOST}/api/v1/rooms`,
  userInfo: `${BACK_HOST}/api/v1/users`,
  objetPreview: `${BACK_HOST}/api/v1/objets/me`,
  logout: `${BACK_HOST}/api/v1/auth/logout`,
  nickname: `${BACK_HOST}/api/v1/users/validate?nickname`,
  uploadImage: `${BACK_HOST}/api/v1/uploads/images`,
  modifyProfile: `${BACK_HOST}/api/v1/users/profile`,
  objet: `${BACK_HOST}/api/v1/objets`,
  withdraw: `${BACK_HOST}/api/v1/auth/withdraw`,
  invite: `${BACK_HOST}/api/v1/lounges/invite`,
  poke: `${BACK_HOST}/api/v1/users/poke`,
  chat: `${BACK_HOST}/api/v1/chat-rooms`,
  stomp: `${import.meta.env.VITE_STOMP_API}`,
  searchUser: `${BACK_HOST}/api/v1/users/search`,
  notification: `${BACK_HOST}/api/v1/notification`,
}
