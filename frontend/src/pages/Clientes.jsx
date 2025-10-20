import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Table from "../components/Table";

const Clientes = () => {
  const tableColumns = ["Nome", "Email", "Telefone", "Status"];
  const tableData = [
    { Nome: "Lucas Almeida", Email: "lucas@gmail.com", Telefone: "1199999-9999", Status: "Ativo" },
    { Nome: "Fernanda Souza", Email: "fernanda@gmail.com", Telefone: "1198888-8888", Status: "Ativo" },
    { Nome: "Gustavo Lima", Email: "gustavo@gmail.com", Telefone: "1197777-7777", Status: "Inativo" },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-6 overflow-auto">
        <Header title="Clientes" />
        <Table columns={tableColumns} data={tableData} />
      </div>
    </div>
  );
};

export default Clientes;
