import Navbar from "../components/Navbar";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <>
      <Navbar />
      <div className="p-8 bg-gray-100 min-h-screen">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Dashboard</h2>
          <button onClick={handleLogout} className="text-white bg-red-600 px-3 py-1 rounded hover:bg-red-700 transition">
            Logout
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card title="Usuários">Visualizar todos os usuários cadastrados</Card>
          <Card title="Relatórios">Relatórios de uso do sistema</Card>
          <Card title="Configurações">Ajustes e preferências</Card>
        </div>
      </div>
    </>
  );
}
