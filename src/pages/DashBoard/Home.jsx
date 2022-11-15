import { CssBaseline } from "@mui/material";
import React, { useContext } from "react";
import Main from "../../component/dashboard/Main";
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
        <div>
        <Main/>
        </div>
      </SideBar>
    </div>
  );
};

export default Home;
