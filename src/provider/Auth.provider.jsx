import {useEffect, useState} from "react";
import AuthContext from "../context/AuthContext";
import {checkMe, Login} from "../service/Auth.service";
import {Loading} from "../components/Loading";

export default function AuthProvider({children}) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // untuk pertama kali render check
    useEffect(() => {
        const handleCheck = async () => {
            try {
                const res = await checkMe();
                setUser(res);
            } catch (error) {
                console.log(error.message);
            } finally {
                setLoading(false);
            }
        };
        handleCheck();
    }, []);

    const handleLogin = async (payload) => {
        const data = await Login(payload);
        setUser(data);
    };

    if (loading) {
        return <Loading />;
    }

    return <AuthContext.Provider value={{user, handleLogin}}>{children}</AuthContext.Provider>;
}
