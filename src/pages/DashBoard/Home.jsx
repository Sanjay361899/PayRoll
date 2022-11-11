import React, { useContext } from "react";
import SideBar from "../../component/dashboard/SideBar";
import AuthGuard from "../../guard/AuthGuard";

const Home = () => {
  let { Logout } = useContext(AuthGuard);
  return (
    <div>
      <SideBar>
      <button onClick={Logout}>logout</button>
      <br />
      <h1> Home IS HERE</h1>
      </SideBar>
    </div>
  );
};

export default Home;
