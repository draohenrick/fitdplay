import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import DashboardGerente from "./pages/DashboardGerente";
import DashboardVendedor from "./pages/DashboardVendedor";
import DashboardLoja from "./pages/DashboardLoja";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/gerente" element={<DashboardGerente />} />
        <Route path="/vendedor" element={<DashboardVendedor />} />
        <Route path="/loja" element={<DashboardLoja />} />
      </Routes>
    </Router>
  );
}
