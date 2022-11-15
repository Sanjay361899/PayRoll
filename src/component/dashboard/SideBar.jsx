import React, { useState } from "react";
import FlareIcon from "@mui/icons-material/Flare";
import { SideBarUser } from "../../pages/DashBoard/sidebardata/SideBarUser";
 import adminimage from '../../images/adminimage.png'
import { Link, NavLink } from "react-router-dom";
const SideBar = ({children}) => {
    const [isOpen , setIsOpen]= useState(false);
    const toggle= ()=>setIsOpen(!isOpen);
  return (
    <div className="container">
      <div style={{width:isOpen?"300px":"50px", backgroundColor:isOpen?"red":"black"}} className="sidebar">
        <div style={{width:isOpen?"200px":"50px"}} className="top-section">
          <img style={{display:isOpen?"block":"none"}} className="logo" src={adminimage} alt="logo"/>
          <div style={{marginLeft:isOpen?"100px":"0px"}} className="bars">
            <FlareIcon onMouseOver={toggle}  />
          </div>
        </div>
        {
            SideBarUser.map((items, index)=>(
                 <NavLink to={items.path} className='link' key={index} >
                    <div className="icon">{items.icons}</div>
                    <div style={{display: isOpen?"block":"none"}} className="link_text">{items.title}</div>
                 </NavLink>
            ))
        }
      </div>
      <main>{children}</main>
    </div>
  );
};

export default SideBar;
