import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import UseLogin from './pages/UseLogin'
import UserSignup from './pages/UserSignup'
import Captainlogin from './pages/Captainlogin'
import CaptainSignup from './pages/CaptainSignup'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element = {<Home />}/>
        <Route path='/login' element = {<UseLogin />}/>
        <Route path='/signup' element = {<UserSignup/>}/>
        <Route path='/captain-login' element = {<Captainlogin />}/>
        <Route path='/captain-signup' element = {<CaptainSignup/>}/>
      </Routes>
    </div>
  )
}

export default App