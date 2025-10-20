import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://fitdplay.onrender.com/api/auth/register", {
        nome,
        email,
        senha,
      });
      navigate("/login");
    } catch (error) {
      setErro("Erro ao cadastrar. Verifique os dados.");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-tr from-green-500 via-blue-500 to-purple-500">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">Crie sua conta</h1>
        <p className="text-center text-gray-500 mb-6">Comece a usar o FitDplay hoje</p>
        {erro && <p className="text-red-500 text-center mb-2">{erro}</p>}
        <form onSubmit={handleRegister} className="space-y-4">
          <input
            type="text"
            className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-400 outline-none"
            placeholder="Nome completo"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
          <input
            type="email"
            className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-400 outline-none"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-400 outline-none"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl transition font-medium"
          >
            Cadastrar
          </button>
        </form>
        <p className="text-center text-gray-600 mt-6 text-sm">
          Já tem conta?{" "}
          <Link to="/login" className="text-green-700 font-semibold hover:underline">
            Entrar
          </Link>
        </p>
      </div>
    </div>
  );
}
