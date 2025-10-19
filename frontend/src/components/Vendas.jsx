import Table from '../components/Table';

export default function Vendas() {
  const columns = ["ID", "Cliente", "Produto", "Valor", "Data"];
  const data = [
    { ID: 1, Cliente: "João", Produto: "Produto A", Valor: "R$ 100", Data: "19/10/2025" },
    { ID: 2, Cliente: "Maria", Produto: "Produto B", Valor: "R$ 150", Data: "19/10/2025" },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Vendas</h2>
      <Table columns={columns} data={data} />
    </div>
  );
}
