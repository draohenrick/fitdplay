import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const menu = [
    { name: "Dashboard Gerente", path: "/dashboard-gerente" },
    { name: "Dashboard Vendedor", path: "/dashboard-vendedor" },
    { name: "Dashboard Loja", path: "/dashboard-loja" },
    { name: "Clientes", path: "/clientes" },
    { name: "Pedidos", path: "/pedidos" },
    { name: "Produtos", path: "/produtos" },
    { name: "Perfil", path: "/perfil" },
  ];

  return (
    <aside className="w-64 bg-white shadow-md flex flex-col">
      <div className="p-6 text-2xl font-bold border-b">FitPlay</div>
      <nav className="flex-1 p-4 space-y-2">
        {menu.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`block px-4 py-2 rounded hover:bg-gray-200 ${
              location.pathname === item.path ? "bg-gray-200 font-semibold" : ""
            }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
