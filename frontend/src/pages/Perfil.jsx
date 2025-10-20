import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const Perfil = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-6 overflow-auto">
        <Header title="Perfil do Usuário" />
        <div className="bg-white p-6 rounded shadow max-w-md">
          <div className="flex items-center mb-4">
            <img
              src="https://via.placeholder.com/80"
              alt="Usuário"
              className="rounded-full mr-4"
            />
            <div>
              <h2 className="text-xl font-semibold">Lucas Almeida</h2>
              <p className="text-gray-500">lucas@gmail.com</p>
            </div>
          </div>
          <div className="space-y-2">
            <p><strong>Telefone:</strong> 1199999-9999</p>
            <p><strong>Função:</strong> Gerente</p>
            <p><strong>Status:</strong> Ativo</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
