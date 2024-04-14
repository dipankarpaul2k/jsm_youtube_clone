import { Link } from "react-router-dom";

import { Typography, Card, CardMedia, CardContent } from "@mui/material";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import {
  demoThumbnailUrl,
  demoChannelUrl,
  demoVideoUrl,
  demoChannelTitle,
  demoVideoTitle,
} from "../utils/constants";
import formatDate from "../utils/formatDate";

export default function VideoCard({
  video: {
    id: { videoId },
    snippet,
  },
}) {
  return (
    <Card
      sx={{
        boxShadow: "none",
        borderRadius: "10px",
        backgroundColor: "transparent",
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
          alt={snippet?.title || demoVideoTitle.slice(0, 50)}
          sx={{
            width: "100%",
            height: 180,
            borderRadius: "10px",
            objectFit: "fill",
          }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "transparent", height: "80px" }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant="subtitle1" fontWeight={"bold"} color={"#fff"}>
            {snippet?.title.slice(0, 50) || demoVideoTitle.slice(0, 50)}
          </Typography>
        </Link>
        <Link
          to={
            snippet?.channelId
              ? `/channel/${snippet?.channelId}`
              : demoChannelUrl
          }
        >
          {/* channel title */}
          <Typography variant="subtitle2" fontWeight={"bold"} color={"grey"}>
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircleIcon sx={{ fontSize: 12, color: "grey", ml: "5px" }} />
          </Typography>
        </Link>
        {/* publish date */}
        <Typography variant="subtitle2" fontWeight={"bold"} color={"grey"}>
          {formatDate(snippet?.publishedAt)}
        </Typography>
      </CardContent>
    </Card>
  );
}
