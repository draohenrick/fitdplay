const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Sale = require('../models/Sale');
const Product = require('../models/Product');
const mongoose = require('mongoose');
router.get('/overview', auth, async (req, res) => {
  const tenantId = req.user.tenantId;
  const today = new Date(); today.setHours(0,0,0,0);
  const tomorrow = new Date(today); tomorrow.setDate(tomorrow.getDate()+1);
  const todaySales = await Sale.aggregate([
    { $match: { tenantId: mongoose.Types.ObjectId(tenantId), createdAt: { $gte: today, $lt: tomorrow } } },
    { $group: { _id: null, total: { $sum: '$total' }, count: { $sum: 1 } } }
  ]);
  const monthStart = new Date(); monthStart.setDate(1); monthStart.setHours(0,0,0,0);
  const monthSales = await Sale.aggregate([
    { $match: { tenantId: mongoose.Types.ObjectId(tenantId), createdAt: { $gte: monthStart } } },
    { $group: { _id: null, total: { $sum: '$total' }, count: { $sum: 1 } } }
  ]);
  const productsCount = await Product.countDocuments({ tenantId });
  const lowStockCount = await Product.countDocuments({ tenantId, stock: { $lte: 3 } });
  res.json({
    todaySales: (todaySales[0] && todaySales[0].total) || 0,
    todayCount: (todaySales[0] && todaySales[0].count) || 0,
    monthSales: (monthSales[0] && monthSales[0].total) || 0,
    monthCount: (monthSales[0] && monthSales[0].count) || 0,
    productsCount,
    lowStockCount
  });
});
module.exports = router;
