import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
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

  const onChange = (event) => {
    const value = event.target.value.replace(
      "C:\\fakepath\\",
      "C:\\react js\\loginnisation\\src\\images\\"
    );

    // this will return C:\fakepath\somefile.ext
    console.log(value);

    const files = event.target.files;

    //this will return an ARRAY of File object
    console.log(`/${files[0].name}`);
  };

  return (
    <>
      {role_id <= 3 && (
        <div
          style={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginLeft: !open ? "30px" : "30px",
            marginRight: "30px",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "#81B441" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Add Member
          </Typography>

          <Box
            sx={{
              marginTop: 8,

              // alignItems: "center",
              marginLeft: !open ? "200px" : "50px",
            }}
          >
            <Box
              sx={{ mt: 3 }}
              component="form"
              noValidate
              onSubmit={RegisterUser}
            >
              <Grid container sx={{ marginBottom: "20px" }} spacing={2}>
                <Grid item xs={12} sm={6} md={3}>
                  <TextField
                    autoComplete="name"
                    fullWidth
                    name="name"
                    required
                    id="name"
                    label="Name"
                    autoFocus
                    sx={{ marginBottom: "20px" }}
                  />

                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    sx={{ marginBottom: "20px" }}
                  />
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="password"
                    sx={{ marginBottom: "20px", marginRight: "20px" }}
                  />
                  <FormControl
                    required
                    fullWidth
                    sx={{ marginBottom: "20px", minWidth: "100px" }}
                  >
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
                <Grid item xs={12} sm={6} md={3}>
                  <TextField
                    required
                    fullWidth
                    name="about_me"
                    label="about_me"
                    type="varchar"
                    id="about_me"
                    autoComplete="about_me"
                    sx={{ marginBottom: "20px" }}
                  />
                  <TextField
                    required
                    fullWidth
                    name="address"
                    label="address"
                    type="varchar"
                    sx={{ marginBottom: "20px" }}
                    id="address"
                    autoComplete="address"
                  />
                  <TextField
                    required
                    fullWidth
                    name="gender"
                    label="gender"
                    type="text"
                    sx={{ marginBottom: "20px" }}
                    id="gender"
                    autoComplete="gender"
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <TextField
                    required
                    fullWidth
                    name="contact_number"
                    label="contact_number"
                    type="varchar"
                    sx={{ marginBottom: "20px" }}
                    id="contact_number"
                    autoComplete="contact_number"
                  />
                  <TextField
                    required
                    fullWidth
                    name="emergency_contact_number"
                    label="emergency_contact_number"
                    type="varchar"
                    sx={{ marginBottom: "20px" }}
                    id="emergency_contact_number"
                    autoComplete="emergency_contact_number"
                  />
                  <TextField
                    required
                    fullWidth
                    name="date_of_birth"
                    sx={{ marginBottom: "20px" }}
                    // label="date_of_birth"
                    type="date"
                    id="date_of_birth"
                    autoComplete="date_of_birth"
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <TextField
                    required
                    fullWidth
                    name="department_id"
                    sx={{ marginBottom: "20px" }}
                    label="department_id"
                    type="number"
                    id="department_id"
                    autoComplete="department_id"
                  />
                  <TextField
                    required
                    fullWidth
                    name="designation_id"
                    label="designation_id"
                    sx={{ marginBottom: "20px" }}
                    type="number"
                    id="designation_id"
                    autoComplete="designation_id"
                  />
                  <TextField
                    required
                    fullWidth
                    name="employee_id"
                    label="employee_id"
                    sx={{ marginBottom: "20px" }}
                    type="varchar"
                    id="employee_id"
                    autoComplete="employee_id"
                  />
                  <TextField
                    required
                    fullWidth
                    name="employee_status_id"
                    label="employee_status_id"
                    sx={{ marginBottom: "20px" }}
                    type="varchar"
                    id="employee_status_id"
                    autoComplete="employee_status_id"
                  />
                  <Button
                    variant="contained"
                    component="label"
                    sx={{ marginBottom: "20px", marginLeft: "40px" }}
                  >
                    photo
                    <input
                      required
                      fullWidth
                      name="profile_picture"
                      label="profile_picture"
                      type="file"
                      id="profile_picture"
                      autoComplete="profile_picture"
                      onChange={onChange}
                      hidden
                    />
                  </Button>
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                sx={{
                  mt: 3,
                  mb: 2,
                  color: "#262626",
                  backgroundColor: "#81B441",
                }}
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
