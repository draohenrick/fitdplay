import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 shadow-md text-white py-4 px-6 flex justify-between items-center">
      <h1 className="text-2xl font-bold tracking-wide">FitDplay</h1>
      <div className="space-x-6">
        <Link to="/" className="hover:text-gray-200">Início</Link>
        <Link to="/login" className="hover:text-gray-200">Login</Link>
        <Link to="/register" className="hover:text-gray-200">Cadastro</Link>
      </div>
    </nav>
  );
}
