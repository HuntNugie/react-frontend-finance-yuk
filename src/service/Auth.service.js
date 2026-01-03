import {api} from "./axios.service";

export const Login = async (payload) => {
    const response = await api.post("/api/auth/login", payload);
    const data = response.data;
    return data;
};

export const checkMe = async () => {
    try {
        const response = await api.get("/api/auth/me");
        const data = response.data;
        return data;
    } catch (error) {
        throw new Error(error.response.data.error);
    }
};
