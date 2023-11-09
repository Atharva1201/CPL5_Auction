import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UserHomePage from '../Pages/UserHomePage';
// import AddNewPlayerPopup from '../Pages/AddNewPlayerPopup';
import AdminHomePage from '../Pages/AdminHomePage';
import AdminLogin from '../Pages/AdminLogin';
import AddScreen from '../Pages/AddScreen'
import AddTeams from '../Pages/AddTeams'
const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path='/home' element={<UserHomePage/>} />
      <Route exact path='/adminhomepage' element={<AdminHomePage/>} />
      <Route exact path='/adminlogin' element={<AdminLogin/>} />
      <Route exact path='/addnewplayer' element={<AddScreen/>} />
      <Route exact path='/addteams' element={<AddTeams/>} />



    </Routes>
  );
};

export default AppRoutes;
