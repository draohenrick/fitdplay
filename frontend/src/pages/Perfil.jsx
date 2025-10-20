// src/pages/Perfil.jsx
import React from 'react';

const Perfil = () => {
  const usuario = {
    nome: 'João Silva',
    email: 'joao@email.com',
    telefone: '1234-5678',
    funcao: 'Gerente',
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex justify-center items-start">
      <div className="bg-white p-6 rounded shadow w-full max-w-md">
        <h1 className="text-3xl font-semibold mb-4">Meu Perfil</h1>
        <div className="space-y-2">
          <p>
            <strong>Nome:</strong> {usuario.nome}
          </p>
          <p>
            <strong>Email:</strong> {usuario.email}
          </p>
          <p>
            <strong>Telefone:</strong> {usuario.telefone}
          </p>
          <p>
            <strong>Função:</strong> {usuario.funcao}
          </p>
        </div>
        <button className="mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Editar Perfil
        </button>
      </div>
    </div>
  );
};

export default Perfil;
