import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../api/client';
import LeadsForm from '../components/LeadsForm.jsx';
import CtaBand from '../components/CtaBand.jsx';

export default function SpecializationDetail() {
  const { slug, specSlug } = useParams();
  const [program, setProgram] = useState(null);
  const [spec, setSpec] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    setError('');
    api.get(`/programs/slug/${slug}/${specSlug}`)
      .then((r) => { setProgram(r.data.program); setSpec(r.data.specialization); })
      .catch(() => setError('Specialization not found.'))
      .finally(() => setLoading(false));
  }, [slug, specSlug]);

  if (loading) return <div className="loading-page">Loading…</div>;
  if (error || !program || !spec) return <div className="loading-page">{error || 'Specialization not found.'}</div>;

  const openSeats = (spec.intake || 0) - (spec.seatsFilled || 0);
  const others = (program.specializations || []).filter((s) => s.slug !== specSlug);

  return (
    <div className="program-detail-page">
      <section className="pd-hero">
        <div className="container pd-hero-inner">
          <div className="pd-copy">
            <div className="pd-meta">
              <Link to={`/programs/${program.slug}`} className="pd-crumbs">← {program.shortTitle}</Link>
              <span className="pd-level">{program.level}</span>
              <span className="pd-code">{program.code}</span>
            </div>
            <h1>{program.shortTitle} — {spec.name}</h1>
            <p className="pd-summary">{spec.summary}</p>
            <ul className="pd-bullets">
              <li><b>{program.duration}</b> · {program.mode}</li>
              <li><b>₹{spec.feesPerYear.toLocaleString('en-IN')}</b> per year</li>
              <li><b>{openSeats > 0 ? `${openSeats} seats open` : 'Waitlist'}</b></li>
              {program.eligibility && <li>Eligibility: {program.eligibility}</li>}
            </ul>
            <div className="pd-actions">
              <Link to="/admissions" className="btn btn-primary btn-lg">Apply for this track</Link>
              <Link to="/contact" className="btn btn-ghost btn-lg">Talk to a counsellor</Link>
            </div>
          </div>
          <div className="pd-aside">
            <LeadsForm />
          </div>
        </div>
      </section>

      {spec.highlights && spec.highlights.length > 0 && (
        <section className="section">
          <div className="container">
            <h2 className="pd-section-title">What makes this track different</h2>
            <div className="highlight-grid">
              {spec.highlights.map((h) => (
                <div className="highlight-card" key={h}>
                  <span className="highlight-icon">✦</span>
                  <p>{h}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section bg-gray">
        <div className="container pd-two-col">
          <div>
            <h2 className="pd-section-title">Skills you will build</h2>
            {spec.skills && spec.skills.length > 0 ? (
              <div className="skill-row">
                {spec.skills.map((s) => <span className="skill-chip" key={s}>{s}</span>)}
              </div>
            ) : (
              <p className="pd-desc">A hands-on skill set shaped by this specialization, taught through real projects.</p>
            )}

            {spec.careers && spec.careers.length > 0 && (
              <>
                <h3 className="pd-subtitle">Careers you can aim for</h3>
                <ul className="career-list">
                  {spec.careers.map((c) => <li key={c}>{c}</li>)}
                </ul>
              </>
            )}
          </div>

          {spec.curriculum && spec.curriculum.length > 0 ? (
            <div className="curriculum-wrap">
              <h2 className="pd-section-title">Semester plan</h2>
              <div className="curriculum-stack">
                {spec.curriculum.map((s) => (
                  <div className="curriculum-semester" key={s.semester}>
                    <h4>{s.semester}</h4>
                    <ul>
                      {s.subjects.map((sub) => <li key={sub}>{sub}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <h2 className="pd-section-title">Semester plan coming soon</h2>
          )}
        </div>
      </section>

      {others.length > 0 && (
        <section className="section">
          <div className="container">
            <SectionHead eyebrow="Compare tracks" title={`Other ${program.shortTitle} specializations`} />
            <div className="spec-grid">
              {others.map((s) => {
                const open = (s.intake || 0) - (s.seatsFilled || 0);
                return (
                  <Link to={`/programs/${program.slug}/${s.slug}`} className="spec-card" key={s.slug}>
                    <div className="spec-card-head">
                      <span className="spec-card-icon">{s.name.slice(0, 2).toUpperCase()}</span>
                      {s.featured && <span className="spec-featured">Featured</span>}
                    </div>
                    <h4>{s.name}</h4>
                    <p>{s.summary}</p>
                    <div className="spec-meta">
                      <span><b>₹{s.feesPerYear.toLocaleString('en-IN')}</b>/yr</span>
                      <span>{open > 0 ? `${open} seats` : 'Waitlist'}</span>
                    </div>
                    <span className="prog-link">View specialization <span aria-hidden>→</span></span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <CtaBand
        title={`Apply for ${program.shortTitle} — ${spec.name}`}
        text={`Complete your application for the ${spec.name} track and secure one of ${openSeats} open seats.`}
        primary="Apply Now"
      />
    </div>
  );
}