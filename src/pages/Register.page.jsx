export default function RegisterPage() {
    return (
        <>
            <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-8">
                {/* Logo */}
                <div className="text-center mb-6">
                    <img src="/image/logo-Only.png" className="w-24 h-24 mx-auto mb-2" alt="Logo" />
                    <h1 className="text-2xl font-bold text-indigo-600">FinanceYuk</h1>
                    <p className="text-sm text-gray-500">Daftar dan mulai kendalikan keuanganmu</p>
                </div>

                {/* Form */}
                <form className="space-y-4">
                    {/* Nama */}
                    <div>
                        <label className="text-sm text-gray-600">Nama Lengkap</label>
                        <input
                            type="text"
                            placeholder="Nama lengkap"
                            className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="text-sm text-gray-600">Email</label>
                        <input
                            type="email"
                            placeholder="email@example.com"
                            className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="text-sm text-gray-600">Password</label>
                        <input
                            type="password"
                            placeholder="Minimal 8 karakter"
                            className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    {/* Konfirmasi Password */}
                    <div>
                        <label className="text-sm text-gray-600">Konfirmasi Password</label>
                        <input
                            type="password"
                            placeholder="Ulangi password"
                            className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    {/* Jenis Kelamin */}
                    <div>
                        <label className="text-sm text-gray-600">Jenis Kelamin</label>
                        <select className="w-full mt-1 px-4 py-2 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500">
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
                            className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition cursor-pointer"
                    >
                        Daftar
                    </button>
                </form>

                {/* Footer Text */}
                <p className="text-sm text-center text-gray-500 mt-4">
                    Sudah punya akun?{" "}
                    <span className="text-indigo-600 font-medium cursor-pointer hover:underline">Login</span>
                </p>
            </div>
        </>
    );
}
