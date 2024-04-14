import axios from "axios";

export const BASE_URL = "https://youtube-v31.p.rapidapi.com/commentThreads";

const options = {
  url: BASE_URL,
  params: {
    part: "snippet",
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export default async function fetchVideoComments(videoId) {
  const url = `${BASE_URL}?videoId=${videoId}`;
  const { data } = await axios.get(url, options);
  const result = await data.items;
  const commentsArray = result.map((item) => ({
    commentText: item?.snippet?.topLevelComment?.snippet?.textDisplay,
    author: item?.snippet?.topLevelComment?.snippet?.authorDisplayName,
    authorImgUrl:
      item?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl,
    authorChannelUrl: item?.snippet?.topLevelComment?.snippet?.authorChannelUrl,
    authorChannelId:
      item?.snippet?.topLevelComment?.snippet?.authorChannelId?.value,
    likes: item?.snippet?.topLevelComment?.snippet?.likeCount,
    publishedAt: item?.snippet?.topLevelComment?.snippet?.publishedAt,
    id: item?.id,
  }));

  return commentsArray;
}

// // fetch releted comments
// fetchFromAPI(`?videoId=${id}`).then((data) => {
//   data.items.map((item) => ({
//     comment: item?.snippet?.topLevelComment?.snippet?.textDisplay,
//     author: item?.snippet?.topLevelComment?.snippet?.authorDisplayName,
//     authorImgUrl:
//       item?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl,
//     authorChannelUrl: item?.snippet?.topLevelComment?.snippet?.authorChannelUrl,
//     authorChannelId:
//       item?.snippet?.topLevelComment?.snippet?.authorChannelId?.value,
//     likes: item?.snippet?.topLevelComment?.snippet?.likeCount,
//     publishedAt: item?.snippet?.topLevelComment?.snippet?.publishedAt,
//   }));
// });
