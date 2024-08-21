import React from 'react'
import { Link } from 'react-router-dom'//it is get from package, for navigation btw. pages,we want to import <Navbar/> component in each component to navigation
import './navbar.css'
import  menu from'../images/menu.png'
const Navbar = () => {


  return (
<div>
    <nav id='nav-link'>
      <div id='top-bar'>
        
      <ul><Link to="/" className='nav-link' id='navHome'>Home</Link></ul><br />
      <ul><Link to="Aboutus"className='nav-link' id='navAboutus'>Aboutus</Link></ul><br />
      <ul><Link to="Services"className='nav-link' id='navServices'>Services</Link></ul><br />
      </div>
      
     </nav>
     </div>
     
  )
}

export default Navbar