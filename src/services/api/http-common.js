import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    "Content-type": "application/json",
    Authorization: "Bearer sZ6wySMsUX7094Ea5LEwzQeCZFqbT68_bLA1wVbaZnk",
  },
});
