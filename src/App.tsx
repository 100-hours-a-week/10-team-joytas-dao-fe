import './App.css'
import styled from 'styled-components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
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

function App() {
  return (
    <BrowserRouter>
      <Main>
        <Routes>
          <Route path={URL.main} element={<Home />}></Route>
          <Route path={URL.home} element={<Login />}></Route>
          <Route path={URL.lounge} element={<LoungeListPage />}></Route>
          <Route path={URL.newLounge} element={<NewLounge />}></Route>
          <Route path={URL.terms} element={<Terms />}></Route>
          <Route path={URL.delete} element={<UserDelete />}></Route>
          <Route path={URL.privacy} element={<Privacy />}></Route>
          <Route path={URL.newObjet} element={<NewObjet />}></Route>
          <Route path={`${URL.lounge}/:id`} element={<Lounge />}></Route>
          <Route path={URL.firstProfile} element={<FirstProfile />}></Route>
          <Route path={URL.modifyProfile} element={<ModifyProfile />}></Route>
          <Route path={URL.createMyRoom} element={<CreateMyRoom />}></Route>
          <Route path={URL.myRoom} element={<MyRoom />}></Route>
          <Route path={URL.loungeInvite} element={<UserList />}></Route>
          <Route path={URL.objetCall} element={<ObjetCall />}></Route>
          <Route path={`${URL.objet}/:id`} element={<ObjetDetail />}></Route>
          <Route
            path={`${URL.objet}/:id/update`}
            element={<UpdateObjet />}
          ></Route>
          <Route path={URL.myRoomObjet} element={<MyRoomObjet />}></Route>
          <Route path={URL.objetChatting} element={<ObjetChatting />}></Route>
          <Route path={URL.users} element={<UserList />}></Route>
          <Route
            path={`${URL.userDetail}/:id`}
            element={<UserDetail />}
          ></Route>
          <Route path={URL.notification} element={<Notification />}></Route>
        </Routes>
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
