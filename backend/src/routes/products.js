const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Product = require('../models/Product');
router.post('/', auth, async (req, res) => {
  const tenantId = req.user.tenantId;
  const doc = await Product.create(Object.assign({}, req.body, { tenantId }));
  res.json(doc);
});
router.get('/', auth, async (req, res) => {
  const tenantId = req.user.tenantId;
  const docs = await Product.find({ tenantId });
  res.json(docs);
});
router.put('/:id', auth, async (req, res) => {
  const tenantId = req.user.tenantId;
  const doc = await Product.findOneAndUpdate({ _id: req.params.id, tenantId }, req.body, { new: true });
  res.json(doc);
});
router.delete('/:id', auth, async (req, res) => {
  const tenantId = req.user.tenantId;
  await Product.deleteOne({ _id: req.params.id, tenantId });
  res.json({ ok: true });
});
module.exports = router;
