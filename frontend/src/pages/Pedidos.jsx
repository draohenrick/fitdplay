import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Table from "../components/Table";

const Pedidos = () => {
  const tableColumns = ["Pedido", "Cliente", "Produto", "Quantidade", "Valor", "Status"];
  const tableData = [
    { Pedido: "#001", Cliente: "Lucas Almeida", Produto: "Treino Online", Quantidade: 1, Valor: "R$ 200", Status: "Concluído" },
    { Pedido: "#002", Cliente: "Fernanda Souza", Produto: "Academia FitPlay", Quantidade: 2, Valor: "R$ 1.000", Status: "Pendente" },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-6 overflow-auto">
        <Header title="Pedidos" />
        <Table columns={tableColumns} data={tableData} />
      </div>
    </div>
  );
};

export default Pedidos;
