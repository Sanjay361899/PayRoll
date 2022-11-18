import { Box } from '@mui/material';
import React from 'react'
import Navigation from "../../component/templatedashboard/Navigation";
import SideBar from "../../component/templatedashboard/SideBar";
import Profile from '../../component/UserDashboard/Profile'

const Profiles = () => {
  return (
    <Box>
    <Navigation/>
      <SideBar/>
      <Profile/>
   
  </Box>
  )
}

export default Profiles