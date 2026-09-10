import Program from '../models/Program.js';

const clean = (body) => {
  const allowed = [
    'slug', 'title', 'shortTitle', 'code', 'level', 'degree', 'duration',
    'mode', 'category', 'summary', 'description', 'eligibility',
    'featured', 'active', 'specializations',
  ];
  const data = {};
  for (const key of allowed) {
    if (body[key] !== undefined) data[key] = body[key];
  }
  return data;
};

// Shallow public shape without the heavy specialization detail, used for lists.
const toListPublic = (program) => {
  const pub = program.toPublic();
  pub.specializations = (program.specializations || []).map((s) => ({
    slug: s.slug,
    name: s.name,
    summary: s.summary,
    feesPerYear: s.feesPerYear,
    intake: s.intake,
    seatsFilled: s.seatsFilled,
    featured: s.featured,
  }));
  pub.totalSeats = program.specializations.reduce((n, s) => n + (s.intake || 0), 0);
  pub.specCount = program.specializations.length;
  return pub;
};

// GET /api/programs?level=&search=&featured=
export const getPrograms = async (req, res, next) => {
  try {
    const filter = { active: true };
    if (req.query.level) filter.level = req.query.level;
    if (req.query.featured === 'true') filter.featured = true;
    if (req.query.search) {
      filter.$or = [
        { title: { $regex: req.query.search, $options: 'i' } },
        { summary: { $regex: req.query.search, $options: 'i' } },
        { 'specializations.name': { $regex: req.query.search, $options: 'i' } },
      ];
    }
    const programs = await Program.find(filter).sort({ level: 1, title: 1 });
    res.json({ success: true, count: programs.length, programs: programs.map(toListPublic) });
  } catch (error) {
    next(error);
  }
};

// GET /api/programs/slug/:slug
export const getProgramBySlug = async (req, res, next) => {
  try {
    const program = await Program.findOne({ slug: req.params.slug, active: true });
    if (!program) {
      res.status(404);
      return next(new Error('Program not found'));
    }
    res.json({ success: true, program: program.toPublic() });
  } catch (error) {
    next(error);
  }
};

// GET /api/programs/slug/:slug/:specSlug
export const getSpecialization = async (req, res, next) => {
  try {
    const program = await Program.findOne({ slug: req.params.slug, active: true });
    if (!program) {
      res.status(404);
      return next(new Error('Program not found'));
    }
    const spec = program.specializations.find((s) => s.slug === req.params.specSlug);
    if (!spec) {
      res.status(404);
      return next(new Error('Specialization not found'));
    }
    res.json({ success: true, program: program.toPublic(), specialization: spec });
  } catch (error) {
    next(error);
  }
};

// POST /api/programs  (admin)
export const createProgram = async (req, res, next) => {
  try {
    const program = await Program.create(clean(req.body));
    res.status(201).json({ success: true, program: program.toPublic() });
  } catch (error) {
    next(error);
  }
};

// PUT /api/programs/:id  (admin)
export const updateProgram = async (req, res, next) => {
  try {
    const program = await Program.findByIdAndUpdate(req.params.id, clean(req.body), {
      new: true,
      runValidators: true,
    });
    if (!program) {
      res.status(404);
      return next(new Error('Program not found'));
    }
    res.json({ success: true, program: program.toPublic() });
  } catch (error) {
    next(error);
  }
};

// DELETE /api/programs/:id  (admin)
export const deleteProgram = async (req, res, next) => {
  try {
    const program = await Program.findByIdAndDelete(req.params.id);
    if (!program) {
      res.status(404);
      return next(new Error('Program not found'));
    }
    res.json({ success: true, message: 'Program deleted' });
  } catch (error) {
    next(error);
  }
};