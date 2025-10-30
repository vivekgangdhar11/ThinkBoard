import axios from "axios";

// You can override the API URL by setting VITE_API_URL in your environment
// Example (frontend/.env): VITE_API_URL=https://thinkboard-3-1mg0.onrender.com/api
const PROD_DEFAULT = "https://thinkboard-3-1mg0.onrender.com/api";
const BASE_URL =
  import.meta.env.VITE_API_URL ||
  (import.meta.env.MODE === "development"
    ? "http://localhost:5001/api"
    : PROD_DEFAULT);

const api = axios.create({
  baseURL: BASE_URL,
});

export default api;
