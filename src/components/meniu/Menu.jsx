import { useEffect } from "react";
import React from "react";
import { logo } from "../../pages/images/images";
import "./menu.css";
import {
  FaDelicious,
  FaHeartbeat,
  FaKey,
  FaPortrait,
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
        <Icon icon={<FaDelicious />} />
        <Icon icon={<FaPortrait />} />
        <Icon icon={<FaFile />} />
        <Icon icon={<FaKey />} />
        <Icon icon={<FaHeartbeat />} />
      </ul>
      <ul className='last'>
        <Icon icon={<FaCog />} />
        <Icon icon={<FaSignOutAlt />} />
      </ul>
    </menu>
  );
};

const Icon = ({ icon }) => (
  <li>
    <a href='#'>{icon}</a>
  </li>
);

export default Menu;
