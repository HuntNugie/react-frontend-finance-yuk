import {Outlet} from "react-router-dom";
import {Sidebar} from "../components/ProtectedComponent/Sidebar";
import {Navbar} from "../components/ProtectedComponent/Navbar";
import {useState} from "react";
import { SetupOverlay } from "../components/ProtectedComponent/SetupOverlay";

export default function ProtectedLayout() {
    const [sideOpen, setSideOpen] = useState(false);
    
    const handleToggle = () => {
        setSideOpen(!sideOpen);
    };
    const tes = false;
    
    return (
        <>
            {tes && <SetupOverlay/>}
            <div className="min-h-screen bg-gray-100 flex flex-col">
                {/* NAVBAR */}
                <Navbar onToggle={handleToggle} />
                {/* MAIN LAYOUT */}
                <div className="flex flex-1">
                    <Sidebar isOpen={sideOpen} />

                    <main className="flex-1 bg-gray-100 p-4 md:p-6 mt-16 md:mt-0">
                        <div className="max-w-7xl mx-auto">
                            <Outlet />
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}
