import Partner from '../models/Partner.js';

const clean = (body) => {
  const allowed = ['name', 'kind', 'tagline', 'description', 'tags', 'active'];
  const data = {};
  for (const key of allowed) {
    if (body[key] !== undefined) data[key] = body[key];
  }
  return data;
};

export const getPartners = async (req, res, next) => {
  try {
    const filter = { active: true };
    if (req.query.kind) filter.kind = req.query.kind;
    const partners = await Partner.find(filter).sort({ name: 1 });
    res.json({ success: true, count: partners.length, partners });
  } catch (error) {
    next(error);
  }
};

export const createPartner = async (req, res, next) => {
  try {
    const partner = await Partner.create(clean(req.body));
    res.status(201).json({ success: true, partner });
  } catch (error) {
    next(error);
  }
};

export const updatePartner = async (req, res, next) => {
  try {
    const partner = await Partner.findByIdAndUpdate(req.params.id, clean(req.body), {
      new: true,
      runValidators: true,
    });
    if (!partner) {
      res.status(404);
      return next(new Error('Partner not found'));
    }
    res.json({ success: true, partner });
  } catch (error) {
    next(error);
  }
};

export const deletePartner = async (req, res, next) => {
  try {
    const partner = await Partner.findByIdAndDelete(req.params.id);
    if (!partner) {
      res.status(404);
      return next(new Error('Partner not found'));
    }
    res.json({ success: true, message: 'Partner deleted' });
  } catch (error) {
    next(error);
  }
};