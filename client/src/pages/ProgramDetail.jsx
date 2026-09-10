import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../api/client';
import SectionHead from '../components/SectionHead.jsx';
import CtaBand from '../components/CtaBand.jsx';
import DegreeIcon from '../components/DegreeIcon.jsx';

export default function ProgramDetail() {
  const { slug } = useParams();
  const [program, setProgram] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    setError('');
    api.get(`/programs/slug/${slug}`)
      .then((r) => setProgram(r.data.program))
      .catch(() => setError('Program not found.'))
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) return <div className="loading-page">Loading…</div>;
  if (error || !program) return <div className="loading-page">{error || 'Program not found.'}</div>;

  const specs = program.specializations || [];
  const totalSeats = specs.reduce((n, s) => n + (s.intake || 0), 0);

  return (
    <div className="program-detail-page">
      <section className="pd-hero">
        <div className="container pd-hero-inner">
          <div className="pd-copy">
            <div className="pd-badge-icon">
              <DegreeIcon code={program.shortTitle || program.title} size={42} />
            </div>
            <div className="pd-copy-inner">
            <div className="pd-meta">
              <span className="pd-level">{program.level}</span>
              <span className="pd-code">{program.code}</span>
            </div>
            <h1>{program.title}</h1>
            <p className="pd-summary">{program.summary}</p>
            <ul className="pd-bullets">
              <li><b>{program.duration}</b> · {program.mode}</li>
              <li><b>{specs.length} specializations</b> · {totalSeats} overall intake</li>
              {program.eligibility && <li>Eligibility: {program.eligibility}</li>}
            </ul>
            <div className="pd-actions">
              <Link to="/admissions" className="btn btn-primary btn-lg">Apply for this degree</Link>
              <Link to="/contact" className="btn btn-ghost btn-lg">Talk to a counsellor</Link>
            </div>
            </div>
          </div>
        </div>
      </section>

      {program.description && (
        <section className="section">
          <div className="container">
            <SectionHead
              eyebrow="About the degree"
              title={program.title}
              subtitle={program.description}
              center={false}
            />
          </div>
        </section>
      )}

      {specs.length > 0 && (
        <section className="section bg-gray">
          <div className="container">
            <SectionHead
              eyebrow="Choose your track"
              title="Specializations under this degree"
              subtitle="Each specialization shares the same degree and core curriculum, but shapes your projects, skills and career path."
            />
            <div className="spec-grid">
              {specs.map((s) => {
                const open = (s.intake || 0) - (s.seatsFilled || 0);
                return (
                  <Link to={`/programs/${program.slug}/${s.slug}`} className="spec-card" key={s.slug}>
                    <div className="spec-card-head">
                      <span className="spec-card-icon">
                        {s.name.slice(0, 2).toUpperCase()}
                      </span>
                      {s.featured && <span className="spec-featured">Featured</span>}
                    </div>
                    <h4>{s.name}</h4>
                    <p>{s.summary}</p>
                    <div className="spec-meta">
                      <span><b>₹{s.feesPerYear.toLocaleString('en-IN')}</b>/yr</span>
                      <span>{open > 0 ? `${open} seats` : 'Waitlist'}</span>
                    </div>
                    {s.careers && s.careers.length > 0 && (
                      <div className="spec-careers">
                        {s.careers.slice(0, 3).map((c) => <span key={c}>{c}</span>)}
                      </div>
                    )}
                    <span className="prog-link">View specialization <span aria-hidden>→</span></span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <CtaBand
        title={`Admissions open for 2027 Batch — "${program.shortTitle}"`}
        text="Talk to a counsellor, compare specializations and reserve your seat before the batch fills."
        primary="Apply Now"
      />
    </div>
  );
}