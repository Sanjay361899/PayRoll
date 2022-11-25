import React, { useState } from "react";

import { Box, Stack } from "@mui/system";

import UserDetail from "../../component/Admindashboard/UserDetail";
import Footer from "../../component/templatedashboard/Footer";
import Navigation from "../../component/templatedashboard/Navigation";
import SideBar from "../../component/templatedashboard/SideBar";

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
