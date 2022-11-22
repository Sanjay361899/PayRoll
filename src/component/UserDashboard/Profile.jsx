// import { Box } from '@mui/material'
// import React from 'react'

// const Profile = ({open}) => {
//   return (
  //   <Box
  //   component="div"
  //   className="main-dash"
  //   sx={{ marginLeft: !open?"200px":"50px", padding: "1px 16px", position: "relative" }}
  // >
//   Profile</Box>
//   )
// }

// export default Profile



import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



export default function Profile({open}) {
  return (
    <Box
    component="div"
    className="main-dash"
    sx={{ marginTop:"160px",marginLeft: !open?"200px":"50px", padding: "1px 16px", alignItems:'center', justifyItems:"center" }}
  >
    <Card sx={{ maxWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          user Profile
        </Typography>
        
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </Box>
  );
}