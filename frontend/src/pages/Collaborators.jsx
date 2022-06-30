import React from "react";
import { TextField } from "@mui/material";
import ArrayCollaborators from "../components/ArrayCollaborators";
import SpeedDial from "../components/SpeedDial";
import logo from "../assets/ROAD.png";
import "../styles/Collaborators.css";

function Collaborators() {
  return (
    <div>
      <header className="top-bar">
        <img src={logo} alt="logo" />
        <SpeedDial />
      </header>
      <div className="table">
        <TextField
          placeholder="Jean Dupont
          "
          sx={{ align: "center", width: 1200, padding: 5 }}
        />
        <ArrayCollaborators />
      </div>
    </div>
  );
}

export default Collaborators;
