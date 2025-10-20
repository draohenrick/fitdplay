// src/services/api.js
import axios from "axios";

// 🔗 Base URL oficial do backend no Render
const API_BASE_URL = import.meta.env.VITE_API_URL || "https://fitdplay.onrender.com";

// 🧠 Cria a instância global do axios
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// 🧾 Intercepta erros automaticamente
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("Erro na requisição:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default api;
