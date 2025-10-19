const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
  name: String,
  sku: String,
  price: Number,
  cost: Number,
  stock: Number,
  tenantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Tenant', required: true },
  createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Product', ProductSchema);
