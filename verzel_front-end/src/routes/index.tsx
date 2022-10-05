import { Routes, Route  } from "react-router-dom";
import { CarrosPage } from "../pages/CarrosPage";
import { LoginPage } from "../pages/LoginPage";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/:login" element={<LoginPage />} />
      <Route path="/carros" element={<CarrosPage />} />
      
      <Route path="*" element={<p>Login</p>} />
    </Routes>
  )
}