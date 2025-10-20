// src/pages/Produtos.jsx
import React from 'react';

const Produtos = () => {
  const produtos = [
    { nome: 'Treino Online', preco: 'R$200', estoque: 50 },
    { nome: 'Academia FitPlay', preco: 'R$500', estoque: 20 },
    { nome: 'Personal Trainer', preco: 'R$350', estoque: 15 },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-semibold mb-6">Produtos</h1>
      <div className="bg-white rounded shadow p-4 overflow-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="border-b px-4 py-2">Produto</th>
              <th className="border-b px-4 py-2">Preço</th>
              <th className="border-b px-4 py-2">Estoque</th>
            </tr>
          </thead>
          <tbody>
            {produtos.map((p, index) => (
              <tr key={index}>
                <td className="border-b px-4 py-2">{p.nome}</td>
                <td className="border-b px-4 py-2">{p.preco}</td>
                <td className="border-b px-4 py-2">{p.estoque}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Produtos;
