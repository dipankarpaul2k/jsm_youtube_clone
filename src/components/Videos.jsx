import { Stack, Box, Grid } from "@mui/material";
import { VideoCard, ChannelCard } from "./";

export default function Videos({ videos }) {
  return (
    <Stack p={2}>
      <Grid
        container
        rowSpacing={{ xs: 1, sm: 2 }}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {videos.map((item, idx) => (
          <Grid item key={idx} xs={12} sm={6} lg={4} xl={3}>
            {item.id.videoId && <VideoCard video={item} />}
            {item.id.channelId && <ChannelCard channelDetail={item} />}
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}
