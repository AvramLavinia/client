import React from "react";
import "./forgot-style.css";
import { email } from "../images/images";

const ForgotPassword = () => {
  return (
    <div className='main3'>
      <div className='sub-main3'>
        <div>
          <h1>Forgot Password</h1>
          <div>
            <img src={email} alt='email' className='email3'></img>
            <input
              type='text'
              placeholder='Type your email'
              className='name3'></input>
          </div>

          <div className='forgot-button'>
            <button className='button3'>Send reset code</button>

            <p className='link3'>
              <a href='NewPassword'> New Password</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ForgotPassword;
