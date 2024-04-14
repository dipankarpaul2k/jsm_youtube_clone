import { Outlet } from "react-router-dom";
import { Box, Container } from "@mui/material";
import Navbar from "./Navbar";

export default function Root() {
  return (
    <Container maxWidth="xl" sx={{backgroundColor: "#000",}}>
      <Box sx={{ backgroundColor: "#000", color: "#fff" }}>
        <Navbar />
        <Outlet />
      </Box>
    </Container>
  );
}
