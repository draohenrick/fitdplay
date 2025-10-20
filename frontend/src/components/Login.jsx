import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axiosConfig";
import Input from "../components/Input";
import Button from "../components/Button";
import Navbar from "../components/Navbar";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/login", form);
      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Erro no login");
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <form className="bg-white p-8 rounded-lg shadow-md w-full max-w-md" onSubmit={handleSubmit}>
          <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <Input label="Email" type="email" name="email" value={form.email} onChange={handleChange} placeholder="Digite seu email" />
          <Input label="Senha" type="password" name="password" value={form.password} onChange={handleChange} placeholder="Digite sua senha" />
          <Button type="submit">Entrar</Button>
          <p className="mt-4 text-center text-gray-600">
            Não tem conta? <a href="/register" className="text-blue-600 hover:underline">Cadastre-se</a>
          </p>
        </form>
      </div>
    </>
  );
}
