import React from "react";
import { Link } from "react-router-dom";

import {
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
  Stack,
} from "@mui/material";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";

import formatDate from "../utils/formatDate";

function CommentCard({ comment }) {
  const {
    author,
    authorChannelId,
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
              <Typography
                sx={{ display: "inline", color: "gray" }}
                fontSize={{ xs: "14px", sm: "16px" }}
              >
                {formatDate(publishedAt)}
              </Typography>
            </>
          }
          secondary={
            <>
              <Typography
                sx={{ wordBreak: "break-word" }}
                fontSize={{ xs: "14px", sm: "16px" }}
              >
                {commentText}
              </Typography>
            </>
          }
          primaryTypographyProps={{
            color: "#fff",
          }}
          secondaryTypographyProps={{ color: "#fff" }}
        />
        <ListItemText
          secondary={
            <>
              <Typography
                fontSize={{ xs: "14px", sm: "16px" }}
                display={"flex"}
                alignItems={"center"}
                gap={1}
              >
                <ThumbUpOutlinedIcon fontSize="small" />
                {`${likes} Likes`}
              </Typography>
            </>
          }
          secondaryTypographyProps={{ color: "#fff" }}
        />
      </Stack>
    </>
  );
}

export default CommentCard;
