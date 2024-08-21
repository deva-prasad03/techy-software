import React from 'react'
import './style/Services.css'
import socialmedia from '../images/socialmedia.jpeg'
import webdevelopment from '../images/webdevelopmet_.jpeg'

const Services = () => {
  return (
    <div>
     <div id='DigitalMarketing'> 
      <h1>DigitalMarketing</h1>
    <img src={socialmedia} alt="" id='img1' /><br />
    <div id='service-list'>
     <p id='a1'>Social media Marketing</p> <br />
     <p id='a1'>content Marketing</p> <br />
     <p id='a1'>Email Marketing</p> <br /></div>
     </div>

     <div id='Web-Developmet'> <h1>Web-Developmet</h1> <br />
     <img src={webdevelopment} alt=""  id='img2'/><br />
     <div id='service-list'> <p id='a1'>web designing</p> <br />
     <p id='a1'>SEO</p><br />
     <p id='a1'>Website-Optimization</p> <br /></div>
    
     </div> 
    </div>
  )
}

export default Services
