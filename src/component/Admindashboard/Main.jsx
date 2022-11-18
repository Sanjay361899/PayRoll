import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import GroupIcon from "@mui/icons-material/Group";
import PersonOffIcon from "@mui/icons-material/PersonOff";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

const Main = () => {
  const totalEmployeesExist = JSON.parse(
    localStorage.getItem("allEmployeesData")
  )
    ? JSON.parse(localStorage.getItem("allEmployeesData"))
    : 0;
  const [punchTime, setPunchTime] = useState();
  const [punch, setPunch] = useState(true);
  return (
    <Box
      component="div"
      className="main-dash"
      sx={{marginLeft:"200px", padding: "1px 16px", position: "relative" }}
    >
      <Button
        sx={{ position: "absolute", right: "30px", top: "10px", zIndex: 9999, backgroundColor:"#262626" }}
        onClick={() => {
          setPunchTime(new Date().toLocaleString());
          setPunch(!punch);
        }}
        variant="contained"
        color={punch ? "success" : "secondary"}
      >
        {punch ? "punchIn" : "punchOut"}
      </Button>
      {!punchTime
        ? console.log("nothing in punchTime")
        : console.log("punchTime time", punchTime)}

      {/* cards sections showing number of employes  */}

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
                 <Typography variant="h5" style={{color:"greenyellow"}}> {totalEmployeesExist.data.length} </Typography>
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