import React from "react";
import { Link } from "react-router-dom";

import {
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
  Divider,
  Stack,
} from "@mui/material";
import formatDate from "../utils/formatDate";

function CommentCard({ comment }) {
  const {
    author,
    authorChannelId,
    authorChannelUrl,
    authorImgUrl,
    commentText,
    likes,
    publishedAt,
  } = comment;
  return (
    <>
      <ListItemAvatar>
        <Link to={`/channel/${authorChannelId}`}>
          <Avatar src={authorImgUrl} />
        </Link>
      </ListItemAvatar>
      <Stack>
        <ListItemText
          primary={
            <>
              <Link
                to={`/channel/${authorChannelId}`}
                style={{ display: "inline", color: "#fff" }}
              >
                {author}
              </Link>
              <span style={{ fontSize: "10px", color: "gray" }}> &#9679; </span>
              <Typography sx={{ display: "inline", color: "gray" }}>
                {formatDate(publishedAt)}
              </Typography>
            </>
          }
          secondary={commentText}
          primaryTypographyProps={{
            color: "#fff",
          }}
          secondaryTypographyProps={{ color: "#fff" }}
        />
        <ListItemText
          secondary={`${likes} Likes`}
          secondaryTypographyProps={{ color: "#fff" }}
        />
      </Stack>
    </>
  );
}

export default CommentCard;
