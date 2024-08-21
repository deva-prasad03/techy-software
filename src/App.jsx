import React from 'react'
import Home from './pages/Home'
import Aboutus from './pages/Aboutus'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
 import Services from './pages/Services'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar></Navbar>
    
      <Routes>
        <Route path ='/' element={<Home/>}/>
        <Route path ='Aboutus' element={<Aboutus/>}/>
        <Route path='Services' element={<Services/>}/>
      </Routes>
      </BrowserRouter>
      
    

    </div>
  )
}

export default App
