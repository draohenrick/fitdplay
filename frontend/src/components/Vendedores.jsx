import Table from '../components/Table';

export default function Vendedores() {
  const columns = ["ID", "Nome", "Email", "Vendas"];
  const data = [
    { ID: 1, Nome: "Carlos", Email: "carlos@fitplay.com", Vendas: 20 },
    { ID: 2, Nome: "Ana", Email: "ana@fitplay.com", Vendas: 15 },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Vendedores</h2>
      <Table columns={columns} data={data} />
    </div>
  );
}
