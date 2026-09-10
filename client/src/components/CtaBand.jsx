import { Link } from 'react-router-dom';

export default function CtaBand({ title = 'Admissions open for 2027 Batch', text, primary, secondary }) {
  return (
    <section className="cta-band">
      <div className="container cta-inner">
        <div>
          <h3>{title || 'Admissions open for 2027 Batch'}</h3>
          <p>
            {text ||
              'Reserve your seat and get priority counselling before public admissions close. Limited seats across all five degrees.'}
          </p>
        </div>
        <div className="cta-actions">
          <Link to="/admissions" className="btn btn-primary">
            {primary || 'Apply Now'}
          </Link>
          <Link to="/contact" className="btn btn-ghost">
            {secondary || 'Talk to a Counsellor'}
          </Link>
        </div>
      </div>
    </section>
  );
}