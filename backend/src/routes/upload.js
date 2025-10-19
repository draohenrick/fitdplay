const express = require('express');
const router = express.Router();
const multer = require('multer');
const Tenant = require('../models/Tenant');
const path = require('path');
const upload = multer({ dest: 'uploads/' });
router.post('/logo/:tenantId', upload.single('logo'), async (req, res) => {
  const tenant = await Tenant.findById(req.params.tenantId);
  if (!tenant) return res.status(404).json({message:'tenant not found'});
  tenant.logoPath = req.file.path;
  await tenant.save();
  res.json({ ok: true, path: req.file.path });
});
module.exports = router;
