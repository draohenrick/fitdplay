// src/pages/DashboardGerente.jsx
export default function DashboardGerente() {
  return (
    <div className="p-10 text-center bg-gradient-to-tr from-blue-600 via-purple-600 to-pink-500 min-h-screen text-white">
      <h1 className="text-4xl font-bold mb-4">Painel do Gerente</h1>
      <p>Bem-vindo! Aqui você pode gerenciar vendedores e lojas.</p>
    </div>
  );
}

// src/pages/DashboardVendedor.jsx
export default function DashboardVendedor() {
  return (
    <div className="p-10 text-center bg-gradient-to-tr from-green-500 via-blue-500 to-purple-600 min-h-screen text-white">
      <h1 className="text-4xl font-bold mb-4">Painel do Vendedor</h1>
      <p>Acompanhe suas vendas e metas aqui.</p>
    </div>
  );
}

// src/pages/DashboardLoja.jsx
export default function DashboardLoja() {
  return (
    <div className="p-10 text-center bg-gradient-to-tr from-orange-500 via-pink-500 to-purple-600 min-h-screen text-white">
      <h1 className="text-4xl font-bold mb-4">Painel da Loja</h1>
      <p>Gerencie seus produtos, estoque e pedidos.</p>
    </div>
  );
}
