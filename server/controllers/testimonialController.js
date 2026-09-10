import Testimonial from '../models/Testimonial.js';

const clean = (body) => {
  const allowed = ['name', 'program', 'company', 'role', 'quote', 'rating', 'featured', 'active'];
  const data = {};
  for (const key of allowed) {
    if (body[key] !== undefined) data[key] = body[key];
  }
  return data;
};

export const getTestimonials = async (req, res, next) => {
  try {
    const filter = { active: true };
    if (req.query.featured === 'true') filter.featured = true;
    const testimonials = await Testimonial.find(filter).sort({ createdAt: -1 }).limit(12);
    res.json({ success: true, testimonials });
  } catch (error) {
    next(error);
  }
};

export const createTestimonial = async (req, res, next) => {
  try {
    const testimonial = await Testimonial.create(clean(req.body));
    res.status(201).json({ success: true, testimonial });
  } catch (error) {
    next(error);
  }
};

export const updateTestimonial = async (req, res, next) => {
  try {
    const testimonial = await Testimonial.findByIdAndUpdate(req.params.id, clean(req.body), {
      new: true,
      runValidators: true,
    });
    if (!testimonial) {
      res.status(404);
      return next(new Error('Testimonial not found'));
    }
    res.json({ success: true, testimonial });
  } catch (error) {
    next(error);
  }
};

export const deleteTestimonial = async (req, res, next) => {
  try {
    const testimonial = await Testimonial.findByIdAndDelete(req.params.id);
    if (!testimonial) {
      res.status(404);
      return next(new Error('Testimonial not found'));
    }
    res.json({ success: true, message: 'Testimonial deleted' });
  } catch (error) {
    next(error);
  }
};