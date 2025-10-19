import Table from '../components/Table';

export default function Produtos() {
  const columns = ["ID", "Nome", "Preço", "Estoque"];
  const data = [
    { ID: 1, Nome: "Produto A", Preço: "R$ 100", Estoque: 50 },
    { ID: 2, Nome: "Produto B", Preço: "R$ 150", Estoque: 30 },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Produtos</h2>
      <Table columns={columns} data={data} />
    </div>
  );
}
