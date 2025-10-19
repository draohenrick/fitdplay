export default function Perfil() {
  return (
    <div className="p-6 max-w-md">
      <h2 className="text-2xl font-bold mb-4">Meu Perfil</h2>
      <form className="flex flex-col gap-4">
        <input type="text" placeholder="Nome" className="p-2 border rounded"/>
        <input type="email" placeholder="Email" className="p-2 border rounded"/>
        <input type="password" placeholder="Senha" className="p-2 border rounded"/>
        <button type="submit" className="bg-blue-600 text-white p-2 rounded">Salvar</button>
      </form>
    </div>
  );
}
