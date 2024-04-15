import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Box, Typography } from "@mui/material";

import { Videos } from "../components";
import { fetchFromAPI } from "../utils/fetchFromApi";

export default function SearchFeed() {
  const [videos, setVideos] = useState([]);

  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  if (!Videos) return <AppLoader />;

  return (
    <Box
      p={{ xs: 0, md: 2 }}
      sx={{ overflowY: "auto", height: "90vh", flex: 2 }}
    >
      <Typography
        variant="h4"
        fontWeight={"bold"}
        my={{xs: "0.5rem", md: 2, sm: 1}}
        sx={{ color: "white", fontSize: { xs: "1.5rem", sm: "2.125rem" } }}
      >
        Search result for <span style={{ color: "#fc1503" }}>{searchTerm}</span>
      </Typography>

      <Videos videos={videos} />
    </Box>
  );
}
