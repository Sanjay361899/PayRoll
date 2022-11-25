import React, { useState } from 'react'

import { Box } from '@mui/material';

import Footer from '../../component/templatedashboard/Footer';
import Navigation from "../../component/templatedashboard/Navigation";
import SideBar from "../../component/templatedashboard/SideBar";
import Profile from '../../component/UserDashboard/Profile'

const Profiles = () => {
  const [open , setOpen]=useState(true)

  return (
    <Box>
    <Navigation/>
      <SideBar onChange={(value)=>setOpen(value)}/>
      <Profile open={open}/>
       <Footer/>
  </Box>
  )
}

export default Profiles