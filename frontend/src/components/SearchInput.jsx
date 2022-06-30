import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";

export default function InputWithIcon() {
  return (
    <Box sx={{ "& > :not(style)": { m: 1 }, color: "white" }}>
      <Box sx={{ display: "flex", alignItems: "flex-end", color: "white" }}>
        <SearchIcon
          sx={{
            "& > :before(style)": { color: "white" },
            color: "white",
            mr: 1,
            my: 0.5,
          }}
        />
        <TextField
          sx={{
            color: "white",
            fontWeight: "900",
            borderBottom: "2px solid white",
          }}
          id="input-with-sx"
          label="Search"
          variant="standard"
        />
      </Box>
    </Box>
  );
}
