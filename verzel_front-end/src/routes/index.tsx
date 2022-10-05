import { Routes, Route  } from "react-router-dom";
import { LoginPage } from "../pages/login";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/login/register" element={<LoginPage />} />
      
      <Route path="*" element={<p>Login</p>} />
    </Routes>
  )
}