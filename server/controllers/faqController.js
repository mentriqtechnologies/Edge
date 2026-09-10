import Faq from '../models/Faq.js';

const clean = (body) => {
  const allowed = ['question', 'answer', 'category', 'order', 'active'];
  const data = {};
  for (const key of allowed) {
    if (body[key] !== undefined) data[key] = body[key];
  }
  return data;
};

export const getFaqs = async (req, res, next) => {
  try {
    const filter = { active: true };
    if (req.query.category) filter.category = req.query.category;
    const faqs = await Faq.find(filter).sort({ order: 1, createdAt: -1 });
    res.json({ success: true, faqs });
  } catch (error) {
    next(error);
  }
};

export const createFaq = async (req, res, next) => {
  try {
    const faq = await Faq.create(clean(req.body));
    res.status(201).json({ success: true, faq });
  } catch (error) {
    next(error);
  }
};

export const updateFaq = async (req, res, next) => {
  try {
    const faq = await Faq.findByIdAndUpdate(req.params.id, clean(req.body), {
      new: true,
      runValidators: true,
    });
    if (!faq) {
      res.status(404);
      return next(new Error('FAQ not found'));
    }
    res.json({ success: true, faq });
  } catch (error) {
    next(error);
  }
};

export const deleteFaq = async (req, res, next) => {
  try {
    const faq = await Faq.findByIdAndDelete(req.params.id);
    if (!faq) {
      res.status(404);
      return next(new Error('FAQ not found'));
    }
    res.json({ success: true, message: 'FAQ deleted' });
  } catch (error) {
    next(error);
  }
};