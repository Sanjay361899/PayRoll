import * as React from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Profile({ open }) {
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
          <CardContent>
            <Typography
              sx={{ fontSize: 20, fontWeight:"bold", margin:2 }}
              color="text.secondary"
              gutterBottom
            >
               Profile
            </Typography>

            <Typography sx={{ mb: 1.5 }} color="text.secondary">
            </Typography>
            <Typography variant="body2">
              <br />
            </Typography>
          </CardContent>
          <CardActions sx={{alignItem:"center", justifyContent:"center"}}>
            <Button variant="contained" size="small">Update Details</Button>
          </CardActions>
        </Card>
      </Box>
    </div>
  );
}