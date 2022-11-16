import React from "react";
import UserDetail from "../../../component/maindashboard/UserDetail";
import Navigation from "../../../component/templatedashboard/Navigation";
import SideBar from "../../../component/templatedashboard/SideBar";
import "./index.css";
const DetailHome = () => {
  return (
    <div class="grid-container">
      <div class="item1">
        <Navigation />
      </div>
      <div class="item2">
        <SideBar />
      </div>
      <div class="item3">
        <UserDetail />
      </div>
    </div>
  );
};

export default DetailHome;
