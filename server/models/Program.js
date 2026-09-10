import mongoose from 'mongoose';

const curriculumItemSchema = new mongoose.Schema(
  {
    semester: { type: String, required: true },
    subjects: [{ type: String }],
  },
  { _id: false }
);

const specializationSchema = new mongoose.Schema(
  {
    slug: { type: String, required: true, lowercase: true, trim: true },
    name: { type: String, required: true },
    summary: { type: String, default: '' },
    feesPerYear: { type: Number, default: 0 },
    intake: { type: Number, default: 60 },
    seatsFilled: { type: Number, default: 0 },
    highlights: [{ type: String }],
    curriculum: [curriculumItemSchema],
    careers: [{ type: String }],
    skills: [{ type: String }],
    featured: { type: Boolean, default: false },
  },
  { _id: false }
);

const programSchema = new mongoose.Schema(
  {
    slug: { type: String, required: true, unique: true, lowercase: true, trim: true },
    title: { type: String, required: [true, 'Program title is required'] },
    shortTitle: { type: String, required: true },
    code: { type: String, required: true, unique: true },
    level: { type: String, enum: ['Undergraduate', 'Postgraduate'], required: true },
    degree: { type: String, default: '' },
    duration: { type: String, required: true },
    mode: { type: String, default: 'Full-time · On-campus' },
    category: { type: String, default: 'General' },
    summary: { type: String, default: '' },
    description: { type: String, default: '' },
    eligibility: { type: String, default: '' },
    featured: { type: Boolean, default: false },
    active: { type: Boolean, default: true },
    specializations: [specializationSchema],
  },
  { timestamps: true }
);

programSchema.methods.toPublic = function () {
  return {
    _id: this._id,
    slug: this.slug,
    title: this.title,
    shortTitle: this.shortTitle,
    code: this.code,
    level: this.level,
    degree: this.degree,
    duration: this.duration,
    mode: this.mode,
    category: this.category,
    summary: this.summary,
    description: this.description,
    eligibility: this.eligibility,
    featured: this.featured,
    specializations: (this.specializations || []).map((s) => ({
      slug: s.slug,
      name: s.name,
      summary: s.summary,
      feesPerYear: s.feesPerYear,
      intake: s.intake,
      seatsFilled: s.seatsFilled,
      highlights: s.highlights,
      curriculum: s.curriculum,
      careers: s.careers,
      skills: s.skills,
      featured: s.featured,
    })),
  };
};

const Program = mongoose.model('Program', programSchema);
export default Program;