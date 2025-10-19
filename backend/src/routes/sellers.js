const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const User = require('../models/User');
const crypto = require('crypto');
router.post('/', auth, async (req, res) => {
  const tenantId = req.user.tenantId;
  const { name, cpf, email, role } = req.body;
  const sellerCode = 'S' + crypto.randomBytes(3).toString('hex').toUpperCase();
  const u = await User.create({ name, cpf, email, sellerCode, role: role || 'seller', tenantId });
  res.json(u);
});
router.get('/', auth, async (req, res) => {
  const tenantId = req.user.tenantId;
  const users = await User.find({ tenantId });
  res.json(users);
});
module.exports = router;
