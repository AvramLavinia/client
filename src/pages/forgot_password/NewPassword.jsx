import React from "react";
import "./newpass-style.css";
import { pass } from "../images/images";

const NewPassword = () => {
  return (
    <div className='main4'>
      <div className='sub-main4'>
        <div>
          <h1>New Password</h1>
          <div className='second-input4'>
            <img src={pass} alt='password' className='email4'></img>
            <input
              type='password'
              placeholder='Type your password'
              className='name4'></input>
          </div>
          <div className='second-input5'>
            <img src={pass} alt='reapeat-password' className='email4'></img>
            <input
              type='password'
              placeholder='Please, repeat password'
              className='name4'></input>
          </div>
          <div className='send-button'>
            <button className='button4'>Send </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewPassword;
