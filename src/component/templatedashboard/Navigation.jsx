// import * as React from "react";
// import AppBar from "@mui/material/AppBar";
// import Stack from "@mui/material/Stack";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import { Button } from "@mui/material";
// import AuthGuard from "../../guard/AuthGuard";

// function appBarLabel(label) {
//   return (
//     <Toolbar>
//       <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
//         {label}
//       </Typography>
//     </Toolbar>
//   );
// }
// export default function Navigation() {
//   let { Logout } = React.useContext(AuthGuard);
//   return (
//     <Stack sx={{ mt: -2.5, backgroundColor: "black", opacity: 7 }}>
//       <AppBar className="app-dash" position="static" sx={{ backgroundColor: "black", opacity: 7.9  }}>
//         {appBarLabel("PayRol")}
//         <div style={{display:'flex', flexDirection:'row-reverse', marginBottom:"20px",marginTop:"-20px", marginRight:"20px"}}>
//         <Button
//           sx={{
//             backgroundColor: "white",

//             color: "black",
//             "&:hover": {
//               color: "white",
//             },
//           }}
//           onClick={Logout}
//         >
//           LogOut
//         </Button>
//         </div>
//       </AppBar>
//     </Stack>
//   );
// }

// import { useTheme } from "@emotion/react";
// import { Search } from "@mui/icons-material";
// import { AppBar, InputBase, Toolbar, Typography } from "@mui/material";
// import { makeStyles, styled } from "@mui/styles";
// import { Button } from "bootstrap";
// import { useContext } from "react";
// import AuthGuard from "../../guard/AuthGuard";
// const useStyles = makeStyles((theme) => ({
//   logo: {
//     color: "white",
//     display: "block",
//   },
//   nav: {
//     backgroundColor: "black",
//     color: "white",
//     display: "flex",
//     justifyContent: "space-between",
//   },
//   search: {
//     display: "flex",
//     alignItems: "center",
//     backgroundColor: "white",
//     opacity: 0.8,
//     "&:hover": {
//       backgroundColor: "white",
//       opacity: 0.25,
//       // [theme.breakpoints.down("sm")]: {
//       //   display:"none"
//       // },
//     },
//     borderRadius: "2px",
//     width: "50%",
//   },
//   input: {
//     color: "red",
//   },
// }));

// export default function Navigation() {
//   const { Logout } = useContext(AuthGuard);
//   // const theme = useTheme();
//   const classes = useStyles();
//   return (
//     <AppBar>
//       <Toolbar className={classes.nav}>
//         <Typography variant="h6" className={classes.logo}>
//           PayRol
//         </Typography>
//         <div className={classes.search}>
//           <Search />
//           <InputBase placeholder="Search..." className={classes.input} />
//         </div>
//         <div className={classes.btn}>
//           <button onClick={Logout}>Logout</button>
//         </div>
//       </Toolbar>
//     </AppBar>
//   );
// }
import {
  AppBar,
  Avatar,
  Button,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { createContext } from "react";
import CameraRollIcon from "@mui/icons-material/CameraRoll";
import { useContext } from "react";
import AuthGuard from "../../guard/AuthGuard";
import adminimage from "../../images/adminimage.png";
import { Box } from "@mui/system";
import { useState } from "react";
import { green } from "@mui/material/colors";
const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  // backgroundColor:"#568203"
  backgroundColor: "#262626",

});
const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));
const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));
const UserIcons = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));
const Navigation = () => {
  const [open, setOpen] = useState(false);
  const { Logout } = useContext(AuthGuard);
  const setclose=()=>{
  setOpen(false)
  }
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography sx={{ display: { xs: "none", sm: "block" }, color:"#81B441" }}>
          PayRol
        </Typography>
        <CameraRollIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="search..." />
        </Search>
        <Icons>
          <Button style={{ backgroundColor: "#81B441", color:"white" }} onClick={Logout}>
            Logout
          </Button>
          <Avatar
            src={`${adminimage}`}
            sx={{ width: 30, height: 30 }}
            onClick={()=>setOpen(true)}
          />
        </Icons>
        <UserIcons onClick={()=>setOpen(true)}>
          <Avatar src={`${adminimage}`} sx={{ width: 30, height: 30 }} />
        </UserIcons>
      </StyledToolbar>
      <Menu
        
        open={open}
        onClose={setclose}
        aria-labelledby="basic-demo-button"
        anchorOrigin={{
          vertical:'top',
          horizontal:'right',
        }}
        transformOrigin={{
          vertical:'top',
          horizontal:'right'
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem onClick={Logout}>Logout</MenuItem>
      </Menu>
      
    </AppBar>
  );
};

export default Navigation;
