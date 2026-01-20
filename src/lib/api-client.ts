import axios from "axios";
import { useNavigate } from "react-router";

export const apiClient = axios.create({
  baseURL: "http://127.0.0.1:5001/api",
  withCredentials: true,
});

apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const navigate = useNavigate();

      try {
        await apiClient.post("/auth/refresh");

        return apiClient(originalRequest);
      } catch (refreshError) {
        navigate("/login");
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  },
);
