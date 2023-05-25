import { useEffect } from "react";
import React from "react";
import { logo } from "../../pages/images/images";
import "./menu.css";
import {
  FaDelicious,
  FaHeartbeat,
  FaKey,
  FaCog,
  FaFile,
  FaSignOutAlt,
} from "react-icons/fa";

const Menu = () => {
  useEffect(() => {
    const mainMenuLi = document
      .getElementById("mainMenu")
      .querySelectorAll("li");

    function changeActive() {
      mainMenuLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    mainMenuLi.forEach((n) => n.addEventListener("click", changeActive));
  }, []);

  return (
    <menu>
      <img src={logo} alt='' />
      <ul id='mainMenu'>
        <li>
          <a href='Items'>
            <FaDelicious />
          </a>
        </li>
        <li>
          <a href='Notes'>
            <FaFile />
          </a>
        </li>
        <li>
          <a href='GeneratePassword'>
            <FaKey />
          </a>
        </li>
        <li>
          <a href='Health'>
            {" "}
            <FaHeartbeat />{" "}
          </a>
        </li>
        <li>
          <a href='Settings'>
            <FaCog />
          </a>
        </li>
      </ul>
      <ul className='last'>
        <li>
          <a href='#'>
            <FaSignOutAlt />
          </a>
        </li>
      </ul>
    </menu>
  );
};

export default Menu;
