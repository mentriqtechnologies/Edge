import mongoose from 'mongoose';

const faqSchema = new mongoose.Schema(
  {
    question: { type: String, required: [true, 'Question is required'] },
    answer: { type: String, required: [true, 'Answer is required'] },
    category: { type: String, default: 'Admissions' },
    order: { type: Number, default: 0 },
    active: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const Faq = mongoose.model('Faq', faqSchema);
export default Faq;