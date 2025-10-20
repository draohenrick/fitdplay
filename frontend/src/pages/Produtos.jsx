import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Table from "../components/Table";

const Produtos = () => {
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
        <Header title="Produtos" />
        <Table columns={tableColumns} data={tableData} />
      </div>
    </div>
  );
};

export default Produtos;
