import axios from "axios";
import { API_URL } from "../constant";

const api = axios.create({
  baseURL: API_URL,
  timeout: 5000,
});

api.interceptors.request.use(
  (config) => {
    const userString = localStorage.getItem("user");
    let accessToken;
    if (userString !== null) {
      const user = JSON.parse(userString);
      accessToken = user.accessToken;
    }
    if (accessToken) {
      if (config.headers) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error?.response?.status === 401) {
      localStorage.removeItem("user");
      window.location.reload();
    }
    return Promise.reject(error);
  }
);

export default api;
