import './App.css'
import styled from 'styled-components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { URL } from './static'
import Login from './pages/login/Login'
import Lounge from './pages/louge/Lounge'

function App() {
  return (
    <BrowserRouter>
      <Main>
        <Routes>
          <Route path={URL.home} element={<Login />}></Route>
          <Route path={URL.lounge} element={<Lounge />}></Route>
        </Routes>
      </Main>
    </BrowserRouter>
  )
}

const Main = styled.div`
  width: 390px;
  height: 844px;
  margin: auto;
  border: 1px solid white;
  background-color: black;
`

export default App
