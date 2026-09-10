import 'dotenv/config';
import mongoose from 'mongoose';
import User from '../models/User.js';
import Program from '../models/Program.js';
import Testimonial from '../models/Testimonial.js';
import Faq from '../models/Faq.js';
import Partner from '../models/Partner.js';
import News from '../models/News.js';
import Inquiry from '../models/Inquiry.js';
import connectDB from '../config/db.js';
import { users, programs, testimonials, faqs, partners, news, inquiries } from './seedData.js';

const wipe = async () => {
  await Promise.all([
    User.deleteMany({}),
    Program.deleteMany({}),
    Testimonial.deleteMany({}),
    Faq.deleteMany({}),
    Partner.deleteMany({}),
    News.deleteMany({}),
    Inquiry.deleteMany({}),
  ]);
  console.log('Cleared existing collections.');
};

const seedAll = async () => {
  try {
    await connectDB();
    await wipe();

    await User.create(users);
    console.log(`Seeded ${users.length} users.`);

    await Program.create(programs);
    console.log(`Seeded ${programs.length} programs.`);

    await Testimonial.create(testimonials);
    console.log(`Seeded ${testimonials.length} testimonials.`);

    await Faq.create(faqs);
    console.log(`Seeded ${faqs.length} FAQs.`);

    await Partner.create(partners);
    console.log(`Seeded ${partners.length} partners.`);

    await News.create(news);
    console.log(`Seeded ${news.length} news articles.`);

    await Inquiry.create(inquiries);
    console.log(`Seeded ${inquiries.length} sample inquiries.`);

    console.log('\nDatabase seeded successfully.');
    console.log('Admin login -> admin@edge.edu / admin123');
  } catch (error) {
    console.error('Seed failed:', error.message);
    process.exit(1);
  } finally {
    await mongoose.disconnect();
  }
};

seedAll();