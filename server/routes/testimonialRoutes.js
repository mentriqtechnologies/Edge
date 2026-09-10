import { Router } from 'express';
import {
  getTestimonials,
  createTestimonial,
  updateTestimonial,
  deleteTestimonial,
} from '../controllers/testimonialController.js';
import { protect, adminOnly } from '../middleware/auth.js';

const router = Router();

router
  .route('/')
  .get(getTestimonials)
  .post(protect, adminOnly, createTestimonial);
router
  .route('/:id')
  .put(protect, adminOnly, updateTestimonial)
  .delete(protect, adminOnly, deleteTestimonial);

export default router;