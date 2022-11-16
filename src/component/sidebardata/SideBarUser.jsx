import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import DescriptionIcon from "@mui/icons-material/Description";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
export const SideBarUser = (role_id) => {
  
  console.log("role-id in data sidebar:",role_id)

  if(role_id === "1") 
     {
        return([
        {
          title: "Home",
          path: "/",
          icons: <HomeIcon />,
        },
        {
          title: "Details",
          path: "/details",
          icons: <DescriptionIcon />,
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
        return(null)
      }
}

