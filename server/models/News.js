import mongoose from 'mongoose';

const newsSchema = new mongoose.Schema(
  {
    slug: { type: String, required: true, unique: true, trim: true, lowercase: true },
    title: { type: String, required: [true, 'Article title is required'] },
    excerpt: { type: String, default: '' },
    content: { type: String, required: [true, 'Article content is required'] },
    category: { type: String, default: 'Stories' },
    author: { type: String, default: 'Edge Institute' },
    image: { type: String, default: '' },
    readMinutes: { type: Number, default: 4 },
    published: { type: Boolean, default: true },
    publishDate: { type: Date, default: Date.now },
    tags: [{ type: String }],
  },
  { timestamps: true }
);

const News = mongoose.model('News', newsSchema);
export default News;