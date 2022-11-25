import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import loginimage from "../../images/loginimage.png";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
} from "@mui/material";
import CurrencyRupeeSharpIcon from "@mui/icons-material/CurrencyRupeeSharp";
import { Link } from "react-router-dom";
import AuthGuard from "../../guard/AuthGuard";
import axios from "axios";

const theme = createTheme();
let rolesInfo;
export default function SignUp({open}) {
  const [role, setRole] = React.useState([]);
  React.useEffect(() => {
    axios
      .get("http://3.108.151.73/api/roles", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((result) => {
        setRole(result);
        rolesInfo = result;
      });
  }, []);
  const role_id = localStorage.getItem("role_id");
  let { RegisterUser } = React.useContext(AuthGuard);

  return (
    <>
      {role_id <= 3 && (
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="sm">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginLeft: !open ? "200px" : "50px",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign up
              </Typography>
              <Box
              
                component="form"
                noValidate
                onSubmit={RegisterUser}
                sx={{ mt: 3 }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      autoComplete="name"
                      name="name"
                      required
                      fullWidth
                      id="name"
                      label="Name"
                      autoFocus
                    />
                  </Grid>
                  <Grid>  
                  <TextField
                      required
                      fullWidth
                      type="file"
                      id="file"
                      label="Email Address"
                      name="file"
                      autoComplete="file"
                    />         
                  </Grid>
  
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="password"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl required fullWidth sx={{ minWidth: 120 }}>
                      <InputLabel>Select Roles</InputLabel>
                      <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                      >
                        {rolesInfo &&
                          rolesInfo.data.data.map((role) => (
                            <MenuItem value={role.id}>
                              <em>{role.name}</em>
                            </MenuItem>
                          ))}
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign Up
                </Button>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      )}
    </>
  );
}
