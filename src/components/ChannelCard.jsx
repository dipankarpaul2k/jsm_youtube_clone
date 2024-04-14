import { useState } from "react";
import { Link } from "react-router-dom";

import { Box, Typography, CardMedia, CardContent, Button } from "@mui/material";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { demoProfilePicture } from "../utils/constants";
import Description from "./Description";

export default function ChannelCard({ channelDetail, marginTop }) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <Box
      sx={{
        boxShadow: "none",
        borderRadius: "20px",
        marginTop,
      }}
    >
      <Link
        to={`/channel/${channelDetail?.id?.channelId || channelDetail?.id}`}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            color: "white",
          }}
        >
          <CardMedia
            image={
              channelDetail?.snippet?.thumbnails?.high?.url ||
              demoProfilePicture
            }
            alt={channelDetail?.snippet?.title}
            sx={{ height: "180px", width: "180px", borderRadius: "50%" }}
          />
          <Typography variant="h6">
            {channelDetail?.snippet?.title}
            <CheckCircleIcon sx={{ fontSize: 16, color: "grey", ml: "5px" }} />
          </Typography>
          {channelDetail?.statistics?.subscriberCount && (
            <Typography
              sx={{ fontSize: "15px", fontWeight: 500, color: "gray" }}
            >
              {parseInt(
                channelDetail?.statistics?.subscriberCount
              ).toLocaleString("en-US")}{" "}
              Subscribers
            </Typography>
          )}
          {channelDetail?.statistics && (
            <>
              {/* channel videos and views */}
              <Typography
                sx={{ fontSize: "15px", fontWeight: 500, color: "gray" }}
              >
                {channelDetail?.statistics?.videoCount} Videos{" "}
                <span style={{ fontSize: "10px" }}>&#9679;</span>{" "}
                {parseInt(channelDetail?.statistics?.viewCount).toLocaleString(
                  "en-US"
                )}{" "}
                Views
              </Typography>
              {/* channel description */}
              <>
                <Description
                  description={channelDetail?.snippet?.description}
                  expanded={expanded}
                />
                <Box display="flex" justifyContent="center">
                  <Button variant="text" onClick={toggleExpanded}>
                    {expanded ? "See Less" : "See More"}
                  </Button>
                </Box>
              </>
            </>
          )}
        </CardContent>
      </Link>
    </Box>
  );
}

{
  /* <Typography
                sx={{ fontSize: "15px", fontWeight: 500, color: "gray" }}
              >
                {channelDetail?.snippet?.description}
              </Typography> */
}

{
  /* {channelDetail?.statistics && (
            
          )} */
}
