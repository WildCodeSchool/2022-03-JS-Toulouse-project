import {
  Autocomplete,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
} from "@mui/material";
import React from "react";
import "../styles/Sidebar.css";
import InputWithIcon from "./SearchInput";

const agencies = ["Toulouse", "Reims"];

function Sidebar() {
  return (
    <div className="sidebar-container">
      <h3 className="sidebar-title">FILTERS</h3>
      <InputWithIcon />
      <div className="filter-check-container">
        <div className="filter-check-text">
          <p>STATUS :</p>
        </div>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox sx={{ padding: 0, color: "white" }} />}
            label="Finished"
          />
          <FormControlLabel
            control={<Checkbox sx={{ padding: 0, color: "white" }} />}
            label="Ongoing"
          />
          <FormControlLabel
            control={<Checkbox sx={{ padding: 0, color: "white" }} />}
            label="To Start"
          />
        </FormGroup>
      </div>

      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={agencies}
        sx={{ padding: "8px", borderColor: "red.500", color: "white" }}
        renderInput={(params) => (
          <TextField
            sx={{
              border: "2px solid #e79759",
              borderRadius: "4px",
              color: "white",
            }}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...params}
            label="Movie"
          />
        )}
      />
      <div className="filter-check-container">
        <div className="filter-check-text">
          <p>TECH STACK :</p>
        </div>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox sx={{ padding: 0, color: "white" }} />}
            label="PHP"
          />
          <FormControlLabel
            control={<Checkbox sx={{ padding: 0, color: "white" }} />}
            label="JavaScript"
          />
          <FormControlLabel
            control={<Checkbox sx={{ padding: 0, color: "white" }} />}
            label="HTML"
          />
          <FormControlLabel
            control={<Checkbox sx={{ padding: 0, color: "white" }} />}
            label="Symfony"
          />
          <FormControlLabel
            control={<Checkbox sx={{ padding: 0, color: "white" }} />}
            label="Laravel"
          />
          <FormControlLabel
            control={<Checkbox sx={{ padding: 0, color: "white" }} />}
            label="ReactJS"
          />
          <FormControlLabel
            control={<Checkbox sx={{ padding: 0, color: "white" }} />}
            label="VueJS"
          />
          <FormControlLabel
            control={<Checkbox sx={{ padding: 0, color: "white" }} />}
            label="Angular"
          />
          <FormControlLabel
            control={<Checkbox sx={{ padding: 0, color: "white" }} />}
            label="NextJS"
          />
          <p className="text-grayed">... view more &gt;</p>
        </FormGroup>
      </div>
      <div className="filter-check-container">
        <div className="filter-check-text">
          <p>FAVORITES :</p>
        </div>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox sx={{ padding: 0, color: "white" }} />}
            label=""
          />
        </FormGroup>
      </div>
      <div className="filter-check-container">
        <div className="filter-check-text">
          <p>MY STACK :</p>
        </div>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox sx={{ padding: 0, color: "white" }} />}
            label=""
          />
        </FormGroup>
      </div>
      <h3 className="sidebar-title">COLORS</h3>
      <div className="filter-color-container">
        <div className="centered-color-span">
          <span className="color-ball">FINISHED</span>
        </div>
        <div className="color-code code-finished" />

        <div className="centered-color-span">
          <span className="color-ball">ONGOING</span>
        </div>
        <div className="color-code code-ongoing" />

        <div className="centered-color-span">
          <span className="color-ball">TO START</span>
        </div>
        <div className="color-code code-tostart" />
      </div>
    </div>
  );
}

export default Sidebar;
