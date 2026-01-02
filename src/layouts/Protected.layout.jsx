import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/ProtectedComponent/Sidebar";

export default function ProtectedLayout() {
    return (
        <>
            <div className="min-h-screen bg-gray-100 flex flex-col">
                {/* NAVBAR */}
                <nav className="bg-white shadow px-6 py-4 flex items-center justify-between">
                    {/* Left */}
                    <div className="flex items-center gap-3">
                        {/* Hamburger (mobile only) */}
                        <button className="md:hidden text-xl">☰</button>
                        <img src="/images/logo.png" alt="Logo" className="w-8 h-8" />
                        <span className="font-bold text-indigo-600">FinanceYuk</span>
                    </div>
                    {/* Center */}
                    <div className="hidden md:block text-sm italic text-gray-500">
                        “Uang yang dicatat adalah uang yang terkendali.”
                    </div>
                    {/* Right */}
                    <div className="flex items-center gap-3">
                        <span className="text-gray-700 font-medium">Nugie</span>
                        <div className="w-9 h-9 rounded-full bg-indigo-100 flex items-center justify-center font-bold text-indigo-600">
                            N
                        </div>
                    </div>
                </nav>
                {/* MAIN LAYOUT */}
                <div className="flex flex-1">
                    {/* SIDEBAR */}
                    <Sidebar/>
                    {/* CONTENT */}
                    <main className="flex-1 p-6">
                        <Outlet/>
                    </main>
                </div>
            </div>
        </>
    );
}
