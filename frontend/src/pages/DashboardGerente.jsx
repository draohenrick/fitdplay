import React, { useMemo } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Card from "../components/Card";
import Table from "../components/Table";

/**
 * DashboardGerente - Componente principal do dashboard
 */
const DashboardGerente = () => {
  // Dados de resumo, useMemo evita recriação desnecessária
  const summary = useMemo(() => [
    { title: "Faturamento Hoje", value: "R$ 15.000", color: "green" },
    { title: "Clientes Ativos", value: "120", color: "blue" },
    { title: "Pedidos Pendentes", value: "5", color: "yellow" },
    { title: "Produtos Cadastrados", value: "80", color: "gray" },
  ], []);

  // Dados da tabela, podem vir de uma API no futuro
  const tableColumns = useMemo(() => ["Cliente", "Produto", "Quantidade", "Valor", "Status"], []);
  const tableData = useMemo(() => [
    { Cliente: "Lucas Almeida", Produto: "Treino Online", Quantidade: 1, Valor: "R$ 200", Status: "Concluído" },
    { Cliente: "Fernanda Souza", Produto: "Academia FitPlay", Quantidade: 2, Valor: "R$ 1.000", Status: "Pendente" },
    { Cliente: "Gustavo Lima", Produto: "Personal Trainer", Quantidade: 1, Valor: "R$ 350", Status: "Cancelado" },
  ], []);

  // Map de cores por status para exibição visual na tabela
  const statusColors = {
    Concluído: "text-green-600 font-semibold",
    Pendente: "text-yellow-500 font-semibold",
    Cancelado: "text-red-600 font-semibold",
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-6 overflow-auto">
        <Header title="Dashboard do Gerente" />

        {/* Cards resumo */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {summary.map((card, index) => (
            <Card key={index} title={card.title} value={card.value} color={card.color} />
          ))}
        </section>

        {/* Tabela de pedidos */}
        <section className="bg-white shadow rounded-lg p-4">
          <Table 
            columns={tableColumns} 
            data={tableData.map(row => ({
              ...row,
              Status: <span className={statusColors[row.Status] || "text-gray-700"}>{row.Status}</span>
            }))} 
          />
        </section>
      </main>
    </div>
  );
};

export default DashboardGerente;
