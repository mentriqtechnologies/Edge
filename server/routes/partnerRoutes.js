import { Router } from 'express';
import {
  getPartners,
  createPartner,
  updatePartner,
  deletePartner,
} from '../controllers/partnerController.js';
import { protect, adminOnly } from '../middleware/auth.js';

const router = Router();

router.route('/').get(getPartners).post(protect, adminOnly, createPartner);
router
  .route('/:id')
  .put(protect, adminOnly, updatePartner)
  .delete(protect, adminOnly, deletePartner);

export default router;