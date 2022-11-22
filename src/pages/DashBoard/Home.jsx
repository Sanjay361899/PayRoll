import { Box, Stack } from "@mui/material";
import { useState } from "react";
import Main from "../../component/Admindashboard/Main";
import Footer from "../../component/templatedashboard/Footer";
import Navigation from "../../component/templatedashboard/Navigation";
import SideBar from "../../component/templatedashboard/SideBar";
import "./index.css";
const Home = () => {
  const [open , setOpen]=useState(true)
  return (
    <Box>
      <div>
        <Navigation />
      </div>
      <div>
        <SideBar onChange={(value)=>setOpen(value)}/>
      </div>
      <div>
        <Main open={open}/>
      </div>
      <div><Footer/></div>
    </Box>
  );
};

export default Home;
