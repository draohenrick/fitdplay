import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  const links = [
    { name: 'Dashboard', path: '/' },
    { name: 'Vendas', path: '/vendas' },
    { name: 'Produtos', path: '/produtos' },
    { name: 'Vendedores', path: '/vendedores' },
    { name: 'Relatórios', path: '/relatorios' },
    { name: 'Configurações', path: '/configuracoes' },
    { name: 'Suporte', path: '/suporte' },
    { name: 'Perfil', path: '/perfil' },
    { name: 'Integrações', path: '/integracoes' },
  ];

  return (
    <aside className="w-64 h-screen bg-gray-900 text-white p-4">
      <h1 className="text-2xl font-bold mb-6">FitPlay</h1>
      <nav className="flex flex-col gap-2">
        {links.map(link => (
          <NavLink 
            key={link.name} 
            to={link.path} 
            className={({ isActive }) => isActive ? 'bg-gray-700 p-2 rounded' : 'p-2 rounded hover:bg-gray-800'}
          >
            {link.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
