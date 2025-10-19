import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Vendas from '../pages/Vendas';
import Produtos from '../pages/Produtos';
import Vendedores from '../pages/Vendedores';
import Relatorios from '../pages/Relatorios';
import Configuracoes from '../pages/Configuracoes';
import Suporte from '../pages/Suporte';
import Perfil from '../pages/Perfil';
import Integracoes from '../pages/Integracoes';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/vendas" element={<Vendas />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/vendedores" element={<Vendedores />} />
        <Route path="/relatorios" element={<Relatorios />} />
        <Route path="/configuracoes" element={<Configuracoes />} />
        <Route path="/suporte" element={<Suporte />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/integracoes" element={<Integracoes />} />
      </Routes>
    </BrowserRouter>
  );
}
