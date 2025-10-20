import React, { useState } from "react";
import axios from "axios";

export default function Register() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [tipo, setTipo] = useState("gerente");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://fitdplay-backend.onrender.com/api/auth/register", { nome, email, senha, tipo });
      alert("Cadastro realizado com sucesso!");
      window.location.href = "/login";
    } catch (err) {
      alert("Erro ao cadastrar. Verifique os dados e tente novamente.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400">
      <form onSubmit={handleRegister} className="bg-white p-8 rounded-2xl shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Cadastro de Usuário</h2>

        <input
          type="text"
          placeholder="Nome completo"
          className="w-full p-3 border rounded-lg mb-4"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="E-mail"
          className="w-full p-3 border rounded-lg mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Senha"
          className="w-full p-3 border rounded-lg mb-4"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />

        <select
          className="w-full p-3 border rounded-lg mb-4"
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
        >
          <option value="gerente">Gerente</option>
          <option value="vendedor">Vendedor</option>
          <option value="loja">Loja</option>
        </select>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
}
