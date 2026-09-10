import { Router } from 'express';
import {
  getPrograms,
  getProgramBySlug,
  getSpecialization,
  createProgram,
  updateProgram,
  deleteProgram,
} from '../controllers/programController.js';
import { protect, adminOnly } from '../middleware/auth.js';

const router = Router();

router.route('/').get(getPrograms).post(protect, adminOnly, createProgram);
router.get('/slug/:slug/:specSlug', getSpecialization);
router.get('/slug/:slug', getProgramBySlug);
router.route('/:id').put(protect, adminOnly, updateProgram).delete(protect, adminOnly, deleteProgram);

export default router;