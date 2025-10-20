import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Card from "../components/Card";
import Table from "../components/Table";

// Mapeamento de cores para status
const STATUS_COLORS = {
  Concluído: "text-green-600 font-semibold",
  Pendente: "text-yellow-500 font-semibold",
  Cancelado: "text-red-600 font-semibold",
};

const DashboardGerente = () => {
  // Estado dos cards
  const [summary, setSummary] = useState([]);
  // Estado da tabela
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simulação de fetch de dados (substituir por API real futuramente)
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Aqui você poderia usar fetch ou axios para dados reais
        const summaryData = [
          { title: "Faturamento Hoje", value: "R$ 15.000", color: "green" },
          { title: "Clientes Ativos", value: "120", color: "blue" },
          { title: "Pedidos Pendentes", value: "5", color: "yellow" },
          { title: "Produtos Cadastrados", value: "80", color: "gray" },
        ];
        const tableMockData = [
          { Cliente: "Lucas Almeida", Produto: "Treino Online", Quantidade: 1, Valor: "R$ 200", Status: "Concluído" },
          { Cliente: "Fernanda Souza", Produto: "Academia FitPlay", Quantidade: 2, Valor: "R$ 1.000", Status: "Pendente" },
          { Cliente: "Gustavo Lima", Produto: "Personal Trainer", Quantidade: 1, Valor: "R$ 350", Status: "Cancelado" },
        ];
        setSummary(summaryData);
        setTableData(tableMockData);
      } catch (error) {
        console.error("Erro ao carregar dados:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-500 text-lg">Carregando dashboard...</p>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-6 overflow-auto">
        <Header title="Dashboard do Gerente" />

        {/* Cards resumo */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {summary.map((card, i) => (
            <Card key={i} title={card.title} value={card.value} color={card.color} />
          ))}
        </section>

        {/* Tabela de pedidos */}
        <section className="bg-white shadow rounded-lg p-4 overflow-auto">
          <Table
            columns={["Cliente", "Produto", "Quantidade", "Valor", "Status"]}
            data={tableData.map((row) => ({
              ...row,
              Status: <span className={STATUS_COLORS[row.Status] || "text-gray-700"}>{row.Status}</span>,
            }))}
          />
        </section>
      </main>
    </div>
  );
};

export default DashboardGerente;
