import * as React from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function Profile({ open }) {
  const employee_id=localStorage.getItem("user_id");
  const employee_detail=JSON.parse(localStorage.getItem("user_data"))
  return (
    <div style={{display:"flex", justifyContent:"center", height:"100vh" }}>
      <Box
        component="div"
        className="main-dash"
        sx={{
          marginTop: "160px",
          marginLeft: !open ? "200px" : "50px",
          padding: "1px 16px",
          alignItems: "center",
          justifyItems: "center",
        }}
      >
        <Card sx={{ maxWidth: 1000, maxHeight: 500, alignItems:"center", justifyContent:"center" }}>
          <CardContent sx={{display:"flex"}}>
            <Typography
              sx={{ fontSize: 20, fontWeight:"bold", margin:2 }}
              color="text.secondary"
              gutterBottom
              >
               Profile
            </Typography>

              <CardContent>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {employee_detail.name}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {employee_detail.email}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {employee_detail.about_me}

            </Typography>
            </CardContent>
            <CardContent>
            <Typography variant="body2">
          e.c.no:  {employee_detail.emergency_contact_number}
            </Typography>
            <Typography variant="body2">
          c.no:  {employee_detail.contact_number}
            </Typography>
            </CardContent>
          </CardContent>
          <CardActions sx={{alignItem:"center", justifyContent:"center"}}>
            <Button variant="contained" style={{color:"white", backgroundColor:"#81B441"}} size="small"><Link style={{color:"white", backgroundColor:"#81B441", textDecoration:"none"}} to={`/edit/${employee_id}`} >Update Details</Link></Button>
          </CardActions>
        </Card>
      </Box>
    </div>
  );
}