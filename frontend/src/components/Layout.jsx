import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "./Nav";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar fixa */}
      <Nav />

      {/* Espaço para compensar a altura da navbar */}
      <div className="pt-16 flex-1">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Outlet />
        </main>
      </div>

      {/* Rodapé */}
      <footer className="bg-white border-t border-gray-200 py-4 text-center text-sm text-gray-500">
        <p>
          © {new Date().getFullYear()} <span className="font-semibold">FitPlay</span> — Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
};

export default Layout;
