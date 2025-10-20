import React from "react";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const location = useLocation();

  const navItems = [
    { name: "Início", path: "/" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Perfil", path: "/perfil" },
    { name: "Login", path: "/login" },
    { name: "Registrar", path: "/register" },
  ];

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68f223946ca857a4b64a79a4/5c12304f8_logo.png"
              alt="FitPlay Logo"
              className="h-8 w-auto"
            />
            <span className="text-xl font-semibold text-gray-800">FitPlay</span>
          </Link>

          {/* MENU */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium ${
                  location.pathname === item.path
                    ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                    : "text-gray-600 hover:text-blue-600 transition"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* BOTÃO MOBILE */}
          <div className="md:hidden">
            <button
              className="p-2 rounded-md text-gray-600 hover:text-blue-600 focus:outline-none"
              onClick={() => {
                const menu = document.getElementById("mobile-menu");
                menu.classList.toggle("hidden");
              }}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* MENU MOBILE */}
      <div id="mobile-menu" className="hidden md:hidden bg-white border-t border-gray-100">
        <div className="px-2 py-3 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                location.pathname === item.path
                  ? "text-blue-600 bg-blue-50"
                  : "text-gray-700 hover:bg-gray-100 hover:text-blue-600"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
