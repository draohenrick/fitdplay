import React from "react";
import Nav from "./Nav.jsx";

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <Nav />
      <main className="p-8 text-center">
        <h1 className="text-4xl font-bold mb-4">FitPlay</h1>
        <p className="text-lg text-gray-600">
          Bem-vindo à plataforma de gestão fitness mais moderna do mercado.
        </p>
      </main>
    </div>
  );
};

export default Layout;
