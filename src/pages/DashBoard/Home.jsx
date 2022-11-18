import { Box, Stack } from "@mui/material";
import Main from "../../component/Admindashboard/Main";
import Navigation from "../../component/templatedashboard/Navigation";
import SideBar from "../../component/templatedashboard/SideBar";
import "./index.css";
const Home = () => {
  return (
    <Box>
      <div>
        <Navigation />
      </div>
      <div>
        <SideBar />
      </div>
      <div>
        <Main />
      </div>
    </Box>
  );
};

export default Home;
