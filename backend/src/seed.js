require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('./config_db');
const Tenant = require('./models/Tenant');
const User = require('./models/User');
const Product = require('./models/Product');
const Sale = require('./models/Sale');
const bcrypt = require('bcryptjs');

async function run() {
  await connectDB(process.env.MONGO_URI || 'mongodb://localhost:27017/fitplay');
  await Tenant.deleteMany({});
  await User.deleteMany({});
  await Product.deleteMany({});
  await Sale.deleteMany({});

  const tenant = await Tenant.create({ name: 'Demo FitStore', slug: 'demo-fitstore', cnpj: '00.000.000/0000-00' });
  const salt = await bcrypt.genSalt(10);
  const passHash = await bcrypt.hash('admin123', salt);
  const manager = await User.create({ name: 'Gerente Demo', cpf: '00000000000', passwordHash: passHash, role: 'manager', tenantId: tenant._id });
  const seller = await User.create({ name: 'Vendedor Demo', cpf: '11111111111', sellerCode: 'VEN123', role: 'seller', tenantId: tenant._id });

  const p1 = await Product.create({ name: 'Legging Fit', sku: 'LG001', price: 79.90, cost: 35, stock: 10, tenantId: tenant._id });
  const p2 = await Product.create({ name: 'Top Fitness', sku: 'TP001', price: 49.90, cost: 20, stock: 5, tenantId: tenant._id });

  const sale = await Sale.create({
    tenantId: tenant._id,
    userId: seller._id,
    items: [{ productId: p1._id, name: p1.name, qty: 2, price: p1.price }],
    total: 159.80
  });

  console.log('Seed complete');
  process.exit(0);
}

run().catch(err => { console.error(err); process.exit(1); });
