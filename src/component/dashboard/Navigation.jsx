import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import AuthGuard from "../../guard/AuthGuard";
import { hover } from "@testing-library/user-event/dist/hover";

function appBarLabel(label) {
  return (
    <Toolbar>
      <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
        {label}
      </Typography>
    </Toolbar>
  );
}
export default function Navigation() {
  let { Logout } = React.useContext(AuthGuard);
  return (
    <Stack sx={{ mt: -2.5, backgroundColor: "black", opacity: 7 }}>
      <AppBar position="static" sx={{ backgroundColor: "black", opacity: 7.9 }}>
        {appBarLabel("PayRol")}
        <Button
          sx={{
            backgroundColor: "white",
            borderRadius: 0,
            color: "black",
            "&:hover": {
              color: "white",
            },
          }}
          onClick={Logout}
        >
          LogOut
        </Button>
      </AppBar>
    </Stack>
  );
}
