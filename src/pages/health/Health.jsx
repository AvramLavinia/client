import React, { useState } from "react";
import "./health.css";
import Menu from "../../components/meniu/Menu";
import TopContainer from "../../components/meniu/TopContainer";

const Health = () => {
  const [password, setPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("weak");

  const handlePasswordChange = (e) => {
    const updatedPassword = e.target.value;
    setPassword(updatedPassword);
    checkPasswordStrength(updatedPassword);
  };

  const checkPasswordStrength = (password) => {
    let strength = 0;
    if (password.length > 6) {
      strength++;
    }
    if (password.length >= 10) {
      strength++;
    }
    if (/[A-Z]/.test(password)) {
      strength++;
    }
    if (/[0-9]/.test(password)) {
      strength++;
    }
    if (/[A-Za-z0-8]/.test(password)) {
      strength++;
    }
    setPasswordStrength(getStrengthLabel(strength));
  };

  const getStrengthLabel = (strength) => {
    if (strength <= 2) {
      return "weak";
    } else if (strength >= 2 && strength <= 4) {
      return "medium";
    } else {
      return "strong";
    }
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='app'>
      <Menu />
      <TopContainer />

      <div
        className={`containerHe ${passwordStrength} ${
          password ? "password-entered" : ""
        }`}>
        <h1 className='titlePass'>Password Strength Check</h1>
        <div className='inputBox'>
          <input
            type={showPassword ? "text" : "password"}
            placeholder='password'
            id='myPassword'
            value={password}
            onChange={handlePasswordChange}
          />
          <div className='show' onClick={handleTogglePassword}></div>
        </div>
        <div className='strengthMeter'></div>
        <div className='strengthText'>
          {password && (
            <span className='passwordStrengthLabel'>
              {passwordStrength === "weak"
                ? "Your password is Weak"
                : passwordStrength === "medium"
                ? "Your password is Medium"
                : "Your password is Strong"}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Health;
