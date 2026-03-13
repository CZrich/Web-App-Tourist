import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:2024/api",
});

// Interceptor: añade el token automáticamente a todas las peticiones
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;