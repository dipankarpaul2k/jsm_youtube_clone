import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { Box, Container } from "@mui/material";

import Videos from "../components/Videos";
import ChannelCard from "../components/ChannelCard";

import { fetchFromAPI } from "../utils/fetchFromApi";
import { AppLoader } from "../components";

export default function ChannelDetail() {
  const [channelDetail, setChannelDetail] = useState(null);
  const [channelVideos, setChannelVideos] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setChannelVideos(data?.items)
    );
  }, [id]);

  if (!channelDetail) return <AppLoader />;

  return (
    <Box minHeight={"95vh"}>
      <Box>
        <div
          style={{
            background:
              "linear-gradient(150deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%",
            height: "200px",
            zIndex: "10",
          }}
        />
        <Container maxWidth="md">
          <ChannelCard channelDetail={channelDetail} marginTop="-100px" />
        </Container>
      </Box>
      <Container maxWidth="xl">
        <Box sx={{ padding: { xs: 0, md: 1 } }}>
          <Videos videos={channelVideos} />
        </Box>
      </Container>
    </Box>
  );
}
