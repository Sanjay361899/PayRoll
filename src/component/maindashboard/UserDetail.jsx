import { CssBaseline, Paper } from "@mui/material";
import Navigation from "../templatedashboard/Navigation";
import SideBar from "../templatedashboard/SideBar";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function UserDetail() {
  return (
    <div>
 
    </div>
  );
}
