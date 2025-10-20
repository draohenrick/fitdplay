// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Dashboards
import DashboardGerente from "./pages/DashboardGerente";
import DashboardVendedor from "./pages/DashboardVendedor";
import DashboardLoja from "./pages/DashboardLoja";

// Páginas adicionais
import Clientes from "./pages/Clientes";
import Pedidos from "./pages/Pedidos";
import Produtos from "./pages/Produtos";
import Perfil from "./pages/Perfil";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Dashboards */}
        <Route path="/" element={<Navigate to="/dashboard-gerente" />} />
        <Route path="/dashboard-gerente" element={<DashboardGerente />} />
        <Route path="/dashboard-vendedor" element={<DashboardVendedor />} />
        <Route path="/dashboard-loja" element={<DashboardLoja />} />

        {/* Outras páginas */}
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/pedidos" element={<Pedidos />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/perfil" element={<Perfil />} />

        {/* Rota fallback */}
        <Route path="*" element={<div className="p-6">Página não encontrada</div>} />
      </Routes>
    </Router>
  );
};

export default App;
