import apiAuth, {api} from "./axios.service";

export const Login = (payload) => {
    return api.post("/api/auth/login", payload);
};

export const CheckMe = () => {
    return api.get("/api/auth/me");
};

export const Logout = () => {
    return apiAuth.post("/api/auth/logout", {});
};
