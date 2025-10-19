const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Tenant = require('../models/Tenant');

router.post('/register', async (req, res) => {
  const { tenantName, slug, cnpj, name, cpf, email, password } = req.body;
  try {
    const tenant = await Tenant.create({ name: tenantName, slug, cnpj });
    const salt = await bcrypt.genSalt(10);
    const passwordHash = password ? await bcrypt.hash(password, salt) : null;
    const user = await User.create({ name, cpf, email, passwordHash, role: 'manager', tenantId: tenant._id });
    const token = jwt.sign({ userId: user._id, tenantId: tenant._id, role: user.role, tenantName: tenant.name }, process.env.JWT_SECRET, { expiresIn: '7d' });
    res.json({ token, tenant, user: { id: user._id, name: user.name, cpf: user.cpf, role: user.role, tenantName: tenant.name } });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.post('/login', async (req, res) => {
  const { cpfOrCode } = req.body;
  const user = await User.findOne({ $or: [{ cpf: cpfOrCode }, { sellerCode: cpfOrCode }] });
  if (!user) return res.status(400).json({ message: 'Credenciais invalidas' });
  const token = jwt.sign({ userId: user._id, tenantId: user.tenantId, role: user.role, tenantName: user.tenantId }, process.env.JWT_SECRET, { expiresIn: '7d' });
  res.json({ token, user: { id: user._id, name: user.name, cpf: user.cpf, role: user.role, tenantId: user.tenantId } });
});

module.exports = router;
