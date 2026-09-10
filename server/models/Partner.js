import mongoose from 'mongoose';

const partnerSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, 'Partner name is required'] },
    kind: {
      type: String,
      enum: ['campus', 'recruiter', 'collaboration'],
      default: 'recruiter',
    },
    tagline: { type: String, default: '' },
    description: { type: String, default: '' },
    tags: [{ type: String }],
    active: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const Partner = mongoose.model('Partner', partnerSchema);
export default Partner;