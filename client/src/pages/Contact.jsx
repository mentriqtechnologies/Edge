import { useState } from 'react';
import SectionHead from '../components/SectionHead.jsx';
import api, { apiError } from '../api/client.js';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);
    try {
      const { data } = await api.post('/inquiries', { type: 'contact', ...form });
      setStatus({ ok: true, message: data.message || 'Message sent. We will get back to you soon.' });
      setForm({ name: '', email: '', phone: '', message: '' });
    } catch (err) {
      setStatus({ ok: false, message: apiError(err) });
    }
  };

  return (
    <div className="contact-page">
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Contact</span>
          <h1>Talk to the Edge team</h1>
          <p>
            Questions about programs, fees or applications? Reach out and a real
            human from our admissions team will get back to you.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-layout">
          <div className="contact-info">
            <SectionHead eyebrow="Reach us directly" title="We'd love to hear from you" center={false} />
            <div className="info-list">
              <div className="info-item">
                <h4>Visit the centre</h4>
                <p>Sanganer, Jaipur, Rajasthan 302029</p>
              </div>
              <div className="info-item">
                <h4>Call us</h4>
                <p><a href="tel:+917665531312">+91 7665531312</a></p>
              </div>
              <div className="info-item">
                <h4>Email</h4>
                <p><a href="mailto:admissions@edgeinstitute.in">admissions@edgeinstitute.in</a></p>
              </div>
              <div className="info-item">
                <h4>Campus visits</h4>
                <p>Guided tours run most weekdays by appointment.</p>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <h3>Send us a message</h3>
            {status && (
              <div className={`alert ${status.ok ? 'alert-success' : 'alert-error'}`}>{status.message}</div>
            )}
            <div className="two-col">
              <div className="field">
                <label htmlFor="c-name">Name</label>
                <input id="c-name" name="name" required value={form.name} onChange={handleChange} placeholder="Your full name" />
              </div>
              <div className="field">
                <label htmlFor="c-phone">Phone</label>
                <input id="c-phone" name="phone" value={form.phone} onChange={handleChange} placeholder="+91 98765 43210" />
              </div>
            </div>
            <div className="field">
              <label htmlFor="c-email">Email</label>
              <input id="c-email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="you@example.com" />
            </div>
            <div className="field">
              <label htmlFor="c-message">Message</label>
              <textarea id="c-message" name="message" rows="5" value={form.message} onChange={handleChange} placeholder="How can we help?" />
            </div>
            <button className="btn btn-primary btn-block">Send message</button>
          </form>
        </div>
      </section>
    </div>
  );
}