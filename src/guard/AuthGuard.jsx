import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { Await, Navigate, useNavigate } from "react-router-dom";
import Loader from "react-js-loader";
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
    await axios
      .post(
        "http://3.108.151.73/api/register",
        {
          name: e.target.name.value,
          email: e.target.email.value,
          password: e.target.password.value,
          password_confirmation: e.target.password.value,
          role_id: e.target.role_id.value,
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
