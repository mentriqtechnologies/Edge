import { useState } from 'react';

export const DEGREES = ['B.Tech', 'BCA', 'BBA', 'MCA', 'MBA'];

const empty = {
  name: '', email: '', phone: '', state: '', city: '',
  program: '', level: '',
};

export default function LeadsForm({ compact = false }) {
  const [form, setForm] = useState(empty);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(null);
  const [error, setError] = useState('');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setDone(null);
    setSubmitting(true);
    try {
      const res = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'admission', ...form }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message);
      setDone('Thanks! Our admissions team will contact you within one working day.');
      setForm({ ...empty });
    } catch (err) {
      setError(err.message || 'Could not submit. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className={`leads-card ${compact ? 'compact' : ''}`}>
      <h3>Request a call back</h3>
      <p className="leads-sub">Fill in your details and our counselling team will reach out.</p>

      {done && <div className="alert alert-success">{done}</div>}
      {error && <div className="alert alert-error">{error}</div>}

      <form onSubmit={handleSubmit} className="leads-form">
        <div className="field">
          <label htmlFor="lead-name">Full name</label>
          <input id="lead-name" name="name" value={form.name} onChange={handleChange} required placeholder="e.g. Ananya Sharma" />
        </div>
        <div className="two-col">
          <div className="field">
            <label htmlFor="lead-phone">Mobile number</label>
            <input id="lead-phone" name="phone" value={form.phone} onChange={handleChange} required placeholder="+91 98765 43210" />
          </div>
          <div className="field">
            <label htmlFor="lead-email">Email</label>
            <input id="lead-email" name="email" type="email" value={form.email} onChange={handleChange} required placeholder="you@example.com" />
          </div>
        </div>
        <div className="two-col">
          <div className="field">
            <label htmlFor="lead-level">Interested level</label>
            <select id="lead-level" name="level" value={form.level} onChange={handleChange}>
              <option value="">Select level</option>
              <option>Undergraduate</option>
              <option>Postgraduate</option>
              <option>Not sure yet</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="lead-state">State</label>
            <input id="lead-state" name="state" value={form.state} onChange={handleChange} placeholder="e.g. Rajasthan" />
          </div>
        </div>
        {!compact && (
          <div className="field">
            <label htmlFor="lead-degree">Preferred degree</label>
            <select id="lead-degree" name="program" value={form.program} onChange={handleChange}>
              <option value="">Select a degree</option>
              {DEGREES.map((d) => <option key={d} value={d}>{d}</option>)}
            </select>
          </div>
        )}
        <button className="btn btn-primary btn-block" disabled={submitting}>
          {submitting ? 'Submitting…' : 'Request Call Back'}
        </button>
        <p className="leads-note">No spam. We only use your details to schedule counselling.</p>
      </form>
    </div>
  );
}