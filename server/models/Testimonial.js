import mongoose from 'mongoose';

const testimonialSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, 'Name is required'] },
    program: { type: String, default: '' },
    company: { type: String, default: '' },
    role: { type: String, default: '' },
    quote: { type: String, required: [true, 'Testimonial text is required'] },
    rating: { type: Number, min: 1, max: 5, default: 5 },
    featured: { type: Boolean, default: false },
    active: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const Testimonial = mongoose.model('Testimonial', testimonialSchema);
export default Testimonial;