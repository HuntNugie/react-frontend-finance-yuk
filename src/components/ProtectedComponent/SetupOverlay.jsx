import { useState } from "react";
import { createAccount } from "../../service/Account.service";
import { useAuth } from "../../hooks/useAuth";

export const SetupOverlay = () => {
    const [saldo, setSaldo] = useState(0);
    const [loading, setLoading] = useState(false);
    const {handleCheck} = useAuth();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            await createAccount({saldo});
            await handleCheck();
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };
    return (
        <>
            <div className="fixed inset-0 z-50 flex items-center justify-center">
                {/* BACKDROP */}
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

                {/* CONTENT */}
                <div className="relative bg-white rounded-xl shadow-xl p-8 w-[90%] max-w-md text-center">
                    <h2 className="text-xl font-bold text-gray-800 mb-2">Selamat Datang di FinanceYuk</h2>

                    <p className="text-sm text-gray-600 mb-6">
                        Sebelum mulai, kami perlu mengetahui saldo awal kamu agar pencatatan keuangan lebih akurat.
                    </p>

                    {/* TITLE */}
                    <h2 className="text-xl font-bold text-gray-800 mb-2 text-center">Setup Saldo Awal</h2>

                    <p className="text-sm text-gray-500 text-center mb-6">
                        Masukkan saldo awal untuk memulai pencatatan keuanganmu
                    </p>

                    {/* FORM */}
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Saldo Awal</label>
                            <input
                                type="number"
                                placeholder="Contoh: 1000000"
                                onChange={(e) => setSaldo(e.target.value)}
                                className="
                w-full rounded-lg border border-gray-300
                px-4 py-2
                focus:outline-none focus:ring-2 focus:ring-indigo-500
                focus:border-indigo-500
              "
                            />
                        </div>

                        {/* ACTION */}
                        <button
                            type="submit"
                            className="
              w-full rounded-lg bg-indigo-600
              py-2.5 font-semibold text-white
              hover:bg-indigo-700
              transition
            "
                            disabled={loading}
                        >
                            {loading ? "tunggu sebentar" : "Lanjut"}
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};
