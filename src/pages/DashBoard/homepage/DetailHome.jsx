import React from "react";
import UserDetail from "../../../component/dashboard/detailsUser/UserDetail";
import Navigation from "../../../component/dashboard/Navigation";
import SideBar from "../../../component/dashboard/SideBar";
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
