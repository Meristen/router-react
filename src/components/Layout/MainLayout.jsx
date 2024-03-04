import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../SideBar";

const MainLayout = () => {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <SideBar />
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
