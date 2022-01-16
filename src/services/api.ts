import axios from "axios";

const api = axios.create({
  baseURL: `${process.env.VERCEL_URL}/api`,
});

export { api };
