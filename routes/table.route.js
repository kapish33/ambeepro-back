import express from 'express';
import {
  createEntity,
  getPaginatreEntries,
  updateEntity,
} from '../controllers/table.controller';
const router = express.Router();

router.route('/').post(createEntity);
router.route('/').get(getPaginatreEntries);
router.route('/').patch(updateEntity);
export default router;
