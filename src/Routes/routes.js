import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UserHomePage from '../Pages/UserHomePage';
// import AddNewPlayerPopup from '../Pages/AddNewPlayerPopup';
import AdminHomePage from '../Pages/AdminHomePage';
import AdminLogin from '../Pages/AdminLogin';
const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path='/home' element={<UserHomePage/>} />
      {/* <Route exact path='/addnewplayerpop' element={<AddNewPlayerPopup/>} /> */}
      <Route exact path='/adminhomepage' element={<AdminHomePage/>} />
      <Route exact path='/adminlogin' element={<AdminLogin/>} />

    </Routes>
  );
};

export default AppRoutes;
