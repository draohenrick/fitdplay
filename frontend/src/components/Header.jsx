import React from "react";
import { useAuth } from "../context/AuthContext";

const Header = ({ title }) => {
  const { user, logout } = useAuth();
  return (
    <header className="flex justify-between items-center mb-6">
      <div className="flex items-center gap-3">
        {user?.store?.logo && <img src={user.store.logo} alt="Logo" className="h-10 w-10 object-contain" />}
        <h1 className="text-2xl font-bold">{title} - {user?.store?.name}</h1>
      </div>
      <div className="flex items-center gap-3">
        <span>{user?.name} ({user?.type})</span>
        <button onClick={logout} className="px-3 py-1 bg-red-500 text-white rounded">Sair</button>
      </div>
    </header>
  );
};

export default Header;
