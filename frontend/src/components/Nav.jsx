import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="bg-primary text-white shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold tracking-wide">FitDplay</h1>
      <ul className="flex space-x-6">
        <li>
          <Link to="/" className="hover:text-accent transition-colors">Home</Link>
        </li>
        <li>
          <Link to="/login" className="hover:text-accent transition-colors">Login</Link>
        </li>
        <li>
          <Link to="/register" className="hover:text-accent transition-colors">Cadastro</Link>
        </li>
      </ul>
    </nav>
  );
}
