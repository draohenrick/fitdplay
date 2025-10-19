const mongoose = require('mongoose');
const SaleSchema = new mongoose.Schema({
  tenantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Tenant', required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  items: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
      name: String,
      qty: Number,
      price: Number
    }
  ],
  total: Number,
  createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Sale', SaleSchema);
