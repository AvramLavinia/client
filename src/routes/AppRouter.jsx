import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";
import Home from "../pages/dashboard/Home";
import ForgotPassword from "../pages/forgot_password/ForgotPassword";
import NewPassword from "../pages/forgot_password/NewPassword";
import GeneratePassword from "../pages/generatePass/GeneratePassword";
import Items from "../pages/items/Items";
import Settings from "../pages/settings/Settings";
import Notes from "../pages/notes/Notes";
import Health from "../pages/health/Health";
import TopContainer from "../components/meniu/TopContainer";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/ForgotPassword' element={<ForgotPassword />} />
        <Route path='/NewPassword' element={<NewPassword />} />
        <Route path='/GeneratePassword' element={<GeneratePassword />} />
        <Route path='/Items' element={<Items />} />
        <Route path='/Settings' element={<Settings />} />
        <Route path='/Notes' element={<Notes />} />
        <Route path='/Health' element={<Health />} />
        <Route path='/TopContainer' element={<TopContainer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
