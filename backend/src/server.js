// src/server.js
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });


// 1️⃣ Carregar variáveis de ambiente
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const app = express();

// 2️⃣ Middleware
app.use(express.json());

// 3️⃣ Porta do servidor
const PORT = process.env.PORT || 4000;

// 4️⃣ Verificar se MONGO_URI está carregado
if (!process.env.MONGO_URI) {
  console.error('❌ ERRO: MONGO_URI não definida no .env');
  process.exit(1); // encerra o servidor
}

console.log('🔗 Tentando conectar ao MongoDB...');
console.log('MONGO_URI =>', process.env.MONGO_URI); // só para teste, remova depois em produção

// 5️⃣ Conectar ao MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB conectado com sucesso!'))
.catch(err => {
  console.error('❌ Erro ao conectar no MongoDB:', err.message);
  process.exit(1); // encerra o servidor se não conectar
});

// 6️⃣ Rota de teste
app.get('/', (req, res) => {
  res.send('FitPlay Backend funcionando!');
});

// 7️⃣ Iniciar servidor
app.listen(PORT, () => console.log(`🚀 Servidor rodando na porta ${PORT}`));
