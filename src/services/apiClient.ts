import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "3a05b61b200f4fc0a9a0c5097707ea8e",
  },
});
