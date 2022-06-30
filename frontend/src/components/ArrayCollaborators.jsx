import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Theo from "../assets/THEOGOSSELIN.png";
import Coralie from "../assets/CORALIE.png";
import Julieta from "../assets/JULIETA.png";
import "../styles/Collaborators.css";

function createData(
  picture,
  jointprojects,
  stacks,
  agency,
  contact,
  iconUser,
  iconMail
) {
  return {
    picture,
    jointprojects,
    stacks,
    agency,
    contact,
    iconUser,
    iconMail,
  };
}

const rows = [
  createData({
    id: 1,
    picture: Theo,
    name: "Theo",
    jointprojects: "Aeronautics",
    stacks: "JavaScript",
    agency: "Toulouse",
    contact: "theogosselin@apside.com",
    iconUser: AccountCircleIcon,
    iconMail: MailOutlineIcon,
  }),
  createData({
    id: 2,
    picture: Coralie,
    name: "Coralie",
    jointprojects: "Environment",
    stacks: "JavaScript",
    agency: "Lyon",
    contact: "coralieperez@apside.com",
    iconUser: AccountCircleIcon,
    iconMail: MailOutlineIcon,
  }),
  createData({
    id: 3,
    picture: Julieta,
    name: "Julieta Caldera",
    jointprojects: "Environment",
    stacks: "JavaScript",
    agency: "Paris",
    contact: "julietacaldera@apside.com",
    iconUser: AccountCircleIcon,
    iconMail: MailOutlineIcon,
  }),
  createData({
    id: 4,
    picture: Theo,
    name: "Jean",
    jointprojects: "Aeronautics",
    stacks: "JavaScript",
    agency: "Toulouse",
    contact: "thegosselin@apside.com",
    iconUser: AccountCircleIcon,
    iconMail: MailOutlineIcon,
  }),
  createData({
    id: 5,
    picture: Julieta,
    name: "Léa",
    jointprojects: "Aeronautics",
    stacks: "JavaScript",
    agency: "Toulouse",
    contact: "thegosselin@apside.com",
    iconUser: AccountCircleIcon,
    iconMail: MailOutlineIcon,
  }),
];

function ArrayCollaborators() {
  return (
    <TableContainer component={Paper} sx={{ width: 1200 }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell
              sx={{ width: 0, fontSize: 18, fontWeight: 700, color: "#616161" }}
            >
              Collaborators
            </TableCell>
            <TableCell sx={{ width: 200 }} />
            <TableCell
              sx={{ fontSize: 18, fontWeight: 700, color: "#616161" }}
              align="center"
            >
              Joint projects
            </TableCell>
            <TableCell
              sx={{ fontSize: 18, fontWeight: 700, color: "#616161" }}
              align="center"
            >
              Stacks
            </TableCell>
            <TableCell
              sx={{ fontSize: 18, fontWeight: 700, color: "#616161" }}
              align="center"
            >
              Agency
            </TableCell>
            <TableCell
              sx={{ width: 0, fontSize: 18, fontWeight: 700, color: "#616161" }}
              align="center"
            >
              Contact
            </TableCell>
            <TableCell sx={{ width: 0 }} />
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.picture.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                component="th"
                scope="row"
                sx={{ fontWeight: 700 }}
                align="center"
              >
                <img src={row.picture.picture} alt="" />
              </TableCell>
              <TableCell sx={{ fontWeight: 700, fontSize: 16 }} align="center">
                {row.picture.name}
              </TableCell>
              <TableCell align="center">{row.picture.jointprojects}</TableCell>
              <TableCell align="center">{row.picture.stacks}</TableCell>
              <TableCell align="center">{row.picture.agency}</TableCell>
              <TableCell align="center">{row.picture.contact}</TableCell>
              <TableCell align="center">
                <AccountCircleIcon className="icon" />
                <MailOutlineIcon className="icon" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ArrayCollaborators;
