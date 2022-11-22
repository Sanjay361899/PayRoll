import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GroupsIcon from '@mui/icons-material/Groups';
export const SideBarUser = (role_id) => {
  

  if(role_id <= "3") 
     {
        return([
        {
          title: "Home",
          path: "/",
          icons: <HomeIcon />,
        },
        {
          title: "Profile",
          path: "/profile",
          icons: <AccountCircleIcon />,
        },
        {
          title: "Details",
          path: "/details",
          icons: <GroupsIcon />,
        },
        {
          title: "Attendance",
          path: "/",
          icons: <CalendarMonthIcon />,
        },
        {
          title: "Company Calender",
          path: "/",
          icons: <CalendarMonthIcon />,
        },
      ])
    }
      else
      {
        return([
          {
            title: "Home",
            path: "/",
            icons: <HomeIcon />,
          },{
            title: "Profile",
            path: "/profile",
            icons: <AccountCircleIcon />,
          },
          {
            title: "Attendance",
            path: "/",
            icons: <CalendarMonthIcon />,
          },
          {
            title: "Company Calender",
            path: "/",
            icons: <CalendarMonthIcon />,
          },
        ])
      }
}

