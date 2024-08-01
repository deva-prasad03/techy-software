import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./login.css"

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/login', { email, password })
      .then(result => {
        console.log(result);
        if(result.data==="success"){
          navigate('/Home');
        }
        // Navigate to home page after successful login
      })
      .catch(err => console.log(err));
  };


  return (
    <div className="container1">
      <div id="form1" className="">
        <form action="" id="forms1" onSubmit={handleSubmit}>
          <h1 className="poppins-regular">Login</h1>
          <div id="form-input1">
            <label htmlFor="email">Email:</label><br />
            <input 
              type="email" 
              placeholder="Enter your email" 
              id="email1" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
            <br />
            <label htmlFor="password">Password:</label><br />
            <input 
              type="password" 
              placeholder="Enter your password" 
              id="password1" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <a href="#" id="forgotpassword1">Forgot password?</a><br />
          <button type="submit" id='button'>Login</button>
          <div id="logo1">
            <br />
            <a href="/signup">
              <img src="./images/search.png" alt="" id="images" />
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
