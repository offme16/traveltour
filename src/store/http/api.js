import axios from "axios"
import { USER_LOCALSTORAGE_KEY } from "../const/actionTypes"

export const API_URL = 'https://localhost:7045/'

const api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})

// api.interceptors.request((config) => {
//     config.headers.Authorization = `Bearer ${localStorage.getItem('USER_LOCALSTORAGE_KEY')}`
//     return config;
// })

// api.interceptors.response.use((config) => {
//     return config;
// }, async (error) => {
//     const originalRequest = error.config;
//     if (error.response.status === 401 && error.config && !error.config._isRetry) {
//         originalRequest._isRetry = true;
//         try {
//             const response = await axios.get(`${API_URL}/refresh`, {withCredentials: true});
//             localStorage.setItem(USER_LOCALSTORAGE_KEY, response.data.accesToken);
//             return api.request(originalRequest);
//         }
//         catch (e) {
//             console.log("NOT AUTH");
//         }
//     }
//     throw error;
// })

export default api;