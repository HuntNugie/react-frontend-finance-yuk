import {Outlet} from "react-router-dom";
import {Sidebar} from "../components/ProtectedComponent/Sidebar";
import {Navbar} from "../components/ProtectedComponent/Navbar";

export default function ProtectedLayout() {
    return (
        <>
            <div className="min-h-screen bg-gray-100 flex flex-col">
                {/* NAVBAR */}
                <Navbar />
                {/* MAIN LAYOUT */}
                <div className="flex flex-1">
                    {/* SIDEBAR */}
                    <Sidebar />
                    {/* CONTENT */}
                    <main className="flex-1 p-6">
                        <Outlet />
                    </main>
                </div>
            </div>
        </>
    );
}
