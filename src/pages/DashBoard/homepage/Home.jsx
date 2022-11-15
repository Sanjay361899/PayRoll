import { CssBaseline } from "@mui/material";
import React, { useContext } from "react";
import Main from "../../../component/dashboard/Main";
import Navigation from "../../../component/dashboard/Navigation";
import SideBar from "../../../component/dashboard/SideBar";
import AuthGuard from "../../../guard/AuthGuard";
import "./index.css";
const Home = () => {
  return (
    <div class="grid-container">
      <div class="item1">
        <Navigation />
      </div>
      <div class="item2">
        <SideBar />
      </div>
      <div class="item3">
        <Main />
      </div>
    </div>
  );
};

export default Home;
