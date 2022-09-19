const express = require('express');
const {
  createEntity,
  getPaginatreEntries,
  updateEntity,
} = require('../controllers/table.controller');
const router = express.Router();

router.route('/').post(createEntity);
router.route('/').get(getPaginatreEntries);
router.route('/').patch(updateEntity);

module.exports = router;
