import {Route, Routes} from "react-router-dom";
import GuestLayout from "./layouts/Guest.layout";
import LoginPage from "./pages/Login.page";
import RegisterPage from "./pages/Register.page";
import DashboardPage from "./pages/Protected/Dashboard.page";
import ProtectedLayout from "./layouts/Protected.layout";
import ProtectedRoute from "./routes/Protected.route";
import TransaksiPage from "./pages/Protected/Transaksi.page";

function App() {
    return (
        <>
            <Routes>
                <Route element={<GuestLayout />}>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                </Route>
                <Route
                    element={
                        <ProtectedRoute>
                            <ProtectedLayout />
                        </ProtectedRoute>
                    }
                >
                    <Route path="/dashboard" element={<DashboardPage />} />
                    <Route path="/transaksi" element={<TransaksiPage/>} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
