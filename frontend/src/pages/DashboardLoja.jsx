import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Card from "../components/Card";
import Table from "../components/Table";

const DashboardLoja = () => {
  const summary = [
    { title: "Pedidos Hoje", value: "32", color: "green" },
    { title: "Produtos em Estoque", value: "120", color: "blue" },
    { title: "Produtos Esgotados", value: "8", color: "red" },
    { title: "Lucro do Dia", value: "R$ 4.500", color: "yellow" },
  ];

  const tableColumns = ["Produto", "Categoria", "Estoque", "Preço", "Status"];
  const tableData = [
    { Produto: "Treino Online", Categoria: "Digital", Estoque: "-", Preço: "R$ 200", Status: "Disponível" },
    { Produto: "Academia FitPlay", Categoria: "Presencial", Estoque: 5, Preço: "R$ 500", Status: "Disponível" },
    { Produto: "Personal Trainer", Categoria: "Serviço", Estoque: "-", Preço: "R$ 350", Status: "Disponível" },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-6 overflow-auto">
        <Header title="Dashboard da Loja" />
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

export default DashboardLoja;
