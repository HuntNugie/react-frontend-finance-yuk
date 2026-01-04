import {useEffect, useState} from "react";
import {useAuth} from "../hooks/useAuth";
import {Link, useNavigate} from "react-router-dom";

export default function LoginPage() {
    const {handleLogin, user} = useAuth();
    const [form, setForm] = useState({
        email: "",
        password: "",
    });
    const [error, setError] = useState([]);

    const [loading, setLoading] = useState(false);
    const handleChange = (e) => {
        setForm((prev) => ({...prev, [e.target.name]: e.target.value}));
    };
    const nav = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);
            await handleLogin(form);
        } catch (err) {
            setError(err.response.data.error);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        if (!loading && user) {
            nav("/dashboard", {replace: true});
        }
    }, [loading, user]);
    const handleOauth = () => {
        window.location.href = `${import.meta.env.VITE_BACKEND_API}/api/auth/google`;
    };
    return (
        <>
            <div className="bg-white w-full max-w-md rounded-xl shadow p-8">
                {/* Logo */}
                <div className="text-center mb-6">
                    <img src="/image/logo-Only.png" className="w-24 h-24 mx-auto mb-2" alt="Logo" />
                    <h1 className="text-xl font-bold text-indigo-600">FinanceYuk</h1>
                    <p className="text-sm text-gray-500">Kelola keuanganmu dengan sadar</p>
                </div>

                {error.length > 0 && (
                    <div className="mb-4 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                        <p className="font-medium">Terjadi kesalahan</p>
                        <ul className="mt-1 list-disc list-inside space-y-1">
                            {error.map((el, index) => {
                                return <li key={index}>{el.msg}</li>;
                            })}
                        </ul>
                    </div>
                )}
                {/* Form */}
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label className="text-sm text-gray-600">Email</label>
                        <input
                            type="email"
                            name="email"
                            onChange={handleChange}
                            className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            required
                        />
                    </div>

                    <div>
                        <label className="text-sm text-gray-600">Password</label>
                        <input
                            type="password"
                            name="password"
                            onChange={handleChange}
                            className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition cursor-pointer"
                        disabled={loading}
                    >
                        {loading ? "tunggu sebentar" : "Login"}
                    </button>
                </form>

                {/* Divider */}
                <div className="flex items-center my-6">
                    <div className="flex-1 h-px bg-gray-200"></div>
                    <span className="px-3 text-sm text-gray-400">atau</span>
                    <div className="flex-1 h-px bg-gray-200"></div>
                </div>

                {/* Login with Google */}
                <button
                    type="button"
                    className="w-full flex items-center justify-center gap-3 border py-2 rounded-lg hover:bg-gray-200 transition cursor-pointer"
                    onClick={handleOauth}
                >
                    <svg className="w-5 h-5" viewBox="0 0 48 48">
                        <path
                            fill="#FFC107"
                            d="M43.6 20.4H42V20H24v8h11.3C33.8 32.1 29.4 35 24 35c-6.1 0-11-4.9-11-11s4.9-11 11-11c2.8 0 5.4 1.1 7.4 2.9l5.7-5.7C33.5 6.8 28.9 5 24 5 12.4 5 3 14.4 3 26s9.4 21 21 21 21-9.4 21-21c0-1.4-.1-2.8-.4-4.1z"
                        />
                        <path
                            fill="#FF3D00"
                            d="M6.3 14.7l6.6 4.8C14.7 16 19 13 24 13c2.8 0 5.4 1.1 7.4 2.9l5.7-5.7C33.5 6.8 28.9 5 24 5c-7.5 0-14 4.1-17.7 9.7z"
                        />
                        <path
                            fill="#4CAF50"
                            d="M24 47c5.3 0 10.2-2 13.9-5.2l-6.4-5.4C29.6 37.8 26.9 39 24 39c-5.4 0-9.9-3.5-11.5-8.4l-6.6 5.1C9.7 42.9 16.4 47 24 47z"
                        />
                        <path
                            fill="#1976D2"
                            d="M43.6 20.4H42V20H24v8h11.3c-1 2.7-2.9 5-5.4 6.4l.1.1 6.4 5.4C35.9 41.5 45 36 45 26c0-1.4-.1-2.8-.4-4.1z"
                        />
                    </svg>
                    <span className="text-sm font-medium text-gray-700">Login dengan Google</span>
                </button>

                <p className="text-sm text-center text-gray-500 mt-6">
                    Belum punya akun?{" "}
                    <Link className="text-indigo-600 font-medium cursor-pointer" to={"/register"}>
                        Daftar
                    </Link>
                </p>
            </div>
        </>
    );
}
