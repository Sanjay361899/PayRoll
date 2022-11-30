import styled from "@emotion/styled";
import MenuIcon from "@mui/icons-material/Menu";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { createContext, useState } from "react";
import { Link } from "react-router-dom";
import { SideBarUser } from "../sidebardata/SideBarUser";
export const data = createContext();

const SideBar = (props) => {
  const [open, setOpens] = useState(true);
  const role_id = localStorage.getItem("role_id");
  const SideBarUsers = SideBarUser(role_id);
  const BoxStyled = styled(Box)(({ theme }) => ({
    borderLeft: "1px solid #81B441",
    borderTop: "1px solid #81B441",
    margin: 0,
    padding: 0,
    width: !open ? "200px" : "50px",
    backgroundColor: "#262626",
    textDecoration: "none",
    boxShadow: "15px",
    position: "fixed",
    height: "100%",
    zIndex:99,
   
  }));
  return (
    <>
      <BoxStyled p={2}>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <MenuIcon
                sx={{
                  color: "white",
                  marginLeft:open?"0px":"150px"
                }}
                onClick={() =>{
                  props.onChange(!open)
                  setOpens(!open);
                }}
              />
            </ListItemButton>
          </ListItem>
          {SideBarUsers &&
            SideBarUsers.map((items, index) => (
              <ListItem key={index} disablePadding>
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to={items.path}
                >
                  <ListItemButton selected={false}>
                    <ListItemIcon style={{ color:!open? "#81B441":"white" }}>
                      {items.icons}
                    </ListItemIcon>
                    <ListItemText sx={{display:!open?"block":"none"}} primary={items.title} />
                  </ListItemButton>
                </Link>
              </ListItem>
            ))}
        </List>
      </BoxStyled>
    </>
  );
};

export default SideBar;
