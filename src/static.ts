export const URL = {
  home: '/',
  lounge: '/lounge',
  terms: '/terms',
  privacy: '/privacy',
  firstProfile: '/user/first',
  modifyProfile: '/user/profile',
  delete: '/bye',
  main: '/main',
  users: '/users',
  myRoom: '/myRoom',
  newLounge: '/lounge/new',
  createMyRoom: '/myRoom/generate',
  newObjet: '/objet/new',
  myLounge: '/lounge/my',
  loungeInvite: '/lounge/invite',
  objetCall: '/objet/call',
  objetDetail: '/objet',
  objetUpdate: '/objet/update',
  objetChatting: '/objet/chatting',
  myRoomObjet: '/myRoom/objet',
  userDetail: '/users/user',
  notification: '/notification',
}

export const KAKAO_AUTH = 'https://api.joytas.kro.kr/oauth2/authorization/kakao'

export const BACK_HOST = 'https://api.joytas.kro.kr'

export const APIs = {
  profile: `${BACK_HOST}/api/v1/users/me`,
  reissueToken: `${BACK_HOST}/api/v1/auth/reissue`,
  loungeList: `${BACK_HOST}/api/v1/lounges`,
  myRoom: `${BACK_HOST}/api/v1/rooms`,
  objetPreview: `${BACK_HOST}/api/v1/objets/me`,
  logout: `${BACK_HOST}/api/v1/auth/logout`,
}
