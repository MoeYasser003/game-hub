import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "63665908e2bb4a6cb80c921eb0e1d888",
  },
});
