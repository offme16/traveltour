import axios from "axios";
import { USER_LOCALSTORAGE_KEY, USER_LOCALSTORAGE_REFRESH } from "../const/actionTypes";

export const API_URL = 'http://localhost:5092/';

const api = axios.create({
    baseURL: API_URL,
});

api.interceptors.request.use(async (config) => {
    const accessToken = localStorage.getItem(USER_LOCALSTORAGE_KEY);
    if (accessToken) {
        const cleanedToken = accessToken.replace(/['"]+/g, ''); 
        config.headers.Authorization = `Bearer ${cleanedToken}`;
    }
    return config;
});

api.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;
        if (error.response && error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            const refreshToken = localStorage.getItem(USER_LOCALSTORAGE_REFRESH);
            if (refreshToken) {
                try {
                    const response = await api.post(`${API_URL}api/Auth/RefreshToken`, {
                        jwtToken: JSON.parse(localStorage.getItem(USER_LOCALSTORAGE_KEY)),
                        refreshToken: JSON.parse(refreshToken)
                    });
                    localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data.accessToken));
                    localStorage.setItem(USER_LOCALSTORAGE_REFRESH, JSON.stringify(response.data.refreshToken));
                    return api(originalRequest);
                } catch (refreshError) {
                    console.log("Error refreshing token:", refreshError);
                }
            } else {
                alert("Refresh token not found. Logging out.");
            }
        }
        return Promise.reject(error);
    }
);

export default api;