import React from "react";
import Appbar from "./components/Navbar";
import MainRoutes from "./routes/MainRoutes";
import SideBar from "./components/SideBar";

const App = () => {
  return (
    <div>
      <Appbar />
      <MainRoutes />
    </div>
  );
};

export default App;
