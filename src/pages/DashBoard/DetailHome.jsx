import { Box, Stack } from "@mui/system";
import React, { useState } from "react";
import UserDetail from "../../component/Admindashboard/UserDetail";
import Footer from "../../component/templatedashboard/Footer";
import Navigation from "../../component/templatedashboard/Navigation";
import SideBar from "../../component/templatedashboard/SideBar";
import "./index.css";
const DetailHome = () => {
  const [open , setOpen]=useState(true)

  return (
    <Box>
      <Navigation/>
    
        <SideBar onChange={(value)=>setOpen(value)}/>
        <UserDetail open={open}/>
        <Footer/>
    </Box>
  
  );
};

export default DetailHome;
