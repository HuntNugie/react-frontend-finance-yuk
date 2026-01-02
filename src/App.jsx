import {Route, Routes} from "react-router-dom";
import GuestLayout from "./layouts/Guest.layout";
import LoginPage from "./pages/Login.page";
import RegisterPage from "./pages/Register.page";

function App() {
    return (
        <>
            <Routes>
                <Route element={<GuestLayout />}>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
