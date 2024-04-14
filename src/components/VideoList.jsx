import React from "react";

import { Link } from "react-router-dom";

import {
  Stack,
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

import {
  demoThumbnailUrl,
  demoChannelUrl,
  demoVideoUrl,
  demoChannelTitle,
  demoVideoTitle,
} from "../utils/constants";
import formatDate from "../utils/formatDate";

function VideoList({ videos }) {
  
  return (
    <Stack spacing={2}>
      {videos.map((item, idx) => {
        const { id, snippet } = item;
        return (
          <Box key={idx}>
            <Card sx={{ display: "flex", backgroundColor: "transparent" }}>
              <Link to={id?.videoId ? `/video/${id?.videoId}` : demoVideoUrl}>
                <CardMedia
                  component={"img"}
                  image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
                  alt={snippet?.title || demoVideoTitle.slice(0, 50)}
                  sx={{
                    width: { xs: "140px", sm: "180px" },
                    height: { xs: "90px", sm: "150px" },
                    objectFit: "fill",
                  }}
                />
              </Link>
              <CardContent sx={{ backgroundColor: "transparent" }}>
                {/* video title */}
                <Link to={id?.videoId ? `/video/${id?.videoId}` : demoVideoUrl}>
                  <Typography
                    variant="subtitle1"
                    fontWeight={"bold"}
                    color={"#fff"}
                  >
                    {snippet?.title.slice(0, 50) || demoVideoTitle.slice(0, 50)}
                  </Typography>
                </Link>
                {/* channel name */}
                <Link
                  to={
                    snippet?.channelId
                      ? `/channel/${snippet?.channelId}`
                      : demoChannelUrl
                  }
                >
                  <Typography
                    variant="subtitle2"
                    fontWeight={"bold"}
                    color={"grey"}
                  >
                    {snippet?.channelTitle || demoChannelTitle}
                  </Typography>
                </Link>
                {/* publish date */}
                <Typography
                  variant="subtitle2"
                  fontWeight={"bold"}
                  color={"grey"}
                >
                  {formatDate(snippet?.publishedAt)}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        );
      })}
    </Stack>
  );
}

export default VideoList;
