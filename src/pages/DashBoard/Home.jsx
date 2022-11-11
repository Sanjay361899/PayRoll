import { CssBaseline } from "@mui/material";
import React, { useContext } from "react";
import Navigation from "../../component/dashboard/Navigation";
import SideBar from "../../component/dashboard/SideBar";
import AuthGuard from "../../guard/AuthGuard";

const Home = () => {
  let { Logout } = useContext(AuthGuard);
  return (
    <div>
      <CssBaseline />
      <SideBar>
        <Navigation />
        <h1> Home IS HERE</h1>
      </SideBar>
    </div>
  );
};

export default Home;
