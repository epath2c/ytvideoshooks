import axios from "axios";

const KEY = "AIzaSyDkCf9HynKUJOzyQpiZ1IQEhNO88KHqooQ";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
