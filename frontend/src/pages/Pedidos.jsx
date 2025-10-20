// src/pages/Pedidos.jsx
import React from 'react';

const Pedidos = () => {
  const pedidos = [
    { cliente: 'Ana Paula', produto: 'Treino Online', valor: 'R$200', status: 'Concluído' },
    { cliente: 'Rafael Lima', produto: 'Academia FitPlay', valor: 'R$500', status: 'Pendente' },
    { cliente: 'Mariana Costa', produto: 'Personal Trainer', valor: 'R$350', status: 'Cancelado' },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-semibold mb-6">Pedidos</h1>
      <div className="bg-white rounded shadow p-4 overflow-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="border-b px-4 py-2">Cliente</th>
              <th className="border-b px-4 py-2">Produto</th>
              <th className="border-b px-4 py-2">Valor</th>
              <th className="border-b px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {pedidos.map((p, index) => (
              <tr key={index}>
                <td className="border-b px-4 py-2">{p.cliente}</td>
                <td className="border-b px-4 py-2">{p.produto}</td>
                <td className="border-b px-4 py-2">{p.valor}</td>
                <td
                  className={`border-b px-4 py-2 font-semibold ${
                    p.status === 'Concluído'
                      ? 'text-green-600'
                      : p.status === 'Pendente'
                      ? 'text-yellow-600'
                      : 'text-red-600'
                  }`}
                >
                  {p.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Pedidos;
