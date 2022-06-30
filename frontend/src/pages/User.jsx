import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import HeaderUser from "../components/HeaderUser";

function User() {
  return (
    <div>
      <HeaderUser title="Create a user" />
      <Container maxWidth="sm">
        <Box>
          <TextField
            id="firstname"
            label="Firstname"
            variant="outlined"
            sx={{ width: "80%", marginTop: "2rem" }}
          />
          <TextField
            id="lastname"
            label="Lastname"
            variant="outlined"
            sx={{ width: "80%", marginTop: "2rem" }}
          />
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            sx={{ width: "80%", marginTop: "2rem" }}
          />
        </Box>
      </Container>
    </div>
  );
}

export default User;
