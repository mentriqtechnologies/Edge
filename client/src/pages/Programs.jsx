import { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import api from '../api/client';
import ProgramCard from '../components/ProgramCard.jsx';
import SectionHead from '../components/SectionHead.jsx';
import LeadsForm from '../components/LeadsForm.jsx';

const levels = ['All', 'Undergraduate', 'Postgraduate'];

export default function Programs() {
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useSearchParams();
  const level = search.get('level') || 'All';

  useEffect(() => {
    setLoading(true);
    const params = {};
    if (level !== 'All') params.level = level;
    api.get('/programs', { params }).then((r) => setPrograms(r.data.programs)).catch(() => setPrograms([])).finally(() => setLoading(false));
  }, [level]);

  const allSpecs = programs.flatMap((p) =>
    (p.specializations || []).map((s) => ({ ...s, degree: p.shortTitle, degreeSlug: p.slug }))
  );

  return (
    <div className="programs-page">
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Degree programs</span>
          <h1>Five degrees. Thirty-one specializations. One edge.</h1>
          <p>
            Choose your degree — B.Tech, BCA, BBA, MCA or MBA — and tailor it
            with an industry specialization. Every combination is taught by
            working mentors through real projects.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="filter-row">
            {levels.map((l) => (
              <button
                key={l}
                type="button"
                className={`filter-chip ${level === l ? 'active' : ''}`}
                onClick={() => {
                  const sp = new URLSearchParams(search);
                  if (l === 'All') sp.delete('level');
                  else sp.set('level', l);
                  setSearch(sp);
                }}
              >
                {l}
              </button>
            ))}
          </div>

          <div className="prog-grid">
            {loading
              ? [null, null, null].map((k, i) => <div className="skeleton-card" key={`sk-${i}`} />)
              : programs.map((p) => <ProgramCard key={p._id} program={p} />)}
          </div>
          {!loading && programs.length === 0 && (
            <div className="empty-state">No programs match your filter. Try another option.</div>
          )}
        </div>
      </section>

      {allSpecs.length > 0 && (
        <section className="section light-on-dark">
          <div className="container">
            <SectionHead
              eyebrow="Specializations"
              title="Browse every specialization"
              subtitle="Jump straight to the track you care about — from Generative AI to Fintech."
              light
            />
            <div className="spec-strip">
              {allSpecs.map((s) => (
                <Link key={`${s.degreeSlug}-${s.slug}`} to={`/programs/${s.degreeSlug}/${s.slug}`} className="spec-strip-chip">
                  <b>{s.degree}</b>
                  <span>{s.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section bg-gray">
        <div className="container">
          <LeadsForm compact />
        </div>
      </section>
    </div>
  );
}