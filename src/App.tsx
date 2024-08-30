import './App.css'
import styled from 'styled-components'
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
import NewObjet from './pages/objet/newObjet/NewObjet'
import Lounge from './pages/lounge/Lounge'
import MyRoom from './pages/myRoom/MyRoom'
import UserList from './pages/user/UserList'
import ObjetCall from './pages/objet/ObjetCall'
import ObjetDetail from './pages/objet/ObjetDetail'
import Home from './pages/home/Home'
import UpdateObjet from './pages/objet/UpdateObjet'
import MyRoomObjet from './pages/myRoom/MyRoomObjets'
import ObjetChatting from './pages/objet/ObjetChatting'
import UserDetail from './pages/user/UserDetail'
import Notification from './pages/notification/Notification'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <BrowserRouter>
      <Main>
        <Routes>
          <Route path='/' element={<Navigate to={URL.main} />} />

          <Route path={URL.main} element={<Home />} />
          <Route path={URL.login} element={<Login />} />
          <Route path={URL.lounge} element={<LoungeListPage />} />
          <Route path={URL.newLounge} element={<NewLounge />} />
          <Route path={URL.terms} element={<Terms />} />
          <Route path={URL.withdraw} element={<UserDelete />} />
          <Route path={URL.privacy} element={<Privacy />} />
          <Route path={`${URL.lounge}/:lid/objet/new`} element={<NewObjet />} />
          <Route path={`${URL.lounge}/:lid`} element={<Lounge />} />
          <Route path={URL.firstProfile} element={<FirstProfile />} />
          <Route path={URL.modifyProfile} element={<ModifyProfile />} />
          <Route path={URL.createMyRoom} element={<CreateMyRoom />} />
          <Route path={URL.myRoom} element={<MyRoom />} />
          <Route
            path={`${URL.lounge}/:lid/objet/:oid/call`}
            element={<ObjetCall />}
          />
          <Route
            path={`${URL.lounge}/:lid/objet/:oid`}
            element={<ObjetDetail />}
          />
          <Route
            path={`${URL.lounge}/:lid/objet/:oid/update`}
            element={<UpdateObjet />}
          />
          <Route path={URL.myRoomObjet} element={<MyRoomObjet />} />
          <Route
            path={`${URL.lounge}/:lid/objet/:oid/chatting`}
            element={<ObjetChatting />}
          />
          <Route path={URL.users} element={<UserList />} />
          <Route path={`${URL.userDetail}/:id`} element={<UserDetail />} />
          <Route path={URL.notification} element={<Notification />} />
          <Route path={`${URL.lounge}/:lid/invite`} element={<UserList />} />
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
      </Main>
    </BrowserRouter>
  )
}

const Main = styled.div`
  width: 390px;
  height: 844px;
  margin: auto;
  border: 1px solid #404040;
  overflow: hidden;
  background-color: black;
`

export default App
