import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import  AuthGuard from '../guard/AuthGuard'

const PrivateRoutes = () => {
  let {user}= useContext(AuthGuard)
  let authentication= user;
  return ( 
    authentication? <Outlet/> : <Navigate to='/login'/>
  )
    
}

export default PrivateRoutes