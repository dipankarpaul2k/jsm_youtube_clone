import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import { Box, Stack, Grid, Typography } from "@mui/material";

import { AppLoader, VideoPlayer, Videos, VideoList, CommentList } from "../components";
import { fetchFromAPI } from "../utils/fetchFromApi";
import fetchVideoComments from "../utils/fetchVideoComments";

export default function VideoDetail() {
  const [vdoDetail, setVdoDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const [comments, setComments] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    // fetch video details
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVdoDetail(data.items[0])
    );
    // fetch releted videos
    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
    );

    // fetch video related comments
    fetchVideoComments(id).then((res) => setComments(res));
  }, [id]);

  // console.log("comments > ", comments);

  if (!vdoDetail) return <AppLoader />;

  const { snippet, statistics } = vdoDetail;

  return (
    <Box minHeight={"95vh"}>
      <Stack py={1}>
        <Grid container spacing={3}>
          <Grid item md={8} xs={12}>
            <VideoPlayer id={id} snippet={snippet} statistics={statistics} />
            <CommentList comments={comments}/>
          </Grid>
          <Grid item md={4} xs={12}>
            <Typography variant="h6" color="#fff">
              Related videos
            </Typography>
            <VideoList videos={videos} />
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
}
