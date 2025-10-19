const mongoose = require('mongoose');
const TenantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  cnpj: String,
  logoPath: String,
  createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Tenant', TenantSchema);
