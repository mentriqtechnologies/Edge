import Inquiry from '../models/Inquiry.js';

const clean = (body) => {
  const allowed = [
    'type', 'name', 'email', 'phone', 'state', 'city',
    'program', 'level', 'message', 'status', 'source',
  ];
  const data = {};
  for (const key of allowed) {
    if (body[key] !== undefined) data[key] = body[key];
  }
  return data;
};

const clientIp = (req) =>
  (req.headers['x-forwarded-for'] || '').split(',')[0].trim() || req.socket?.remoteAddress || '';

// POST /api/inquiries  (public — lead capture / contact)
export const createInquiry = async (req, res, next) => {
  try {
    const inquiry = await Inquiry.create({ ...clean(req.body), source: 'website' });
    res.status(201).json({
      success: true,
      message: 'Thank you! Our admissions team will reach out shortly.',
      inquiryId: inquiry._id,
    });
  } catch (error) {
    next(error);
  }
};

// GET /api/inquiries  (admin)
export const getInquiries = async (req, res, next) => {
  try {
    const { status, type } = req.query;
    const filter = {};
    if (status) filter.status = status;
    if (type) filter.type = type;

    const page = Math.max(1, parseInt(req.query.page, 10) || 1);
    const limit = Math.min(100, Math.max(1, parseInt(req.query.limit, 10) || 20));

    const total = await Inquiry.countDocuments(filter);
    const inquiries = await Inquiry.find(filter)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);

    res.json({ success: true, total, page, pages: Math.ceil(total / limit), inquiries });
  } catch (error) {
    next(error);
  }
};

// PUT /api/inquiries/:id/status  (admin)  body: { status }
export const updateInquiryStatus = async (req, res, next) => {
  try {
    const { status } = req.body;
    if (!['new', 'contacted', 'scheduled', 'converted', 'closed'].includes(status)) {
      res.status(400);
      return next(new Error('Invalid status'));
    }
    const inquiry = await Inquiry.findByIdAndUpdate(req.params.id, { status }, { new: true });
    if (!inquiry) {
      res.status(404);
      return next(new Error('Inquiry not found'));
    }
    res.json({ success: true, inquiry });
  } catch (error) {
    next(error);
  }
};

export const deleteInquiry = async (req, res, next) => {
  try {
    const inquiry = await Inquiry.findByIdAndDelete(req.params.id);
    if (!inquiry) {
      res.status(404);
      return next(new Error('Inquiry not found'));
    }
    res.json({ success: true, message: 'Inquiry deleted' });
  } catch (error) {
    next(error);
  }
};