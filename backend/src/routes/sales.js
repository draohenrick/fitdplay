const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Sale = require('../models/Sale');
const Product = require('../models/Product');
router.post('/', auth, async (req, res) => {
  const tenantId = req.user.tenantId;
  const { items } = req.body;
  let total = 0;
  const enriched = [];
  for (const it of items) {
    const p = await Product.findOne({ _id: it.productId, tenantId });
    enriched.push({ productId: p._id, name: p.name, qty: it.qty, price: p.price });
    total += p.price * it.qty;
    p.stock = Math.max(0, p.stock - it.qty);
    await p.save();
  }
  const sale = await Sale.create({ tenantId, userId: req.user.userId, items: enriched, total });
  res.json(sale);
});
router.get('/', auth, async (req, res) => {
  const tenantId = req.user.tenantId;
  const sales = await Sale.find({ tenantId }).populate('userId').sort({ createdAt: -1 });
  res.json(sales);
});
module.exports = router;
