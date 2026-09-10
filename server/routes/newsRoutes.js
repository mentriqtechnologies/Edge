import { Router } from 'express';
import {
  getNews,
  getNewsBySlug,
  createNews,
  updateNews,
  deleteNews,
} from '../controllers/newsController.js';
import { protect, adminOnly } from '../middleware/auth.js';

const router = Router();

router.route('/').get(getNews).post(protect, adminOnly, createNews);
router.get('/slug/:slug', getNewsBySlug);
router.route('/:id').put(protect, adminOnly, updateNews).delete(protect, adminOnly, deleteNews);

export default router;