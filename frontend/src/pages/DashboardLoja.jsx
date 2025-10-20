// src/pages/DashboardLoja.jsx
import React from 'react';

const DashboardLoja = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md flex flex-col">
        <div className="p-6 text-2xl font-bold border-b">FitPlay Loja</div>
        <nav className="flex-1 p-4 space-y-2">
          <a href="#" className="block px-4 py-2 rounded hover:bg-gray-200">Dashboard</a>
          <a href="#" className="block px-4 py-2 rounded hover:bg-gray-200">Produtos</a>
          <a href="#" className="block px-4 py-2 rounded hover:bg-gray-200">Pedidos</a>
          <a href="#" className="block px-4 py-2 rounded hover:bg-gray-200">Clientes</a>
          <a href="#" className="block px-4 py-2 rounded hover:bg-gray-200">Configurações</a>
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 p-6 overflow-auto">
        {/* Header */}
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-semibold text-gray-800">Dashboard da Loja</h1>
          <div className="flex items-center space-x-4">
            <span className="text-gray-700">Olá, Loja</span>
            <img
              src="https://via.placeholder.com/40"
              alt="Usuário"
              className="rounded-full"
            />
          </div>
        </header>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div className="bg-white p-4 rounded shadow flex flex-col">
            <span className="text-gray-500">Vendas Hoje</span>
            <span className="text-2xl font-bold">R$ 7.800</span>
          </div>
          <div className="bg-white p-4 rounded shadow flex flex-col">
            <span className="text-gray-500">Produtos</span>
            <span className="text-2xl font-bold">120</span>
          </div>
          <div className="bg-white p-4 rounded shadow flex flex-col">
            <span className="text-gray-500">Pedidos Pendentes</span>
            <span className="text-2xl font-bold">18</span>
          </div>
          <div className="bg-white p-4 rounded shadow flex flex-col">
            <span className="text-gray-500">Clientes Ativos</span>
            <span className="text-2xl font-bold">90</span>
          </div>
        </div>

        {/* Data Table */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">Últimos Pedidos</h2>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="border-b px-4 py-2">Cliente</th>
                <th className="border-b px-4 py-2">Produto</th>
                <th className="border-b px-4 py-2">Quantidade</th>
                <th className="border-b px-4 py-2">Valor</th>
                <th className="border-b px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b px-4 py-2">Lucas Almeida</td>
                <td className="border-b px-4 py-2">Treino Online</td>
                <td className="border-b px-4 py-2">1</td>
                <td className="border-b px-4 py-2">R$ 200</td>
                <td className="border-b px-4 py-2 text-green-600 font-semibold">Concluído</td>
              </tr>
              <tr>
                <td className="border-b px-4 py-2">Fernanda Souza</td>
                <td className="border-b px-4 py-2">Academia FitPlay</td>
                <td className="border-b px-4 py-2">2</td>
                <td className="border-b px-4 py-2">R$ 1.000</td>
                <td className="border-b px-4 py-2 text-yellow-600 font-semibold">Pendente</td>
              </tr>
              <tr>
                <td className="border-b px-4 py-2">Gustavo Lima</td>
                <td className="border-b px-4 py-2">Personal Trainer</td>
                <td className="border-b px-4 py-2">1</td>
                <td className="border-b px-4 py-2">R$ 350</td>
                <td className="border-b px-4 py-2 text-red-600 font-semibold">Cancelado</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardLoja;
