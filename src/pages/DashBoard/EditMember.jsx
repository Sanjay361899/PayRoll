import React, { useState } from 'react'

import { Box } from '@mui/system';

import Navigation from '../../component/templatedashboard/Navigation';
import SideBar from '../../component/templatedashboard/SideBar';
import EditUserDetail from '../../component/CRUD/EditUserDetail';


const EditMember = () => {
    const [open , setOpen]=useState(true)

    return (
      <Box>
        <Navigation/>
      
          <SideBar onChange={(value)=>setOpen(value)}/>
          <EditUserDetail open={open}/>
          
      </Box>
    
    );
}

export default EditMember