import React from "react";
import "./home-style.css";
import Menu from "../../components/meniu/Menu";
import Container from "../../components/meniu/Container";

const Home = () => {
  return (
    <div className='app'>
      <Menu />
      <Container />
    </div>
  );
};
export default Home;
