import React from "react";
import "./signup-style.css";
import { email, pass, img, prof } from "../images/images";

const Signup = () => {
  return (
    <div className='main2'>
      <div className='sub-main2'>
        <div>
          <div>
            <h1>Sign-Up Page</h1>
            <div className='put2'>
              <img src={prof} alt='name' className='email2'></img>
              <input
                type='name'
                placeholder='Type your name'
                className='name2'></input>
            </div>
            <div className='put2'>
              <img src={email} alt='email' className='email2'></img>
              <input
                type='text'
                placeholder='Type your email'
                className='name2'></input>
            </div>
            <div className='second-input2'>
              <img src={pass} alt='password' className='email2'></img>
              <input
                type='password'
                placeholder='Type your password'
                className='name2'></input>
            </div>
            <div className='fourth-input2'>
              <img src={pass} alt='reapeat-password' className='email2'></img>
              <input
                type='password'
                placeholder='Please, repeat password'
                className='name2'></input>
            </div>
            <div className='signup-button'>
              <button className='button1'>Register</button>
            </div>
            <p className='link2'>
              <a>Have an account? </a>
              <a href='Login'> Login</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Signup;
