import { useState } from "react";
import api from "../api/axiosConfig";
import Input from "../components/Input";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/register", form);
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.message || "Erro no cadastro");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Cadastro</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit}>
        <Input label="Nome" name="name" value={form.name} onChange={handleChange} placeholder="Seu nome" />
        <Input label="Email" type="email" name="email" value={form.email} onChange={handleChange} placeholder="Seu email" />
        <Input label="Senha" type="password" name="password" value={form.password} onChange={handleChange} placeholder="Senha" />
        <Button type="submit">Cadastrar</Button>
      </form>
    </div>
  );
}
