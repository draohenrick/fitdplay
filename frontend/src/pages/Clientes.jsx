// src/pages/Clientes.jsx
import React from 'react';

const Clientes = () => {
  const clientes = [
    { nome: 'João Silva', email: 'joao@email.com', telefone: '1234-5678' },
    { nome: 'Maria Oliveira', email: 'maria@email.com', telefone: '2345-6789' },
    { nome: 'Carlos Souza', email: 'carlos@email.com', telefone: '3456-7890' },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-semibold mb-6">Clientes</h1>
      <div className="bg-white rounded shadow p-4 overflow-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="border-b px-4 py-2">Nome</th>
              <th className="border-b px-4 py-2">Email</th>
              <th className="border-b px-4 py-2">Telefone</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map((c, index) => (
              <tr key={index}>
                <td className="border-b px-4 py-2">{c.nome}</td>
                <td className="border-b px-4 py-2">{c.email}</td>
                <td className="border-b px-4 py-2">{c.telefone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Clientes;
