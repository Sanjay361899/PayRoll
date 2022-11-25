import React, { useState } from 'react'

import { Box } from '@mui/system';

import Navigation from '../../component/templatedashboard/Navigation';
import SideBar from '../../component/templatedashboard/SideBar';
import SignUp from '../Authentication/SignUp';

const AddMember = () => {
    const [open , setOpen]=useState(true)

    return (
      <Box>
        <Navigation/>
      
          <SideBar onChange={(value)=>setOpen(value)}/>
          <SignUp open={open}/>
          
      </Box>
    
    );
}

export default AddMember