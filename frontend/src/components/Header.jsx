import React from "react";

const Header = ({ title }) => {
  return (
    <header className="flex justify-between items-center mb-6">
      <h1 className="text-3xl font-semibold text-gray-800">{title}</h1>
      <div className="flex items-center space-x-4">
        <span className="text-gray-700">Olá, Usuário</span>
        <img
          src="https://via.placeholder.com/40"
          alt="Usuário"
          className="rounded-full"
        />
      </div>
    </header>
  );
};

export default Header;
