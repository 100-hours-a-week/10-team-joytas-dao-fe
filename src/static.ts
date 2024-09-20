export const URL = {
  main: '/main',
  notification: '/notification',

  // auth
  login: '/login',
  terms: '/terms',
  privacy: '/privacy',

  // users
  firstProfile: '/users/first',
  modifyProfile: '/users/profile',
  withdraw: '/users/withdraw',
  users: '/users',
  userDetail: '/users/user',

  // lounges
  newLounge: '/lounges/new',
  lounge: '/lounges',
  myLounge: '/lounges/my',
  loungeInvite: '/lounges/invite',

  // objets
  objet: '/objets',
  newObjet: '/objets/new',

  // myRoom
  createMyRoom: '/myRoom/generate',
  myRoom: '/myRoom',
  myRoomObjet: '/myRoom/objets',
}

export const KAKAO_AUTH = import.meta.env.VITE_KAKAO_AUTH

export const BACK_HOST = import.meta.env.VITE_BACKHOST

export const APIs = {
  uploadImage: `${BACK_HOST}/api/v1/uploads/images`,
  notification: `${BACK_HOST}/api/v1/notification`,

  // auth
  profile: `${BACK_HOST}/api/v1/users/me`,
  reissueToken: `${BACK_HOST}/api/v1/auth/reissue`,

  // users
  nickname: `${BACK_HOST}/api/v1/users/validate?nickname`,
  logout: `${BACK_HOST}/api/v1/auth/logout`,
  userInfo: `${BACK_HOST}/api/v1/users`,
  withdraw: `${BACK_HOST}/api/v1/users/withdraw`,
  modifyProfile: `${BACK_HOST}/api/v1/users/profile`,
  searchUser: `${BACK_HOST}/api/v1/users/search`,

  // lounges
  loungeList: `${BACK_HOST}/api/v1/lounges`,
  objet: `${BACK_HOST}/api/v1/objets`,
  objetPreview: `${BACK_HOST}/api/v1/objets/me`,
  invite: `${BACK_HOST}/api/v1/lounges/invite`,
  poke: `${BACK_HOST}/api/v1/users/poke`,

  // myRoom
  myRoom: `${BACK_HOST}/api/v1/rooms`,

  // stomp
  stomp: import.meta.env.VITE_STOMP_API,
  chat: `${BACK_HOST}/api/v1/chat-rooms`,
}
