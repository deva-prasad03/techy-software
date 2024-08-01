import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios'
import "./assets/components/signup.css"

const Signup = () => {

const [email, setEmail] = useState()
const [password, setPassword] = useState()

const navigate = useNavigate()
  const handleSignUpClick = (e) => {
    // Add your sign-up logic here
    e.preventDefault()
    console.log('Sign up button clicked!');
    axios.post('http://localhost:3001/register',{email,password})
    .then(result => {console.log(result)
    navigate('/Login');
   } )
    .catch(error => console.log(error))
  };


  return (
    <div>
      <form onSubmit={handleSignUpClick}>
        

      <div className="total">
        <div className="sign-in-container">
          <h1>Sign up</h1>
          <div className="sign-in-icon">
            <button className="button">f</button>
            <button className="button">G<span>+</span></button>
            <button className="button">in</button>
          </div>
          <p>or use your account</p>
          <div className="sign-in-input">
            <input type="Email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
            <br />
            <input type="text" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
          </div>
          <div className="sign-in-text">
            <h4>Forget your password?</h4>
            <h4>Alread hava an account</h4>
            <Link to="/login">SIGN IN</Link>
          </div>
        </div>
      </div>
      <div className="sign-up-container">
        <h1>HELLO, FRIEND!</h1>
        <p>Enter your personal detail and start journey with us</p>
        <button  id="change-button">
          SIGN UP
        </button>
      </div>
      </form>
    </div>
  

  );
};

export default Signup;