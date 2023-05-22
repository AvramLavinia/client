import React, { useState } from "react";
import "./generatePass.css";
import Menu from "../../components/meniu/Menu";
import TopContainer from "../../components/meniu/TopContainer";
import { FaFile } from "react-icons/fa";
import { numbers, lowerCase, upperCase, symbols } from "./characters";

const GeneratePassword = () => {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState("20");
  const [includeUpr, setIncludeUpr] = useState(false);
  const [includeLwr, setIncludeLwr] = useState(false);
  const [includeNumbers, setNumbers] = useState(false);
  const [includeSymbols, setSymbols] = useState(false);
  const handleGeneratePassword = (e) => {
    let characterList = "";
    if (includeLwr) {
      characterList = characterList + lowerCase;
    }

    if (includeUpr) {
      characterList = characterList + upperCase;
    }

    if (includeNumbers) {
      characterList = characterList + numbers;
    }

    if (includeSymbols) {
      characterList = characterList + symbols;
    }
    setPassword(createPassword(characterList));
  };

  const createPassword = (characterList) => {
    let password = "";
    const characterListLength = characterList.length;

    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * characterListLength);
      password = password + characterList.charAt(characterIndex);
    }
    return password;
  };

  const copyToClipboard = (e) => {
    const newText = document.createElement("textarea");
    newText.innerHTML = password;
    document.body.appendChild(newText);
    newText.select();
    document.execCommand("copy");
    newText.remove();
  };
  const handleCopy = (e) => {
    copyToClipboard();
  };
  return (
    <div className='app'>
      <Menu />
      <TopContainer />

      <div className='container1'>
        <div className='generator'>
          <h2 className='generator-header'> Password Generator</h2>
          <div className='generator-pass'>
            <h3>{password}</h3>
            <button onClick={handleCopy} className='copy_btn'>
              <i>
                <FaFile />{" "}
              </i>
            </button>
          </div>
          <div className='form-grup'>
            <label htmlFor='password-str'> Password Length</label>
            <input
              defaultValue={passwordLength}
              onChange={(e) => setPasswordLength(e.target.value)}
              type='number'
              id='password-str'
              name='password-str'
              max={20}
              min={10}></input>
          </div>

          <div className='form-grup'>
            <label htmlFor='upr-letter'> Include Uppercase Letters</label>
            <input
              checked={includeUpr}
              onChange={(e) => setIncludeUpr(e.target.value)}
              type='checkbox'
              id='upr-letter'
              name='upr-letter'></input>
          </div>

          <div className='form-grup'>
            <label htmlFor='low-letter'> Include Lowercase Letters</label>
            <input
              checked={includeLwr}
              onChange={(e) => setIncludeLwr(e.target.value)}
              type='checkbox'
              id='low-letter'
              name='low-letter'></input>
          </div>

          <div className='form-grup'>
            <label htmlFor='numbers'> Include Numbers</label>
            <input
              checked={includeNumbers}
              onChange={(e) => setNumbers(e.target.value)}
              type='checkbox'
              id='numbers'
              name='numbers'></input>
          </div>

          <div className='form-grup'>
            <label htmlFor='symbols'> Include Symbols</label>
            <input
              checked={includeSymbols}
              onChange={(e) => setSymbols(e.target.value)}
              type='checkbox'
              id='symbols'
              name='symbols'></input>
          </div>

          <button onClick={handleGeneratePassword} className='generator_btn'>
            {" "}
            Generate Password
          </button>
        </div>
      </div>
    </div>
  );
};
export default GeneratePassword;
