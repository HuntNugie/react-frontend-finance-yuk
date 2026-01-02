import {Outlet} from "react-router-dom";
export default function GuestLayout() {
    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-800 flex flex-col">
                {/* CONTENT */}
                <div className="flex flex-1 items-center justify-center">
                    <Outlet />
                </div>
            </div>
        </>
    );
}
