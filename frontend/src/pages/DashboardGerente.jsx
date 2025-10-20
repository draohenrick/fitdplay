import React, { useState, useEffect, useMemo } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Card from "../components/Card";
import Table from "../components/Table";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

// Mapeamento de cores para status
const STATUS_COLORS = {
  Concluído: "text-green-600 font-semibold",
  Pendente: "text-yellow-500 font-semibold",
  Cancelado: "text-red-600 font-semibold",
};

const DashboardGerente = () => {
  const [summary, setSummary] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterStatus, setFilterStatus] = useState("Todos");
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  // Dados para gráficos
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    // Simula fetch de API
    const fetchData = async () => {
      try {
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
          { Cliente: "Maria Clara", Produto: "Treino Online", Quantidade: 1, Valor: "R$ 200", Status: "Concluído" },
          { Cliente: "Rafael Costa", Produto: "Academia FitPlay", Quantidade: 1, Valor: "R$ 500", Status: "Pendente" },
          { Cliente: "Ana Paula", Produto: "Personal Trainer", Quantidade: 2, Valor: "R$ 700", Status: "Concluído" },
        ];
        const chartMockData = [
          { day: "Seg", faturamento: 5000, pedidos: 3 },
          { day: "Ter", faturamento: 8000, pedidos: 5 },
          { day: "Qua", faturamento: 7000, pedidos: 4 },
          { day: "Qui", faturamento: 12000, pedidos: 6 },
          { day: "Sex", faturamento: 15000, pedidos: 7 },
        ];

        setSummary(summaryData);
        setTableData(tableMockData);
        setChartData(chartMockData);
      } catch (error) {
        console.error("Erro ao carregar dados:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Filtra e pagina a tabela
  const filteredData = useMemo(() => {
    const data = filterStatus === "Todos" 
      ? tableData 
      : tableData.filter(row => row.Status === filterStatus);
    const startIndex = (currentPage - 1) * rowsPerPage;
    return data.slice(startIndex, startIndex + rowsPerPage);
  }, [tableData, filterStatus, currentPage]);

  const totalPages = useMemo(() => {
    return Math.ceil(
      (filterStatus === "Todos"
        ? tableData.length
        : tableData.filter(row => row.Status === filterStatus).length
      ) / rowsPerPage
    );
  }, [tableData, filterStatus]);

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

        {/* Gráficos */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div className="bg-white shadow rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-4">Faturamento da Semana</h2>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="faturamento" stroke="#4ade80" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="bg-white shadow rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-4">Pedidos da Semana</h2>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="pedidos" stroke="#60a5fa" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </section>

        {/* Filtros da tabela */}
        <section className="bg-white shadow rounded-lg p-4 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Pedidos Recentes</h2>
            <select
              value={filterStatus}
              onChange={(e) => {
                setFilterStatus(e.target.value);
                setCurrentPage(1);
              }}
              className="border rounded px-2 py-1"
            >
              <option value="Todos">Todos</option>
              <option value="Concluído">Concluído</option>
              <option value="Pendente">Pendente</option>
              <option value="Cancelado">Cancelado</option>
            </select>
          </div>

          <Table
            columns={["Cliente", "Produto", "Quantidade", "Valor", "Status"]}
            data={filteredData.map((row) => ({
              ...row,
              Status: <span className={STATUS_COLORS[row.Status] || "text-gray-700"}>{row.Status}</span>,
            }))}
          />

          {/* Paginação */}
          <div className="flex justify-end mt-4 gap-2">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(prev => prev - 1)}
              className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
            >
              Anterior
            </button>
            <span className="px-3 py-1">{currentPage} / {totalPages}</span>
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(prev => prev + 1)}
              className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
            >
              Próximo
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DashboardGerente;
