import { Box, Stack } from "@mui/system";
import React from "react";
import UserDetail from "../../component/Admindashboard/UserDetail";
import Navigation from "../../component/templatedashboard/Navigation";
import SideBar from "../../component/templatedashboard/SideBar";
import "./index.css";
const DetailHome = () => {
  return (
    <Box>
      <Navigation/>
    
        <SideBar/>
        <UserDetail/>
    </Box>
  
  );
};

export default DetailHome;
