import React, { useState } from "react";
import "./settings.css";
import Menu from "../../components/meniu/Menu";
import TopContainer from "../../components/meniu/TopContainer";

const Settings = () => {
  const handleDeleteAccount = () => {
    // Logica pentru ștergerea contului
    // Poți adăuga aici codul pentru a trimite o cerere către API pentru ștergerea contului
    console.log("Contul a fost șters!");
  };
  return (
    <div className='app'>
      <Menu />
      <TopContainer />
      <div className='containerSet'>
        <h1 className='titlu1'>Setări</h1>

        <div className='contSet'>
          <h2 className='t1'>Schimba nume</h2>
          <input
            type='name'
            placeholder='Numele actual'
            className='input1'></input>
          <input
            type='name'
            placeholder='Numele nou'
            className='input2'></input>
        </div>
        <div className='contSet1'>
          <h2 className='t1'>Schimba parola</h2>
          <input
            type='password'
            placeholder='Parola actuala'
            className='input1'></input>
          <input
            type='password'
            placeholder='Parola noua'
            className='input2'></input>
        </div>

        <div>
          <h2 className='titlu3'>Șterge contul</h2>
          <button className='butonSterge' onClick={handleDeleteAccount}>
            Șterge contul
          </button>
        </div>
      </div>
    </div>
  );
};
export default Settings;
