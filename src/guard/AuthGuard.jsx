import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Loader from "react-js-loader";
const AuthGuard = createContext();
export default AuthGuard;

export const AuthProvider = ({ children }) => {
  // useEffect(()=>{
  //   console.log('roles useeffect:',roles);
  // },[])
  let [authToken, setAuthToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : null
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
        console.log("api res", data);
        setAuthToken(data);
        localStorage.setItem("token", data.access_token);
        localStorage.setItem("role_id",data.user.role_id);
        setUser(localStorage.getItem("token"));
        navigate("/");
      });
  };
  let roles = async () => {
    axios
      .get("http://3.108.151.73/api/roles", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        return res
      })
      .catch((error) => {
        console.error(error);
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
          password_confirmation:e.target.password.value,
          role_id: e.target.role_id.value,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
        console.log(res, "register");
        navigate("/");
      });
  };
  let Logout = () => {
    setAuthToken(null);
    setUser(null);
    localStorage.removeItem("token");
    navigate("/login");
  };
  let contextData = {
    loginUser: loginUser,
    user: user,
    Logout: Logout,
    roles: roles,
    RegisterUser: RegisterUser,
  };
  return (
    <AuthGuard.Provider value={contextData}>{children}</AuthGuard.Provider>
  );
};
