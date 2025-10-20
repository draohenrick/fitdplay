import React from "react";

const Nav = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-pink-500 text-white py-4 px-6 flex justify-between items-center shadow-lg">
      <h1 className="text-2xl font-bold">FitPlay</h1>
      <ul className="flex gap-6 text-lg">
        <li><a href="#" className="hover:underline">Início</a></li>
        <li><a href="#" className="hover:underline">Login</a></li>
        <li><a href="#" className="hover:underline">Registrar</a></li>
      </ul>
    </nav>
  );
};

export default Nav;
