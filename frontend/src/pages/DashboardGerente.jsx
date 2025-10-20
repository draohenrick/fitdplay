import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Card from "../components/Card";
import Table from "../components/Table";

const DashboardGerente = () => {
  const summary = [
    { title: "Faturamento Hoje", value: "R$ 15.000", color: "green" },
    { title: "Clientes Ativos", value: "120", color: "blue" },
    { title: "Pedidos Pendentes", value: "5", color: "yellow" },
    { title: "Produtos Cadastrados", value: "80", color: "gray" },
  ];

  const tableColumns = ["Cliente", "Produto", "Quantidade", "Valor", "Status"];
  const tableData = [
    { Cliente: "Lucas Almeida", Produto: "Treino Online", Quantidade: 1, Valor: "R$ 200", Status: "Concluído" },
    { Cliente: "Fernanda Souza", Produto: "Academia FitPlay", Quantidade: 2, Valor: "R$ 1.000", Status: "Pendente" },
    { Cliente: "Gustavo Lima", Produto: "Personal Trainer", Quantidade: 1, Valor: "R$ 350", Status: "Cancelado" },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-6 overflow-auto">
        <Header title="Dashboard do Gerente" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {summary.map((c, i) => (
            <Card key={i} title={c.title} value={c.value} color={c.color} />
          ))}
        </div>
        <Table columns={tableColumns} data={tableData} />
      </div>
    </div>
  );
};

export default DashboardGerente;
