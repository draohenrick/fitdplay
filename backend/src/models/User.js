const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  name: String,
  cpf: { type: String, required: true },
  sellerCode: { type: String },
  email: String,
  passwordHash: String,
  role: { type: String, enum: ['admin','manager','seller'], default: 'seller' },
  tenantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Tenant', required: true },
  createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('User', UserSchema);
