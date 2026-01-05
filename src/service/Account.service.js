import apiAuth from "./axios.service"

export const createAccount = (payload)=>{
    return apiAuth.post("/api/account/add",payload)
}