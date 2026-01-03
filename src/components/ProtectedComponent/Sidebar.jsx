import {useState} from "react";
import {useAuth} from "../../hooks/useAuth";
import {Loading} from "../Loading";
import {useNavigate} from "react-router-dom";

export const Sidebar = ({isOpen}) => {
    const {handleLogout} = useAuth();
    const [loading, setLoading] = useState(false);
    const nav = useNavigate();
    const handleLogoutKlik = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            await handleLogout();
            nav("/login", {replace: true});
        } finally {
            setLoading(false);
        }
    };
    if (loading) {
        return <Loading />;
    }
    return (
        <aside
            className={`
    fixed top-16 left-0 bottom-0 z-40 w-64 bg-white shadow
    transform transition-transform duration-300 md:pt-16
    ${isOpen ? "translate-x-0" : "-translate-x-full"}
    md:static md:translate-x-0 md:top-0
  `}
        >
            <nav className="p-4 space-y-2">
                <a className="block px-4 py-2 rounded-lg bg-indigo-50 text-indigo-600 font-medium">📊 Dashboard</a>
                <a className="block px-4 py-2 rounded-lg hover:bg-gray-100">💰 Transaksi</a>
                <a className="block px-4 py-2 rounded-lg hover:bg-gray-100">📈 Laporan</a>
                <a className="block px-4 py-2 rounded-lg hover:bg-gray-100">⚙️ Pengaturan</a>
                <button
                    type="button"
                    className="
    w-full flex items-center gap-2
    px-4 py-2 rounded-lg
    text-red-600 font-medium
    hover:bg-red-300
    transition
    cursor-pointer
  "
                    onClick={handleLogoutKlik}
                >
                    🚪 Logout
                </button>
            </nav>
        </aside>
    );
};
