import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";
import Home from "../pages/dashboard/Home";
import ForgotPassword from "../pages/forgot_password/ForgotPassword";
import NewPassword from "../pages/forgot_password/NewPassword";

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
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
