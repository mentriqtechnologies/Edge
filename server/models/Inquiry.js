import mongoose from 'mongoose';

const PHONE_MESSAGE =
  'Enter a 10-digit mobile number with country code, e.g. +91 98765 43210';

const nameValidators = [
  { validator: (v) => !/\d/.test(v), message: 'Name cannot contain numbers' },
  { validator: (v) => /[A-Za-z]/.test(v), message: 'Please enter a valid name' },
];

const phoneValidator = {
  validator(v) {
    if (!/^\s*\+/.test(v)) return false;
    if (!/^[\d\s+()-]+$/.test(v)) return false;
    const digits = v.replace(/\D/g, '');
    if (digits.length < 11 || digits.length > 13) return false;
    if (digits.startsWith('91') && digits.length !== 12) return false;
    if (!/^[1-9]/.test(digits)) return false;
    return true;
  },
  message: PHONE_MESSAGE,
};

const inquirySchema = new mongoose.Schema(
  {
    type: { type: String, enum: ['admission', 'contact', 'callback'], default: 'admission' },
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
      minlength: [2, 'Name must be at least 2 characters'],
      maxlength: [80, 'Name must be under 80 characters'],
      validate: nameValidators,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email'],
    },
    phone: {
      type: String,
      required: [true, 'Phone number is required'],
      trim: true,
      validate: phoneValidator,
    },
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