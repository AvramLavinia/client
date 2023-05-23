import React, { useState } from "react";
import "./health.css";
import Menu from "../../components/meniu/Menu";
import TopContainer from "../../components/meniu/TopContainer";

const Health = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='app'>
      <Menu />
      <TopContainer />

      <div className='containerHe'>
        <h1 className='titlePass'>Password Strength Check</h1>
        <div className='inputBox'>
          <input
            type={showPassword ? "text" : "password"}
            placeholder='password'
            id='myPass'
          />
          <div className='show' onClick={handleTogglePassword}></div>
        </div>
        <div className='strengthMeter'></div>
      </div>
    </div>
  );
};

export default Health;
