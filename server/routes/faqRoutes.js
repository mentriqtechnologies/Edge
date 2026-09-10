import { Router } from 'express';
import { getFaqs, createFaq, updateFaq, deleteFaq } from '../controllers/faqController.js';
import { protect, adminOnly } from '../middleware/auth.js';

const router = Router();

router.route('/').get(getFaqs).post(protect, adminOnly, createFaq);
router
  .route('/:id')
  .put(protect, adminOnly, updateFaq)
  .delete(protect, adminOnly, deleteFaq);

export default router;