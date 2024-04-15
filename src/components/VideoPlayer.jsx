import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";

import { Box, Stack, Typography, Button } from "@mui/material";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";

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
      <Typography
        variant="h6"
        color={"white"}
        fontWeight={"bold"}
        fontSize={{ xs: "16px", sm: "20px" }}
      >
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
        <Typography
          variant="body1"
          display={"flex"}
          alignItems={"center"}
          gap={1}
        >
          <ThumbUpOutlinedIcon fontSize="small" />
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
            <Typography
              variant="body1"
              sx={{ opacity: 0.7 }}
              fontSize={{ xs: "14px", sm: "16px" }}
            >
              {parseInt(viewCount).toLocaleString()} views
            </Typography>
            <Typography
              variant="body1"
              sx={{ opacity: 0.7 }}
              fontSize={{ xs: "14px", sm: "16px" }}
            >
              {formatDate(publishedAt)}
            </Typography>
          </Stack>
          <Button
            variant="text"
            onClick={toggleExpanded}
            sx={{ color: "white", textTransform: "capitalize",
          fontSize: "16px", fontWeight: "normal" }}
          >
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
