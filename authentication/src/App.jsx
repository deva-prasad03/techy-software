import React from 'react'
import Signup from './Signup'
import Home from './Home'
import Privateroute from './Privateroute'

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './Login'

const App = () => {
  
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Signup/>} />
    <Route path="/login"element={<Login/>}/>
    <Route element={<Privateroute/>}>
    <Route path="/home" element={<Home/>}></Route></Route>
   </Routes>
   </BrowserRouter>
  )
}

export default App
