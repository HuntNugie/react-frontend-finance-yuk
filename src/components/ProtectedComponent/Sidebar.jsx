export const Sidebar = () => {
    return (
        <aside className="hidden md:block bg-white shadow w-64">
            <nav className="p-4 space-y-2">
                <a className="block px-4 py-2 rounded-lg bg-indigo-50 text-indigo-600 font-medium">📊 Dashboard</a>
                <a className="block px-4 py-2 rounded-lg hover:bg-gray-100">💰 Transaksi</a>
                <a className="block px-4 py-2 rounded-lg hover:bg-gray-100">📈 Laporan</a>
                <a className="block px-4 py-2 rounded-lg hover:bg-gray-100">⚙️ Pengaturan</a>
            </nav>
        </aside>
    );
};
