export const SetupOverlay = () => {
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

                    <button
                        type="button"
                        className="
            w-full bg-indigo-600 text-white
            py-2 rounded-lg font-semibold
            hover:bg-indigo-700
            transition cursor-pointer
          "
                    >
                        Lanjut Setup Data
                    </button>
                </div>
            </div>
        </>
    );
};
