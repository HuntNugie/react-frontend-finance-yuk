import {useEffect, useState} from "react";
import AuthContext from "../context/AuthContext";
import {CheckMe, Login, Logout, Register} from "../service/Auth.service";
import {Loading} from "../components/Loading";

export default function AuthProvider({children}) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // untuk pertama kali render check
    useEffect(() => {
        const handleCheck = async () => {
            try {
                const res = await CheckMe();
                setUser(res.data);
            } catch (error) {
                console.log(error.response.data.error);
            } finally {
                setLoading(false);
            }
        };
        handleCheck();
    }, []);

    const handleLogin = async (payload) => {
        const res = await Login(payload);
        setUser(res.data);
    };

    const handleLogout = async () => {
        try {
            await Logout();
            setUser(null)
        } catch (error) {
            console.log(error);
        }
    };

    const handleRegister = async (payload) => {
        await Register(payload);
    };

    if (loading) {
        return <Loading />;
    }

    return (
        <AuthContext.Provider value={{user, handleLogin, handleLogout, handleRegister}}>
            {children}
        </AuthContext.Provider>
    );
}
