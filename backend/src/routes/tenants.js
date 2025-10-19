const express = require('express');
const router = express.Router();
const Tenant = require('../models/Tenant');
router.get('/:id', async (req, res) => {
  const t = await Tenant.findById(req.params.id);
  res.json(t);
});
module.exports = router;
