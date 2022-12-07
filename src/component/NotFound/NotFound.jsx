import { Home } from '@mui/icons-material'
import { Button} from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (<>   <div style={{ display:"flex",height:"100vh", width:"100%", flexDirection:"column" , alignItems:"center",  justifyContent:"center"}}>
        <img src='https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif'/>
        <Button variant='contained' color='success' sx={{textDecoration:"none"}}><Link to="/" style={{textDecoration:"none", color:"white"}}>Home</Link> </Button>
    </div>
        </>
 )
}

export default NotFound