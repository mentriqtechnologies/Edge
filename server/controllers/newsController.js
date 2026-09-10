import News from '../models/News.js';

const clean = (body) => {
  const allowed = [
    'slug', 'title', 'excerpt', 'content', 'category', 'author',
    'image', 'readMinutes', 'published', 'publishDate', 'tags',
  ];
  const data = {};
  for (const key of allowed) {
    if (body[key] !== undefined) data[key] = body[key];
  }
  return data;
};

export const getNews = async (req, res, next) => {
  try {
    const page = Math.max(1, parseInt(req.query.page, 10) || 1);
    const limit = Math.min(50, Math.max(1, parseInt(req.query.limit, 10) || 9));
    const filter = { published: true };
    if (req.query.category) filter.category = req.query.category;

    const total = await News.countDocuments(filter);
    const articles = await News.find(filter)
      .sort({ publishDate: -1 })
      .skip((page - 1) * limit)
      .limit(limit);

    res.json({
      success: true,
      total,
      page,
      pages: Math.ceil(total / limit),
      articles,
    });
  } catch (error) {
    next(error);
  }
};

export const getNewsBySlug = async (req, res, next) => {
  try {
    const article = await News.findOne({ slug: req.params.slug, published: true });
    if (!article) {
      res.status(404);
      return next(new Error('Article not found'));
    }
    res.json({ success: true, article });
  } catch (error) {
    next(error);
  }
};

export const createNews = async (req, res, next) => {
  try {
    const article = await News.create(clean(req.body));
    res.status(201).json({ success: true, article });
  } catch (error) {
    next(error);
  }
};

export const updateNews = async (req, res, next) => {
  try {
    const article = await News.findByIdAndUpdate(req.params.id, clean(req.body), {
      new: true,
      runValidators: true,
    });
    if (!article) {
      res.status(404);
      return next(new Error('Article not found'));
    }
    res.json({ success: true, article });
  } catch (error) {
    next(error);
  }
};

export const deleteNews = async (req, res, next) => {
  try {
    const article = await News.findByIdAndDelete(req.params.id);
    if (!article) {
      res.status(404);
      return next(new Error('Article not found'));
    }
    res.json({ success: true, message: 'Article deleted' });
  } catch (error) {
    next(error);
  }
};