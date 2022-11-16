import {
  Box,
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
  const [punchTime, setPunchTime] = useState();
  const [punch, setPunch]= useState(true)
  return (
    <Box component="div" className="main-dash">
      <Button
        onClick={() => {
          setPunchTime(new Date().toLocaleString());
          setPunch(!punch)
        }}
        variant="contained"
        color ={ punch ? "success":  "secondary" }
      >
        { punch ?"punchIn" : "punchOut"}
      </Button>
      {!punchTime
        ? console.log("nothing in punchTime")
        : console.log("punchTime time", punchTime)}

      {/* cards sections showing number of employes  */}

      <Box component="div" sx={{ display:"flex", flexWrap: 'wrap', flexGrow:1 }} >
        <Card sx={{ maxWidth: 1200, ml:2, mt:2}}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Total Employees
              <button className="btn btn-danger">abc</button>
            </Typography>
            <Typography variant="body2">
              <GroupIcon /> <h3 >{user}</h3>
            </Typography>
          </CardContent>
          
        </Card>

        {/* showing Present Employees */}

        <Card sx={{ maxWidth: 1200, ml:2, mt:2 }}>
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

        <Card sx={{ maxWidth: 1200, ml:2, mt:2 }}>
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
      </Box>
      </Box>
  );
};

export default Main;
