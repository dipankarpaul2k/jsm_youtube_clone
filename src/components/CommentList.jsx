import React, { useState } from "react";

import {
  List,
  ListItem,
  Typography,
  Collapse,
  Stack,
  Box,
  Button,
  Divider,
} from "@mui/material";

import CommentCard from "./CommentCard";

function CommentList({ comments }) {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => {
    setExpanded((prev) => !prev);
  };
  return (
    <>
      <Button
        variant="text"
        onClick={toggleExpanded}
        sx={{
          width: "100%",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          textTransform: "capitalize",
        }}
      >
        <Typography variant="h6">Comments</Typography>
        <Typography variant="subtitle1">
          {expanded ? "See Less" : "See More"}
        </Typography>
      </Button>
      <Box borderRadius={2} px={2} bgcolor={"#272727"}>
        <Collapse in={expanded} collapsedSize={100}>
          <List sx={{ width: "100%" }}>
            {comments.map((comment) => (
              <>
                <ListItem key={comment.id} alignItems="flex-start" sx={{pl: 0}}>
                  <CommentCard comment={comment} />
                </ListItem>
                <Divider
                  variant="inset"
                  component="li"
                  sx={{ borderColor: "#fff", opacity: 0.25 }}
                />
              </>
            ))}
          </List>
        </Collapse>
      </Box>
    </>
  );
}

export default CommentList;
