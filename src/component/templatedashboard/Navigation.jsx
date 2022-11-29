import { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

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
import CameraRollIcon from "@mui/icons-material/CameraRoll";
import { Box } from "@mui/system";

import AuthGuard from "../../guard/AuthGuard";
import adminimage from "../../images/adminimage.png";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
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
  const role_id = localStorage.getItem("role_id");
  const setclose = () => {
    setOpen(false);
  };
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography
          sx={{ display: { xs: "none", sm: "block" }, color: "#81B441", }}
        >
          PayRol
        </Typography>
        <CameraRollIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="search..." />
        </Search>
        <Icons>
          {role_id <= 3 && (
            <Button style={{ backgroundColor: "#81B441", color: "white" }}>
              <Link style={{ color: "white", textDecoration:"none" }} to="/signup">
                Add Member
              </Link>
            </Button>
          )}
          <Avatar
            src={`${adminimage}`}
            sx={{ width: 30, height: 30 }}
            onClick={() => setOpen(true)}
          />
        </Icons>
        <UserIcons onClick={() => setOpen(true)}>
          <Avatar src={`${adminimage}`} sx={{ width: 30, height: 30 }} />
        </UserIcons>
      </StyledToolbar>
      <Menu
        open={open}
        onClose={setclose}
        aria-labelledby="basic-demo-button"
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
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
