import {
  Button,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import GroupIcon from "@mui/icons-material/Group";
import PersonOffIcon from "@mui/icons-material/PersonOff";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import AuthGuard from "../../guard/AuthGuard";
import axios from "axios";

const Main = () => {
    const[user, setUser]=useState();
    useEffect(()=>{

         axios
          .get("http://3.108.151.73/api/all-employees", {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
          .then((res) => {
            console.log("auth all user console:", res.data.data.length);
            setUser(res.data.data.length);
          });
      },[])
  const [punch, setPunch] = useState();

  return (
    <div className="main-dash">
      <Button
        sx={{ display: "flex" }}
        onClick={() => {
          setPunch(new Date().toLocaleString());
        }}
        variant="contained"
        color="success"
      >
        {!punch ? "PunchIn" : "PunchOut"}
      </Button>
      {!punch
        ? console.log("nothing in punch")
        : console.log("punch time", punch)}

      {/* cards sections showing number of employes  */}

      <div style={{ display: "flex" }}>
        <Card sx={{ maxWidth: 1100, ml: 5, mt: 2 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Total Employees
            </Typography>
            <Typography variant="body2">
              <GroupIcon /> <h3 >{user}</h3>
            </Typography>
          </CardContent>
        </Card>

        {/* showing Present Employees */}

        <Card sx={{ maxWidth: 1100, ml: 5, mt: 2 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Present Employees
            </Typography>
            <Typography variant="body2">
              <PersonAddIcon />
            </Typography>
          </CardContent>
        </Card>

        {/* Absent Employees */}

        <Card sx={{ maxWidth: 1100, ml: 5, mt: 2  }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Absent Employees
            </Typography>
            <Typography variant="body2">
              <PersonOffIcon />
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Main;
