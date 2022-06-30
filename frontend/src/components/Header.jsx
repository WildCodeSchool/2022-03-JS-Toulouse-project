import { SpeedDial, SpeedDialAction } from "@mui/material";
import React from "react";
import "../styles/Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import CottageIcon from "@mui/icons-material/Cottage";
import GroupIcon from "@mui/icons-material/Group";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import WorkIcon from "@mui/icons-material/Work";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import { Person } from "@mui/icons-material";
import HeaderLogo from "./HeaderLogo";

const actions = [
  { icon: <CottageIcon />, name: "DASHBOARD" },
  { icon: <GroupIcon />, name: "COLLABORATORS" },
  { icon: <LightbulbIcon />, name: "IDEAS" },
  { icon: <WorkIcon />, name: "CUSTOMERS" },
  { icon: <NewspaperIcon />, name: "PRESS REVIEW" },
  { icon: <Person />, name: "ACCOUNT" },
];

function Header({ name }) {
  return (
    <div className="header-container">
      <HeaderLogo />
      <h2 className="header-title">{name}</h2>
      <div>
        <SpeedDial
          ariaLabel="SpeedDial"
          sx={{
            position: "absolute",
            top: 16,
            right: 16,
          }}
          direction="down"
          icon={<MenuIcon />}
          FabProps={{
            sx: {
              bgcolor: "#e79759",
              "&:hover": {
                bgcolor: "#9C5D2D",
              },
            },
          }}
        >
          {actions.map((action) => (
            <SpeedDialAction
              tooltipTitle={action.name}
              tooltipOpen
              key={action.name}
              icon={action.icon}
            />
          ))}
        </SpeedDial>
      </div>
    </div>
  );
}

export default Header;
