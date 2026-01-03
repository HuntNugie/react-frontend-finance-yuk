import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {useAuth} from "../hooks/useAuth";

export default function RegisterPage() {
    const [form, setForm] = useState({
        email: "",
        password: "",
        confirm_password: "",
        nama: "",
        jenis_kelamin: "",
        tgl_lahir: "",
    });
    const [loading, setLoading] = useState(false);
    const {handleRegister} = useAuth();

    const handleChange = (e) => {
        setForm((prev) => ({...prev, [e.target.name]: e.target.value}));
    };
    const [error, setError] = useState([]);
    const nav = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            await handleRegister(form);
            nav("/login", {replace: true});
        } catch (error) {
            setError(error.response.data.error);
        } finally {
            setLoading(false);
        }
    };
    return (
        <>
            <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-8">
                {/* Logo */}
                <div className="text-center mb-6">
                    <img src="/image/logo-Only.png" className="w-24 h-24 mx-auto mb-2" alt="Logo" />
                    <h1 className="text-2xl font-bold text-indigo-600">FinanceYuk</h1>
                    <p className="text-sm text-gray-500">Daftar dan mulai kendalikan keuanganmu</p>
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
                    {/* Nama */}
                    <div>
                        <label className="text-sm text-gray-600">Nama Lengkap</label>
                        <input
                            type="text"
                            placeholder="Nama lengkap"
                            name="nama"
                            onChange={handleChange}
                            className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="text-sm text-gray-600">Email</label>
                        <input
                            type="email"
                            name="email"
                            onChange={handleChange}
                            placeholder="email@example.com"
                            className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="text-sm text-gray-600">Password</label>
                        <input
                            type="password"
                            name="password"
                            onChange={handleChange}
                            placeholder="Minimal 8 karakter"
                            className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    {/* Konfirmasi Password */}
                    <div>
                        <label className="text-sm text-gray-600">Konfirmasi Password</label>
                        <input
                            type="password"
                            name="confirm_password"
                            onChange={handleChange}
                            placeholder="Ulangi password"
                            className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    {/* Jenis Kelamin */}
                    <div>
                        <label className="text-sm text-gray-600">Jenis Kelamin</label>
                        <select
                            className="w-full mt-1 px-4 py-2 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            name="jenis_kelamin"
                            onChange={handleChange}
                        >
                            <option value="">Pilih jenis kelamin</option>
                            <option value="L">Laki-laki</option>
                            <option value="P">Perempuan</option>
                        </select>
                    </div>

                    {/* Tanggal Lahir */}
                    <div>
                        <label className="text-sm text-gray-600">Tanggal Lahir</label>
                        <input
                            type="date"
                            name="tgl_lahir"
                            onChange={handleChange}
                            className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition cursor-pointer"
                        disabled={loading}
                    >
                        {loading ? "tunggu sebnetar" : "Daftar"}
                    </button>
                </form>

                {/* Footer Text */}
                <p className="text-sm text-center text-gray-500 mt-4">
                    Sudah punya akun?{" "}
                    <Link className="text-indigo-600 font-medium cursor-pointer hover:underline" to={"/login"} replace>
                        Login
                    </Link>
                </p>
            </div>
        </>
    );
}
