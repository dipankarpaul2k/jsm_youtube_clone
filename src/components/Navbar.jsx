import { Link } from "react-router-dom";
import { Stack, Typography } from "@mui/material";
import SearchBar from "./SearchBar";

import { logo } from "../utils/constants";

// const logo = "https://i.ibb.co/s9Qys2j/logo.png";

export default function Navbar() {
  return (
    <Stack
      direction={"row"}
      p={2}
      alignItems={"center"}
      justifyContent={"space-between"}
      sx={{ position: "sticky", top: 0, background: "#000" }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center", color: "red", gap: "10px" }}>
        <img src={logo} alt="logo" height={40} />
        <Typography variant="h5" sx={{display: {md: "flex", xs: "none"}}}>ReTube</Typography>
      </Link>
      <SearchBar />
    </Stack>
  );
}
