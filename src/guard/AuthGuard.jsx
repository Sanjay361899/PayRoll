import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { Await, Navigate, useNavigate } from "react-router-dom";
import Loader from "react-js-loader";
import img from "../images/logo.png"
const AuthGuard = createContext();
export default AuthGuard;

export const AuthProvider = ({ children }) => {
  let [roleid, setRoleid] = useState(
    localStorage.getItem("role_id") ? localStorage.getItem("role_id") : null
  );
  let [user, setUser] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : null
  );
  const navigate = useNavigate("");
  let loginUser = async (e) => {
    e.preventDefault();
    console.log("login auth==", e)

    await axios
      .post("http://3.108.151.73/api/login", {
        email: e.target.email.value,
        password: e.target.password.value,
      })
      .then((res) => {
        const data = res.data;
        console.log("api res", data);
      data.personalUserData[0].role_id<4?localStorage.setItem(
          "allEmployeesData",
          JSON.stringify(data.allEmployees)
        ):console.log("User")
        localStorage.setItem("token", data.access_token);
        localStorage.setItem("role_id", data.personalUserData[0].role_id);
        setRoleid(localStorage.getItem("role_id"));
        setUser(localStorage.getItem("token"));
        navigate("/");
      });
  };

  let RegisterUser = async (e) => {
    e.preventDefault();
    console.log("register authguard",e.target.file.value)
    await axios
      .post(
        "http://3.108.151.73/api/employees",
        {
          name:"demo12",
          email: "demo1123445@gmail.com",
          password: 12345678,
          password_confirmation: 12345678,
          role_id: 2,
          employee_id:"F124",
          designation_id:2,
          department_id:2,
          employee_status_id:2,
          gender:"female",
          about_me:"Developer",
          contact_number:5645645649,
          emergency_contact_number:1231231251,
          address:"aaass",
          date_of_birth:'2011-11-15',
         profile_picture:`http://3.108.151.73/employee/profileImages/Capture_1669292654.PNG`,
        },

        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        navigate("/");
      })
      .catch((error) => {
        console.log("error:", error);
      });
  };

  let Logout = () => {
    setRoleid(null);
    setUser(null);
    localStorage.clear();
    navigate("/login");
  };
  let contextData = {
    loginUser: loginUser,
    roleid: roleid,
    user: user,
    Logout: Logout,
    RegisterUser: RegisterUser,
  };
  return (
    <AuthGuard.Provider value={contextData}>{children}</AuthGuard.Provider>
  );
};