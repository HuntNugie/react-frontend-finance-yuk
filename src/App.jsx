import {Route, Routes} from "react-router-dom";
import GuestLayout from "./layouts/Guest.layout";
import LoginPage from "./pages/Login.page";
import RegisterPage from "./pages/Register.page";
import DashboardPage from "./pages/Protected/Dashboard.page";
import ProtectedLayout from "./layouts/Protected.layout";

function App() {
    return (
        <>
            <Routes>
                <Route element={<GuestLayout />}>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                </Route>
                <Route element={<ProtectedLayout />}>
                    <Route path="/dashboard" element={<DashboardPage />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
