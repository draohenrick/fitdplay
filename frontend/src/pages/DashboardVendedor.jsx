import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Card from "../components/Card";
import Table from "../components/Table";

const DashboardVendedor = () => {
  const summary = [
    { title: "Vendas Hoje", value: "R$ 8.500", color: "green" },
    { title: "Clientes Atendidos", value: "45", color: "blue" },
    { title: "Pedidos Pendentes", value: "3", color: "yellow" },
    { title: "Comissões", value: "R$ 1.200", color: "red" },
  ];

  const tableColumns = ["Cliente", "Produto", "Quantidade", "Valor", "Status"];
  const tableData = [
    { Cliente: "Ana Clara", Produto: "Treino Online", Quantidade: 1, Valor: "R$ 200", Status: "Concluído" },
    { Cliente: "Carlos Eduardo", Produto: "Academia FitPlay", Quantidade: 1, Valor: "R$ 500", Status: "Pendente" },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-6 overflow-auto">
        <Header title="Dashboard do Vendedor" />
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

export default DashboardVendedor;
