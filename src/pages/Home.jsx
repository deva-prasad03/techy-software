
import nexuslogo from '../images/nexuslogo.jpeg';
import ne from '../images/ne.webp';
import Counter from './counter';
import './style/home.css'
import React, { useState } from 'react';
import axios from 'axios';
import instagram from '../images/instagram.png'
import linkedin from '../images/linkedin.png'
<a href="https://www.flaticon.com/free-icons/instagram-logo" title="instagram logo icons">Instagram logo icons created by Freepik - Flaticon</a>
const Home = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
});

const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value,
        
    });
   
};

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post('http://localhost:5000/submit', formData);
        if (response.status === 200) {
            alert('Form data submitted successfully');
            setFormData({
                name: '',
                email: '',
                message: '',
                
            });
            console.log(formData);
            
           
        } else {
            alert('Error submitting form data');
        }
    } catch (error) {
        console.error('Error:', error);
    }
};
  return (
    <div id='container'>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
      
      <h1 id='tag-line'>Innovating Tomorrow's Solutions, Today</h1>
      <div>
        <nav>
          <a href="#fotter-contact" id='contactus'  >Contact Us</a>    
        </nav>           


      </div>


<div className='top-page'><section id='back-tint'><div><img src={nexuslogo} alt="Nexus Logo" /></div>
      <div>
      <section className="stats">
                <Counter target="100" label=" Happy Clients" className="project-count"/>
                <Counter target="100+" label="Projects Completed"className="project-count" />
            </section>
    </div></section></div>
      
    <div id='space-for-image-and-content'></div>
<div id='splitter'>
  <img src={ne} alt="" id='image1' />
<div id='image-side-content'>
    <h2>Transform Your Profits from ₹10,000 to ₹10 Lakhs</h2><br />
    <p>Are you ready to amplify your business growth? Discover how to increase your profits from ₹10,000 to ₹10 Lakhs with our proven methods and expert guidance. We’ll provide you with customized strategies and actionable steps to achieve your financial ambitions. Let’s work together to make your business vision a reality!</p>
    </div> </div>

<div id='space-for-para-and-form'></div>

   <div id='contact-us1'>
      <section id='consaltaion'><h2>Personalized Startup and Growth Consultation</h2>
<p>Connect directly with our founder in a personalized session where you'll receive expert advice tailored to your business needs. We’ll dive deep into your niche, offering targeted strategies and actionable insights that can drive your business forward. This isn’t just advice – it’s a roadmap to your success.</p>
</section>

<section>
<form action="" method='post' onSubmit={handleSubmit}>
      <label htmlFor="user-name">Name</label>
      <input type="text" id='user-name' placeholder='Enter your Name'    value={formData.name}
                      name="name"        onChange={handleChange} required/><br />
      <label htmlFor="user-email">Email</label>
      <input type="email" id='user-email' placeholder='Enter your Email' value={formData.email}               
        name="email"       onChange={handleChange}required/><br />
      <label htmlFor="user-sub">Subject</label>
      <input type="text" id='user-sub' placeholder='Subject' required value={formData.message}
                         name="message"       onChange={handleChange}
/><br />
      <textarea id='user-textarea' placeholder='Give feedback' /><br />
      <button type='submit'>Submit</button>
      </form>
</section></div>



     <div id='splitter2'></div>
     
      <footer>
      
        <div><h2 id='techy-software'>Techy Software</h2>
     
     <p >"Empowering Innovation, Transforming Ideas into Reality. </p> 
     <p id='partner'>Your Partner in Cutting-Edge Software Solutions."</p>
     <img src={instagram} alt=""  id='instrgram'/>
     <img src={linkedin} alt=""  id='instrgram'/>
     </div>
     
      <div className='Service-footer'>
        <div id='side-h'><h2 id='Services'>Service</h2>
        <p>Web Development</p>
        <p>Digital Marketing</p></div>
      </div>
      <section id='fotter-contact'>
        <h2 id='contact-footer'>Contact Us</h2>
      <label htmlFor="email-contact">Email</label>
      <p id='email-contact'>techy@gmail.com</p>
      <label htmlFor="phone-contact">Phone</label>
      <p id='phone-contact'>1234567890</p>
      <label htmlFor="Whatwapp-contact">Whatsapp</label>
      <p id='whatsapp-contact'>1234567890</p>
      </section>
  
      </footer>
    </div>
  )
}

export default Home;