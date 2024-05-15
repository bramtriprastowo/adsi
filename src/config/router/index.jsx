import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../../pages/auth/index.jsx";
import Admin from "../../pages/profile/admin/admin.jsx";
import User from "../../pages/profile/user/user.jsx";
import InputAdminProfile from "../../pages/profile/admin/input/input-admin.jsx";
import InputEmployeeProfile from "../../pages/profile/admin/input/input-pegawai.jsx"
import EditAdminProfile from "../../pages/profile/admin/edit/edit-admin.jsx";
import EditEmployeeProfile from "../../pages/profile/admin/edit/edit-pegawai.jsx"
import ManageProfile from "../../pages/profile/admin/kelola/kelolaAdmin.jsx";
import ManageProfileEmployee from "../../pages/profile/admin/kelola/kelolaPegawai.jsx"


const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" Navigate="" element={<Login/>} />
          {/* ADMIN */}
          <Route path="/admin" element={<Admin/>}/>
          <Route path="/admin/kelola-profil" element={<ManageProfile/>} />
          <Route path="/admin/kelola-profil/input-profil-admin" element={<InputAdminProfile/>} />
          <Route path="/admin/kelola-profil/edit-profil-admin" element={<EditAdminProfile/>} />
          <Route path="/admin/kelola-profil-pegawai" element={<ManageProfileEmployee/>} />
          <Route path="/admin/kelola-profil-pegawai/input-profil-pegawai" element={<InputEmployeeProfile/>} />
          <Route path="/admin/kelola-profil-pegawai/edit-profil-pegawai" element={<EditEmployeeProfile/>} />
          {/* USER */}
          <Route path="/user" element={<User/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
