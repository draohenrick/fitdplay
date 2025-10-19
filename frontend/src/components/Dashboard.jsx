import Card from '../components/Card';

export default function Dashboard() {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card title="Vendas Hoje" value="R$ 12.345" icon="💰" />
      <Card title="Produtos Ativos" value="120" icon="📦" />
      <Card title="Vendedores" value="15" icon="👨‍💼" />
    </div>
  );
}
