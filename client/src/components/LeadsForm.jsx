import { useState } from 'react';
import api, { apiError } from '../api/client.js';
import FieldError from './FieldError.jsx';
import { validateName, validateEmail, validatePhone, normalisePhone } from '../utils/validate.js';

export const DEGREES = ['B.Tech', 'BCA', 'BBA', 'MCA', 'MBA'];

const empty = {
  name: '', email: '', phone: '', state: '', city: '',
  program: '', level: '',
};

const validators = { name: validateName, email: validateEmail, phone: validatePhone };

const fieldClass = (errors, name) => `field${errors[name] ? ' invalid' : ''}`;

export default function LeadsForm({ compact = false }) {
  const [form, setForm] = useState(empty);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(null);
  const [error, setError] = useState('');
  const [errors, setErrors] = useState({});

  const validateField = (name, value) => (validators[name] ? validators[name](value) : '');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: validateField(name, value) });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (!validators[name]) return;
    setErrors({ ...errors, [name]: validateField(name, value) });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setDone(null);

    const nextErrors = {};
    for (const [name, validate] of Object.entries(validators)) {
      const message = validate(form[name]);
      if (message) nextErrors[name] = message;
    }
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      setError('Please fix the highlighted fields and try again.');
      return;
    }

    setSubmitting(true);
    try {
      const { data } = await api.post('/inquiries', {
        type: 'admission',
        ...form,
        phone: normalisePhone(form.phone),
      });
      setDone(data.message || 'Thanks! Our admissions team will contact you within one working day.');
      setForm({ ...empty });
      setErrors({});
    } catch (err) {
      setError(apiError(err));
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
        <div className={fieldClass(errors, 'name')}>
          <label htmlFor="lead-name">Full name</label>
          <input id="lead-name" name="name" value={form.name} onChange={handleChange} onBlur={handleBlur} required placeholder="e.g. Ananya Sharma" autoComplete="name" />
          <FieldError>{errors.name}</FieldError>
        </div>
        <div className="two-col">
          <div className={fieldClass(errors, 'phone')}>
            <label htmlFor="lead-phone">Mobile number</label>
            <input id="lead-phone" name="phone" type="tel" inputMode="tel" value={form.phone} onChange={handleChange} onBlur={handleBlur} required placeholder="+91 98765 43210" autoComplete="tel" />
            <FieldError>{errors.phone}</FieldError>
          </div>
          <div className={fieldClass(errors, 'email')}>
            <label htmlFor="lead-email">Email</label>
            <input id="lead-email" name="email" type="email" value={form.email} onChange={handleChange} onBlur={handleBlur} required placeholder="you@example.com" autoComplete="email" />
            <FieldError>{errors.email}</FieldError>
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