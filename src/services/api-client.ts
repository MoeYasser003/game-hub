import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "7538e3cfeb6740cbbef29ddd2266721e",
  },
});
