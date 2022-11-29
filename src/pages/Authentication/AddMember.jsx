import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import AuthGuard from "../../guard/AuthGuard";
import axios from "axios";

let rolesInfo;
export default function SignUp({ open }) {
  const [role, setRole] = React.useState([]);
  const [img, setImg] = React.useState();
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

  const fileupload = (e) => {
    setImg(e.target.input.files[0]);
  };
  console.log("AuthGuard Img Uploader=========", img);
  return (
    <>
      {role_id <= 3 && (
        <div     style={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginLeft: !open ? "200px" : "50px",
        }}>
                  <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Sign up
                </Typography>
                
            <Box
              sx={{
                marginTop: 8,
             
                // alignItems: "center",
                marginLeft: !open ? "200px" : "50px",
              }}
            >
       
              <Box
            sx={{ mt: 3
              }}
                component="form"
                noValidate
                onSubmit={RegisterUser}
              >
                <Box sx={{   display: "flex",
                flexDirection: "column",}}>
                <Grid container spacing={2}>
                  <Grid item xs={10}>
                    <TextField
                      autoComplete="name"
                      name="name"
                      required
        
                      id="name"
                      label="Name"
                      autoFocus
                    />
                  </Grid>

                  <Grid item xs={10}>
                    <TextField
                      required
                  
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                    />
                  </Grid>
                  <Grid item xs={10}>
                    <TextField
                      required
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="password"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl required sx={{ minWidth: 200 }}>
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
                </Box>
                <Box style={{   display: "flex",
                flexDirection: "row",}}>
                <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                      required
                      name="about_me"
                      label="about_me"
                      type="varchar"
                      id="about_me"
                      autoComplete="about_me"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      name="address"
                      label="address"
                      type="varchar"
                      id="address"
                      autoComplete="address"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      name="gender"
                      label="gender"
                      type="text"
                      id="gender"
                      autoComplete="gender"
                    />
                  </Grid>
                  </Grid>
                </Box>
                <Box>
                <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                      required
                      name="contact_number"
                      label="contact_number"
                      type="varchar"
                      id="contact_number"
                      autoComplete="contact_number"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      name="emergency_contact_number"
                      label="emergency_contact_number"
                      type="varchar"
                      id="emergency_contact_number"
                      autoComplete="emergency_contact_number"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      name="date_of_birth"
                      // label="date_of_birth"
                      type="date"
                      id="date_of_birth"
                      autoComplete="date_of_birth"
                    />
                  </Grid>
                  </Grid>
                </Box>
                <Box>
                <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                      required
                      name="department_id"
                      label="department_id"
                      type="number"
                      id="department_id"
                      autoComplete="department_id"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      name="designation_id"
                      label="designation_id"
                      type="number"
                      id="designation_id"
                      autoComplete="designation_id"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      name="employee_id"
                      label="employee_id"
                      type="varchar"
                      id="employee_id"
                      autoComplete="employee_id"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      name="employee_status_id"
                      label="employee_status_id"
                      type="varchar"
                      id="employee_status_id"
                      autoComplete="employee_status_id"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      name="profile_picture"
                      label="profile_picture"
                      type="file"
                      id="profile_picture"
                      autoComplete="profile_picture"
                    />
                  </Grid>
                  </Grid>
                </Box>
                <Button
                  type="submit"
                
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Add Employee
                </Button>
                </Box>
           
            </Box>
       </div>
      )}
    </>
  );
}
