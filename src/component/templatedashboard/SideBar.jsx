// import React, { useState } from "react";
// import FlareIcon from "@mui/icons-material/Flare";
// import {  SideBarUser } from "../sidebardata/SideBarUser";
// import adminimage from "../../images/adminimage.png";
// import { Link, NavLink } from "react-router-dom";

// const SideBar = ({ children }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const toggle = () => setIsOpen(!isOpen);
//   const role_id= localStorage.getItem("role_id")
//   const SideBarUsers= SideBarUser(role_id)
//   console.log("sidebargettingdata===========",SideBarUsers);
//   return (
//     <div className="container">
//       <div
//         style={{
//         width: isOpen ? "220px" : "50px",
//           backgroundColor: isOpen ? "red" : "black",
//         }}
//         className="sidebar"
//       >
//         <div
//           style={{ width: isOpen ? "200px" : "50px" }}
//           className="top-section"
//         >
//           <img
//             style={{ display: isOpen ? "block" : "none" }}
//             className="logo"
//             src={adminimage}
//             alt="logo"
//           />
//           <div
//             style={{ marginLeft: isOpen ? "100px" : "0px" }}
//             className="bars"
//           >
//             <FlareIcon onMouseOver={toggle} />
//           </div>
//         </div>
//         {SideBarUsers && SideBarUsers.map((items, index) => (
//           <NavLink to={items.path} className="link" key={index}>
//             <div className="icon">{items.icons}</div>
//             <div
//               style={{ display: isOpen ? "block" : "none" }}
//               className="link_text"
//             >
//               {items.title}
//             </div>
//           </NavLink>
//         ))}
//       </div>
//       <main className="sidebar-main" style={{marginLeft:isOpen?"220px":"80px"}}>{children}</main>
//     </div>
//   );
// };

// export default SideBar;
import ViewWeekIcon from '@mui/icons-material/ViewWeek';
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { createContext, useState } from "react";
import { Link } from "react-router-dom";
import { SideBarUser } from "../sidebardata/SideBarUser";
export const data= createContext();
const SideBar = () => {
   const [open, setOpen] = useState(true);
   const role_id = localStorage.getItem("role_id");
  const SideBarUsers = SideBarUser(role_id);
  console.log("Sidebar Data getting:", SideBarUsers);
  return (
    <>
      
      <hr style={{ backgroundColor: "#81B441", height: -1 }} />
      <Box
        p={2}
        sx={{
          display: {
            sm: "block",
            margin: 0,
            padding: 0,
            width: !open ? "200px" : "50px",
            backgroundColor: "#262626",
            textDecoration: "none",
            boxShadow: "15px",
            position: "fixed",
            height: "100%",
            overflow: "auto",
          },
        }}
      >
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ViewWeekIcon sx={{ 
                color: "white"
              }} onClick={() => setOpen(!open)} />
            </ListItemButton>
          </ListItem>
          {SideBarUsers &&
            SideBarUsers.map((items, index) => (
              <ListItem key={index} disablePadding>
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to={items.path}
                >
                  <ListItemButton>
                    <ListItemIcon style={{ color: "#81B441" }}>
                      {items.icons}
                    </ListItemIcon>
                    <ListItemText primary={items.title} />
                  </ListItemButton>
                </Link>
              </ListItem>
            ))}
        </List>
      </Box>
    </>
  );
};

export default SideBar;
