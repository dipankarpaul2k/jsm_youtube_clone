import { useEffect, useState } from "react";

import { Stack, Box, Typography } from "@mui/material";

import { AppLoader, Sidebar, Videos } from "../components";
import { fetchFromAPI } from "../utils/fetchFromApi";

export default function Feed() {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategory]);

  if (!Videos) return <AppLoader />;

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "90vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography className="copyright" variant="body2" sx={{ mt: 1.5, display: {md: "block", xs: "none"} }}>
          Copyright 2024 | Dipankar Paul
        </Typography>
      </Box>

      <Box p={{ xs: 0, md: 2 }} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight={"bold"}
          my={{xs: "0.5rem", md: 2, sm: 1}}
          sx={{ color: "white", fontSize: { xs: "1.5rem", sm: "2.125rem" },
         }}
        >
          {selectedCategory} <span style={{ color: "#fc1503" }}>videos</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  );
}
