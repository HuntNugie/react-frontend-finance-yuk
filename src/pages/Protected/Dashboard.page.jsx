import { ChartFinance } from "../../components/ProtectedComponent/ChartFinance";
import { useAuth } from "../../hooks/useAuth";
import { formatIdr } from "../../utils/currency";

export default function DashboardPage() {
    const {user} = useAuth();
    const weeklyData = [
        {label: "Sen", amount: 200000},
        {label: "Sel", amount: 350000},
        {label: "Rab", amount: 150000},
        {label: "Kam", amount: 400000},
        {label: "Jum", amount: 300000},
        {label: "Sab", amount: 500000},
        {label: "Min", amount: 250000},
    ];

    const monthlyData = [
        {label: "Minggu 1", amount: 2500000},
        {label: "Minggu 2", amount: 3200000},
        {label: "Minggu 3", amount: 2800000},
        {label: "Minggu 4", amount: 3500000},
    ];

    return (
        <>
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Ringkasan Keuangan</h1>
            {/* CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white rounded-xl shadow p-6">
                    <p className="text-sm text-gray-500">Saldo</p>
                    <h2 className="text-2xl font-bold text-gray-800"> {formatIdr(user?.data?.wallet?.saldo) || "Rp.0"}</h2>
                </div>
                <div className="bg-white rounded-xl shadow p-6">
                    <p className="text-sm text-gray-500">Total Pemasukan</p>
                    <h2 className="text-2xl font-bold text-green-600">Rp 0</h2>
                </div>
                <div className="bg-white rounded-xl shadow p-6">
                    <p className="text-sm text-gray-500">Total Pengeluaran</p>
                    <h2 className="text-2xl font-bold text-red-500">Rp 0</h2>
                </div>
            </div>
            {/* TABLE */}
            <div className="bg-white rounded-xl shadow p-6 mb-4">
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

            {/* CHARTS */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                <ChartFinance title={"Pengeluaran minggu ini"} data={weeklyData}/>    
                <ChartFinance title={"Pemasukan minggu ini"} data={weeklyData}/>    
                <ChartFinance title={"Pengeluaran bulan ini"} data={monthlyData}/>    
                <ChartFinance title={"Pemasukan bulan ini"} data={monthlyData}/>    
            </div>
        </>
    );
}
