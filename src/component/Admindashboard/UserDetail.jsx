import * as React from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import axios from "axios";
import { Link } from "react-router-dom";

export default function UserDetail({ open }) {
  // const allEmployeesData = JSON.parse(localStorage.getItem("allEmployeesData"));
  //get all employees list :
  const [allEmployeesData, setAllEmployeesData] = React.useState();
  React.useEffect(() => {
    axios
      .get(`http://3.108.151.73/api/employees`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setAllEmployeesData(res);
      });
  }, []);

  //to delete a user inside a table
  const handleDelete = (id) => {
    axios
      .delete(`http://3.108.151.73/api/employees/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        console.log("delete", res)
      });
  };
  return (
    <>
      {allEmployeesData && (
        <Box
          component="div"
          className="main-dash"
          sx={{ marginLeft: !open ? "200px" : "50px", padding: "1px 16px" }}
        >
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Employee Id</TableCell>
                  <TableCell align="left">Name</TableCell>
                  <TableCell align="left">Email</TableCell>
                  <TableCell align="left">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {allEmployeesData.data.data.map((row, i) => (
                  <TableRow
                    key={i}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell align="left">{row.name}</TableCell>
                    <TableCell align="left">{row.email}</TableCell>
                    <TableCell align="left">
                      <Button
                        variant="contained"
                        style={{ backgroundColor: "#81B441" }}
                      >
                        <Link to={"/edit/" + row.id}>Edit</Link>
                      </Button>
                      {row.role_id > 1 ? (
                        <Button
                          onClick={() => handleDelete(row.id)}
                          variant="contained"
                          style={{ backgroundColor: "red" }}
                        >
                          Delete
                        </Button>
                      ) : (
                        ""
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      )}
    </>
  );
}
