import React, { useEffect, useState } from "react";

import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import GroupIcon from "@mui/icons-material/Group";
import PersonOffIcon from "@mui/icons-material/PersonOff";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import axios from "axios";
import { format } from "date-fns";
const Main = ({ open }) => {
  const [punchTime, setPunchTime] = useState("");
  const [punch, setPunch] = useState(true);
  const [ip, setIP] = useState("");

  useEffect(() => {
    setPunchTime(format(new Date(), "yyyy-MM-dd kk:mm:ss"));
    axios.get("https://geolocation-db.com/json/").then((res) => {
      console.log(res, "ip address");
      setIP(res.data.IPv4);
    });
  }, []);

  const totalEmployeesExist = JSON.parse(
    localStorage.getItem("allEmployeesData")
  )
    ? JSON.parse(localStorage.getItem("allEmployeesData"))
    : 0;

  //posting attendance in an api
  const setApi = async () => {
    await axios.post(
      "http://3.108.151.73/api/employees-attendence",
      {
        punch_in: punchTime,
        punch_in_ip: ip,
        id: localStorage.getItem("user_id"),
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );
  };


  
  return (
    <Box
      component="div"
      className="main-dash"
      sx={{
        marginLeft: !open ? "200px" : "50px",
        padding: "1px 16px",
        position: "relative",
      }}
    >
      <Button
        sx={{
          position: "absolute",
          right: "30px",
          top: "10px",
          backgroundColor: "#262626",
        }}
        onClick={() => {
          setPunch(!punch);
          setApi();
        }}
        variant="contained"
        color={punch ? "success" : "secondary"}
      >
        {punch ? "punchIn" : "punchOut"}
      </Button>
      {punchTime && console.log("punchTime time", punchTime)}
      {ip && console.log(ip)}
      <Box
        component="div"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          flexGrow: 1,
          marginTop: "56px",
        }}
      >
        {totalEmployeesExist ? (
          <>
            <Card sx={{ maxWidth: 1200, flexGrow: 1, ml: 2, mt: 2 }}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Total Employees
                </Typography>
                <Typography variant="body2">
                  <GroupIcon />
                </Typography>
                <Typography style={{ color: "#53933C" }}>
                  {" "}
                  {totalEmployeesExist.data.length}{" "}
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ maxWidth: 1200, flexGrow: 1, ml: 2, mt: 2 }}>
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
            <Card sx={{ maxWidth: 1200, flexGrow: 1, ml: 2, mt: 2 }}>
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
          </>
        ) : (
          <>
            <Card sx={{ maxWidth: 1200, flexGrow: 1, ml: 2, mt: 2 }}>
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
          </>
        )}
      </Box>
    </Box>
  );
};

export default Main;
