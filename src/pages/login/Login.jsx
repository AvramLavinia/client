import React from "react";
import "./login-style.css";
import { profile, email, pass } from "../images/images";

const Login = () => {
  return (
    <div className='main'>
      <div className='sub-main'>
        <div>
          <div className='imgs'>
            <div className='container-image'>
              <img src={profile} alt='profile' className='profile' />
            </div>
          </div>

          <div>
            <div>
              <h1>Login Page</h1>
              <div>
                <img src={email} alt='email' className='email'></img>
                <input
                  type='text'
                  placeholder='Type your email'
                  className='name'></input>
              </div>
              <div className='second-input'>
                <img src={pass} alt='password' className='email'></img>
                <input
                  type='password'
                  placeholder='Type your password'
                  className='name'></input>
              </div>
              <div className='login-button'>
                <button className='button2'>Login</button>
              </div>
              <p className='link'>
                <a href='ForgotPassword'>Forgot Password? </a> Or{" "}
                <a href='Home'> Sign Up</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
