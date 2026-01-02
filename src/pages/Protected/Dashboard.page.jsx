export default function DashboardPage() {
    return (
        <>
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Ringkasan Keuangan</h1>
            {/* CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white rounded-xl shadow p-6">
                    <p className="text-sm text-gray-500">Saldo</p>
                    <h2 className="text-2xl font-bold text-gray-800">Rp 12.500.000</h2>
                </div>
                <div className="bg-white rounded-xl shadow p-6">
                    <p className="text-sm text-gray-500">Pemasukan</p>
                    <h2 className="text-2xl font-bold text-green-600">Rp 8.000.000</h2>
                </div>
                <div className="bg-white rounded-xl shadow p-6">
                    <p className="text-sm text-gray-500">Pengeluaran</p>
                    <h2 className="text-2xl font-bold text-red-500">Rp 5.500.000</h2>
                </div>
            </div>
            {/* TABLE */}
            <div className="bg-white rounded-xl shadow p-6">
                <h2 className="font-semibold text-gray-800 mb-4">Transaksi Terakhir</h2>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="text-left text-gray-500 border-b">
                                <th className="py-2">Tanggal</th>
                                <th>Deskripsi</th>
                                <th>Jumlah</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b">
                                <td className="py-2">01-01-2026</td>
                                <td>Makan Siang</td>
                                <td className="text-red-500">- Rp 50.000</td>
                            </tr>
                            <tr>
                                <td className="py-2">01-01-2026</td>
                                <td>Gaji</td>
                                <td className="text-green-600">+ Rp 8.000.000</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
