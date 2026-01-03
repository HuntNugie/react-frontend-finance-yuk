import axios from "axios";
// digunakan untuk jika membutuhkan auth
const apiAuth = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_API,
    withCredentials: true,
});

apiAuth.interceptors.response.use(
    (res) => res,
    (err) => {
        if (err.response?.status === 401) {
            window.dispatchEvent(new Event("logout"));
        }
        return Promise.reject(err);
    }
);

export const api = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_API,
    withCredentials: true,
});

export default apiAuth;
