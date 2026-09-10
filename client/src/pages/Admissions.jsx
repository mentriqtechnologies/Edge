import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../api/client';
import SectionHead from '../components/SectionHead.jsx';
import FaqList from '../components/FaqList.jsx';
import LeadsForm from '../components/LeadsForm.jsx';

const steps = [
  { title: 'Apply online', text: 'Submit the application form with your basic details and programme preference.', },
  { title: 'Counselling', text: 'Our team walks you through fee structure, eligibility and program fit in a free session.', },
  { title: 'Merit & document check', text: 'We verify your Class XII documents and any applicable scholarship / category benefits.', },
  { title: 'Seat confirmation', text: 'Lock your seat and complete the final admission formalities.', },
];

export default function Admissions() {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    api.get('/faqs').then((r) => setFaqs(r.data.faqs)).catch(() => {});
  }, []);

  return (
    <div className="admissions-page">
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Admissions 2027</span>
          <h1>Admissions open for the 2027 Batch</h1>
          <p>
            Six industry-first degree tracks. Limited seats per program. Reserve
            your place and get priority counselling before public admissions close.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="How to apply" title="A simple four-step admissions process" />
          <div className="steps-grid">
            {steps.map((s, i) => (
              <div className="step-card" key={s.title}>
                <span className="step-num">0{i + 1}</span>
                <h4>{s.title}</h4>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-gray">
        <div className="container apply-layout">
          <div className="apply-copy">
            <SectionHead
              eyebrow="Start your application"
              title="Reserve your counselling slot"
              subtitle="Tell us a little about you and our admissions team will reach out to schedule your free counselling session."
              center={false}
            />
            <div className="apply-quick">
              <p><b>Prefer to talk now?</b> Call <a href="tel:+917665531312">+91 7665531312</a> or message us on WhatsApp during business hours.</p>
              <Link to="/contact" className="btn btn-outline-dark">Other ways to reach us</Link>
            </div>
          </div>
          <LeadsForm />
        </div>
      </section>

      <section className="faq-section section">
        <div className="container faq-layout">
          <div className="faq-intro">
            <span className="eyebrow">Admission FAQs</span>
            <h2>Everything else you want to know</h2>
            <Link to="/contact" className="btn btn-outline-dark">Ask our team a question</Link>
          </div>
          <FaqList faqs={faqs} />
        </div>
      </section>
    </div>
  );
}