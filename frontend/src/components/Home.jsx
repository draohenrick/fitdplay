import Navbar from "../components/Navbar";
import Card from "../components/Card";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="p-8 bg-gray-100 min-h-screen">
        <h2 className="text-2xl font-bold mb-6">Bem-vindo ao FitDplay</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card title="Funcionalidade 1">Descrição resumida da funcionalidade 1.</Card>
          <Card title="Funcionalidade 2">Descrição resumida da funcionalidade 2.</Card>
          <Card title="Funcionalidade 3">Descrição resumida da funcionalidade 3.</Card>
        </div>
      </div>
    </>
  );
}
