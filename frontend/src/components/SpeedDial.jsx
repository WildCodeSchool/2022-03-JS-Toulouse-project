import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CottageIcon from "@mui/icons-material/Cottage";
import GroupIcon from "@mui/icons-material/Group";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import WorkIcon from "@mui/icons-material/Work";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import { Person } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { SpeedDial, SpeedDialAction } from "@mui/material";

function SpeedDialComp() {
  const navigate = useNavigate();
  const actions = [
    { icon: <CottageIcon />, name: "DASHBOARD", navigate: "/" },
    { icon: <GroupIcon />, name: "COLLABORATORS", navigate: "/" },
    { icon: <LightbulbIcon />, name: "IDEAS", navigate: "/" },
    { icon: <WorkIcon />, name: "CUSTOMERS", navigate: "/" },
    { icon: <NewspaperIcon />, name: "PRESS REVIEW", navigate: "/" },
    { icon: <Person />, name: "ACCOUNT", navigate: "/" },
  ];
  return (
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
          onClick={() => navigate(action.navigate)}
        />
      ))}
    </SpeedDial>
  );
}

SpeedDialComp.propTypes = {};

export default SpeedDialComp;
