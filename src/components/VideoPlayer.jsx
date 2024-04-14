import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";

import { Box, Stack, Typography, Button } from "@mui/material";

import Description from "./Description";
import formatDate from "../utils/formatDate";

export default function VideoPlayer({ id, snippet, statistics }) {
  const { channelId, title, channelTitle, publishedAt, description, tags } =
    snippet;
  const { viewCount, likeCount } = statistics;

  // Collapse the description
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${id}`}
        className="react-player"
        controls
      />
      <Typography variant="h6" color={"white"} fontWeight={"bold"}>
        {title}
      </Typography>
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{ color: "#fff" }}
        py={1}
      >
        <Link to={`/channel/${channelId}`}>
          <Typography variant="subtitle1" color="#fff">
            {channelTitle}
          </Typography>
        </Link>
        <Typography variant="body1">
          {parseInt(likeCount).toLocaleString()} likes
        </Typography>
      </Stack>

      <Stack>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Stack direction="row" gap="10px" alignItems="center">
            <Typography variant="body1" sx={{ opacity: 0.7 }}>
              {parseInt(viewCount).toLocaleString()} views
            </Typography>
            <Typography variant="body1" sx={{ opacity: 0.7 }}>
              {formatDate(publishedAt)}
            </Typography>
          </Stack>
          <Button variant="text" onClick={toggleExpanded} sx={{color: "white", textTransform: "capitalize"}}>
            {expanded ? "See Less" : "See More"}
          </Button>
        </Stack>
        <Description
          description={description}
          expanded={expanded}
          tags={tags}
        />
      </Stack>
    </Box>
  );
}
