import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box } from "@mui/system";

import axios from "axios";
import { Password } from "@mui/icons-material";
const EditUserDetail = ({ open }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [emp, setEmp] = useState({
    id: "",
    name: "",
    email: "",
    employee_id: "",
    designation_id: "",
    department_id: "",
    employee_status_id:"",
    gender: "",
    about_me: "",
    contact_number: "",
    emergency_contact_number: "",
    address: "",
    date_of_birth: "",
    profile_picture: "",
    role_id: "",
  });
  let {
    name,
    email,
    contact_number,
    employee_id,
    designation_id,
    department_id,
    gender,
    about_me,
    emergency_contact_number,
    address,
    date_of_birth,
    role_id,
    employee_status_id,
  } = emp;

  // GetDATA through it at first
  useEffect(() => {
    const fetchdata = async () =>
      await axios
        .get(`http://3.108.151.73/api/employees/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          console.log(res);
          setEmp(res.data);
        });
    fetchdata();
  }, []);

  // this will show data in form which is required to be update
  function handleChange(e) {
    setEmp({
      ...emp,
      [e.target.name]: e.target.value,
    });
  }

  //this function will put updating on particular employees field

  function handleEditForm(e) {
    e.preventDefault();
    fetch(`http://3.108.151.73/api/employees/${id}`, {
      method: "PUT",

      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,

        "Content-Type": "application/json",
      },
      body: JSON.stringify(emp),
    }).then((resp) => {
      console.log(resp);
      navigate("/");
    });
  }

  return (
    <Box
      component="div"
      className="main-dash"
      sx={{ marginLeft: !open ? "200px" : "50px", padding: "1px 16px" }}
    >
  <div class="container">
  <div class="row">
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          margin: 2,
          padding: 2,
        }}
        onSubmit={handleEditForm}
      >
   
    <h2 class="text-center my-3">Edit Employees Details</h2>
      <div class="row">
        <div class="form-group col-md-3">
          <label for="exampleInputEmail1 ">Name</label>
          <input onChange={handleChange} type="text" value={name} name="name" class="form-control"  />
        </div>
        {/* <div class="col-md-1"></div> */}
        <div class="form-group col-md-4">
          <label for="exampleInputPassword1">Role Id</label>
          <input onChange={handleChange} value={role_id} type="number" name="role_id" class="form-control"  />
        </div>
        <div class="col-md-1"></div>
        <div class="form-group col-md-3">
          <label for="exampleInputPassword1">Email</label>
          <input onChange={handleChange} type="email" value={email} name="email" class="form-control"    placeholder="abc@gmail.com"/>
        </div>
      

      {/* <div class="form-group col-md-4 my-3">
        <label for="exampleInputEmail1 ">Password</label>
        <input onChange={handleChange} value={Password} type="password" class="form-control" />
      </div> */}
      {/* <div class="col-md-1"></div>
      <div class="form-group col-md-3 my-3">
        <label for="exampleInputPassword1">Confirm Password</label>
        <input onChange={handleChange} type="password_confirmation " class="form-control"  />
      </div> */}
      <div class="col-md-1"></div>
      <div class="form-group col-md-3 my-3">
        <label for="exampleInputPassword1">Date Of Birth</label>
        <input onChange={handleChange} type="date" class="form-control" value={date_of_birth} name="date_of_birth"  placeholder="YYYY/MM/DD"/>
      </div>

      <div class="form-group col-md-4 my-3">
        <label for="exampleInputEmail1 ">Address</label>
        <input onChange={handleChange} value={address} type="varchar" name="address" class="form-control" />
      </div>
      <div class="col-md-1"></div>
      <div class="form-group col-md-3 my-3">
        <label for="exampleInputPassword1">Contact Number</label>
        <input onChange={handleChange} type="number" value={contact_number} name="contact_number" class="form-control"  />
      </div>
      <div class="col-md-1"></div>
      <div class="form-group col-md-3 my-3">
        <label for="exampleInputPassword1">Emergency Contact Number</label>
        <input onChange={handleChange} value={emergency_contact_number} type="text" name="emergency_contact_number" class="form-control"    />
      </div>

      <div class="form-group col-md-4 my-3">
        <label for="exampleInputEmail1 ">Employee ID </label>
        <input onChange={handleChange} value={employee_id} type="varchar" name="employee_id" class="form-control" />
      </div>
      <div class="col-md-1"></div>
      <div class="form-group col-md-3 my-3">
        <label for="exampleInputPassword1">Designation ID</label>
        <input onChange={handleChange} type="varchar" value={designation_id} name="designation_id" class="form-control" />
      </div>
      <div class="col-md-1"></div>
      <div class="form-group col-md-3 my-3">
        <label for="exampleInputPassword1">Department ID</label>
        <input onChange={handleChange} type="varchar" value={department_id} name="department_id" class="form-control" />
      </div>
      

      <div class="form-group col-md-4 my-3">
        <label for="exampleInputEmail1 ">Employee Status ID </label>
        <input onChange={handleChange} value={employee_status_id} type="varchar" name="employee_status_id" class="form-control" />
      </div>
      <div class="col-md-1"></div>
      <div class="form-group col-md-3 my-3">
        <label for="exampleInputPassword1">Gender </label>
        <input onChange={handleChange} value={gender} type="text" name="gender" class="form-control"/>
      </div>
      <div class="col-md-1"></div>
      <div class="form-group col-md-3 my-3">
        <label for="exampleInputPassword1">About Me</label>
        <input onChange={handleChange} value={about_me} type="text" name="about_me" class="form-control" />
      </div>


      {/* <div class="form-group col-md-4 my-3">
        <label for="exampleInputEmail1 ">Gender</label>
        <input onChange={handleChange} type="password" class="form-control"/>
      </div> */}
      {/* <div class="col-md-1"></div>
      <div class="form-group col-md-3 my-3">
        <label for="exampleInputPassword1">About Me </label>
        <input onChange={handleChange} type="password_confirmation " class="form-control"/>
      </div> */}
      {/* <div class="col-md-1"></div>
      <div class="form-group col-md-3 my-3">
        <label for="exampleInputPassword1">Profile Picture</label>
        <input onChange={handleChange} type="file" class="form-control" />
      </div> */}

    </div>

  
    


        <button
          style={{
            margin: 8,
            backgroundColor: "#81B441",
            textDecoration: "none",
            color: "white",
          }}
          type="submit"
        >
          Submit Changes
        </button>
      </form>
      </div>
     </div>
    </Box>
  );
};

export default EditUserDetail;
