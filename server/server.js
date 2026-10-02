import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';

import connectDB from './config/db.js';
import { notFound, errorHandler } from './middleware/error.js';

import authRoutes from './routes/authRoutes.js';
import programRoutes from './routes/programRoutes.js';
import newsRoutes from './routes/newsRoutes.js';
import testimonialRoutes from './routes/testimonialRoutes.js';
import faqRoutes from './routes/faqRoutes.js';
import partnerRoutes from './routes/partnerRoutes.js';
import inquiryRoutes from './routes/inquiryRoutes.js';

connectDB();

const app = express();

// Render terminates the connection in front of this service and sets
// X-Forwarded-For. Trust exactly one hop so req.ip resolves to the real client
// rather than the proxy — express-rate-limit needs this to key limits by user.
// Do NOT use `true` here: that would trust client-supplied X-Forwarded-For and
// let anyone bypass the rate limit by spoofing the header.
app.set('trust proxy', 1);

const ALLOWED_ORIGINS = (process.env.CLIENT_URL || '')
  .split(',')
  .map((o) => o.trim())
  .filter(Boolean);

const ALLOWED_BASE_DOMAINS = (process.env.CLIENT_DOMAINS || 'mentriqtechnologies.in')
  .split(',')
  .map((d) => d.trim())
  .filter(Boolean);

const isAllowedOrigin = (origin, callback) => {
  // No Origin header means a non-browser client (curl, health checks, proxying).
  if (!origin) return callback(null, true);
  if (ALLOWED_ORIGINS.includes(origin)) return callback(null, true);
  try {
    const { hostname } = new URL(origin);
    const allowed = ALLOWED_BASE_DOMAINS.some(
      (d) => hostname === d || hostname.endsWith(`.${d}`)
    );
    return callback(null, allowed);
  } catch {
    return callback(null, false);
  }
};

app.use(helmet({ crossOriginResourcePolicy: false }));
app.use(cors({ origin: isAllowedOrigin, credentials: true }));
app.use(express.json({ limit: '1mb' }));
app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'));

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 300,
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, message: 'Too many requests, please try again later.' },
});
app.use('/api', apiLimiter);

app.get('/api/health', (req, res) => {
  res.json({ success: true, service: 'Edge Institute API', uptime: process.uptime() });
});

app.use('/api/auth', authRoutes);
app.use('/api/programs', programRoutes);
app.use('/api/news', newsRoutes);
app.use('/api/testimonials', testimonialRoutes);
app.use('/api/faqs', faqRoutes);
app.use('/api/partners', partnerRoutes);
app.use('/api/inquiries', inquiryRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Edge Institute API running on http://localhost:${PORT}`);
});