import React from 'react';

import user_icon from './person.png';
import email_icon from './email.png';
import password_icon from './password.png';
import { Link } from 'react-router-dom';
import './Login.css'

const SignUp = () => {
  
  

  
  

  return (
    <div className='container'>
      <div className="header">
        <div className="text">Sign Up</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
          <div className="input">
            <img src={user_icon} alt="" />
            <input type="text" name="name" placeholder='Name' />
          </div>
        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" name="email" placeholder='Email'  />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" name="password" placeholder='Password'  />
        </div>
      </div>
      
        
      
      <div className="submit-container">
        
        <Link to="/WeatherApp" className='submit'>SignUp</Link>
      </div>
    </div>
  );

  };
export default SignUp;