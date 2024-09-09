import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { URL } from './static'
import Login from './pages/login/Login'
import LoungeListPage from './pages/lounge/LoungeList'
import Terms from './pages/policy/Terms'
import Privacy from './pages/policy/Privacy'
import FirstProfile from './pages/user/FirstProfile'
import ModifyProfile from './pages/user/ModifyProfile'
import UserDelete from './pages/user/UserDelete'
import NewLounge from './pages/lounge/NewLounge'
import CreateMyRoom from './pages/myRoom/CreateMyRoom'
import Lounge from './pages/lounge/Lounge'
import MyRoom from './pages/myRoom/MyRoom'
import UserList from './pages/user/UserList'
import ObjetCall from './pages/objet/ObjetCall'
import ObjetDetail from './pages/objet/ObjetDetail'
import Home from './pages/home/Home'
import MyRoomObjet from './pages/myRoom/MyRoomObjets'
import ObjetChatting from './pages/objet/ObjetChatting'
import UserDetail from './pages/user/UserDetail'
import Notification from './pages/notification/Notification'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ObjetForm from './pages/objet/ObjetForm'

const originalWarn = console.warn
const originalError = console.error

console.warn = (...args) => {
  if (args[0].includes('<StyleSheetManager shouldForwardProp={...}>')) {
    return
  } else if (args[0].includes('MenuItem should not leave undefined `key`')) {
    return
  }
  originalWarn(...args)
}

console.error = (...args) => {
  if (
    typeof args[0] === 'string' &&
    args[0].includes('MenuItem should not leave undefined `key`')
  ) {
    return
  }
  originalError(...args)
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to={URL.main} />} />
        <Route path={URL.main} element={<Home />} />
        <Route path={URL.notification} element={<Notification />} />

        {/* auth */}
        <Route path={URL.login} element={<Login />} />
        <Route path={URL.privacy} element={<Privacy />} />
        <Route path={URL.terms} element={<Terms />} />
        <Route path={URL.withdraw} element={<UserDelete />} />

        {/* user */}
        <Route path={URL.firstProfile} element={<FirstProfile />} />
        <Route path={URL.modifyProfile} element={<ModifyProfile />} />
        <Route path={`${URL.userDetail}/:id`} element={<UserDetail />} />
        <Route path={`${URL.lounge}/:lid/invite`} element={<UserList />} />
        <Route path={URL.users} element={<UserList />} />

        {/* lounges */}
        <Route path={URL.lounge} element={<LoungeListPage />} />
        <Route path={`${URL.lounge}/:lid`} element={<Lounge />} />
        <Route path={URL.newLounge} element={<NewLounge />} />

        {/* objets */}
        <Route path={URL.newObjet} element={<ObjetForm />} />
        <Route path={`${URL.objet}/:oid`} element={<ObjetDetail />} />
        <Route path={`${URL.objet}/:oid/update`} element={<ObjetForm />} />
        <Route
          path={`${URL.objet}/:oid/chatting`}
          element={<ObjetChatting />}
        />
        <Route path={`${URL.objet}/:oid/call`} element={<ObjetCall />} />

        {/* my room */}
        <Route path={URL.createMyRoom} element={<CreateMyRoom />} />
        <Route path={URL.myRoom} element={<MyRoom />} />
        <Route path={URL.myRoomObjet} element={<MyRoomObjet />} />
      </Routes>

      <ToastContainer
        position='top-right'
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
        limit={2}
        closeOnClick
        toastStyle={{
          fontSize: '13px',
        }}
      />
    </BrowserRouter>
  )
}

export default App
