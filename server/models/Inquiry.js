import mongoose from 'mongoose';

const inquirySchema = new mongoose.Schema(
  {
    type: { type: String, enum: ['admission', 'contact', 'callback'], default: 'admission' },
    name: { type: String, required: [true, 'Name is required'], trim: true },
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email'],
    },
    phone: { type: String, required: [true, 'Phone number is required'], trim: true },
    state: { type: String, default: '' },
    city: { type: String, default: '' },
    program: { type: String, default: '' },
    level: { type: String, default: '' },
    message: { type: String, default: '' },
    status: {
      type: String,
      enum: ['new', 'contacted', 'scheduled', 'converted', 'closed'],
      default: 'new',
    },
    source: { type: String, default: 'website' },
  },
  { timestamps: true }
);

const Inquiry = mongoose.model('Inquiry', inquirySchema);
export default Inquiry;