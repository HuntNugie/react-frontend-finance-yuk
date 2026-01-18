
export default function TransaksiPage() {
    return (
        <>
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Transaksi</h1>

            {/* SUMMARY CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
             
                <div className="bg-white rounded-xl shadow p-6">
                    <p className="text-sm text-gray-500">Pemasukan hari Ini</p>
                    <h2 className="text-2xl font-bold text-green-600">Rp 0</h2>
                </div>

                <div className="bg-white rounded-xl shadow p-6">
                    <p className="text-sm text-gray-500">Pengeluaran hari Ini</p>
                    <h2 className="text-2xl font-bold text-red-500">Rp 0</h2>
                </div>
            </div>

            {/* FORM TRANSAKSI */}
            <div className="bg-white rounded-xl shadow p-6 mb-8 max-w-2xl">
                <h2 className="font-semibold text-gray-800 mb-4">Tambah Transaksi</h2>

                <form className="space-y-4">
                    <div>
                        <label className="block text-sm text-gray-600 mb-1">Jenis Transaksi</label>
                        <select className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500">
                            <option>Pilih jenis</option>
                            <option value="INCOME">Pemasukan</option>
                            <option value="EXPENSE">Pengeluaran</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm text-gray-600 mb-1">Jumlah</label>
                        <input
                            type="number"
                            placeholder="Contoh: 50000"
                            className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm text-gray-600 mb-1">Kategori</label>
                        <select className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500">
                            <option>Pilih kategori</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm text-gray-600 mb-1">Tanggal</label>
                        <input
                            type="date"
                            className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm text-gray-600 mb-1">Catatan (opsional)</label>
                        <textarea
                            rows="3"
                            placeholder="Contoh: makan siang bareng teman"
                            className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-2.5 rounded-lg font-medium hover:bg-indigo-700 transition"
                    >
                        Simpan Transaksi
                    </button>
                </form>
            </div>

            {/* TABLE TRANSAKSI */}
            <div className="bg-white rounded-xl shadow p-6 mb-4">
                <h2 className="font-semibold text-gray-800 mb-4">Riwayat Transaksi</h2>

                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="text-left text-gray-500 border-b">
                                <th className="py-2">Tanggal</th>
                                <th>Deskripsi</th>
                                <th>Jenis</th>
                                <th>Jumlah</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b">
                                <td className="py-2">01-01-2026</td>
                                <td>Makan Siang</td>
                                <td className="text-red-500">Pengeluaran</td>
                                <td className="text-red-500">- Rp 50.000</td>
                            </tr>
                            <tr>
                                <td className="py-2">01-01-2026</td>
                                <td>Gaji</td>
                                <td className="text-green-600">Pemasukan</td>
                                <td className="text-green-600">+ Rp 8.000.000</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
