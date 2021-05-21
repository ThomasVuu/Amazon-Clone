import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/clone-4eeb4/us-central1/api", //THE API (cload function) URL
});

export default instance;
