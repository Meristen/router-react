import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomaPage from "../components/HomaPage";
import AboutPage from "../components/AboutPage";
import Users from "../components/Users";
import MainLayout from "../components/Layout/MainLayout";
import UsersLayout from "../components/Layout/UsersLayout";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<HomaPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Route>
      <Route path="/" element={<UsersLayout />}>
        <Route path="/users" element={<Users />} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
