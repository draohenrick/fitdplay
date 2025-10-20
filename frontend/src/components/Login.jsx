import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { login } = useAuth();
  const [name, setName] = useState("");
  const [type, setType] = useState("vendedor");
  const [storeName, setStoreName] = useState("Minha Loja");
  const [storeLogo, setStoreLogo] = useState("/logo.png");

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ name, type, store: { name: storeName, logo: storeLogo } });
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow w-80">
        <h1 className="text-xl font-bold mb-4">Login</h1>
        <input type="text" placeholder="Nome" value={name} onChange={e => setName(e.target.value)} className="w-full p-2 mb-3 border rounded" required />
        <select value={type} onChange={e => setType(e.target.value)} className="w-full p-2 mb-3 border rounded">
          <option value="gerente">Gerente</option>
          <option value="vendedor">Vendedor</option>
        </select>
        <input type="text" placeholder="Nome da Loja" value={storeName} onChange={e => setStoreName(e.target.value)} className="w-full p-2 mb-3 border rounded" required />
        <input type="text" placeholder="URL do Logo" value={storeLogo} onChange={e => setStoreLogo(e.target.value)} className="w-full p-2 mb-3 border rounded" required />
        <button type="submit" className="w-full p-2 bg-blue-600 text-white rounded">Entrar</button>
      </form>
    </div>
  );
};

export default Login;
