import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../api/client';
import ProgramCard from '../components/ProgramCard.jsx';
import DegreeIcon from '../components/DegreeIcon.jsx';
import SectionHead from '../components/SectionHead.jsx';
import LeadsForm from '../components/LeadsForm.jsx';
import FaqList from '../components/FaqList.jsx';
import CtaBand from '../components/CtaBand.jsx';

const stats = [
  { value: '50+', label: 'Campus partners' },
  { value: '100%', label: 'Practical labs' },
  { value: '1400+', label: 'Placement partners' },
  { value: '95%', label: 'Placement rate' },
];

const outcomes = [
  { num: '01', title: 'A degree with real weight', text: 'Conferred by a recognized partner campus — valid for higher studies and government exams.' },
  { num: '02', title: 'Taught by practitioners', text: 'Working engineers, data scientists and product leads — not textbook-only faculty.' },
  { num: '03', title: 'Ship real work', text: 'Live client projects, ERP systems and models deployed to cloud from year one.' },
  { num: '04', title: 'A placement cell that follows through', text: 'Backed by MentriQ\u2019s hiring network with mock interviews, portfolios and recruiter connects.' },
];

export default function Home() {
  const [programs, setPrograms] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [faqs, setFaqs] = useState([]);
  const [partners, setPartners] = useState([]);
  const [news, setNews] = useState([]);

  useEffect(() => {
    api.get('/programs?featured=true').then((r) => setPrograms(r.data.programs)).catch(() => {});
    api.get('/testimonials?featured=true').then((r) => setTestimonials(r.data.testimonials)).catch(() => {});
    api.get('/faqs').then((r) => setFaqs(r.data.faqs)).catch(() => {});
    api.get('/partners').then((r) => setPartners(r.data.partners)).catch(() => {});
    api.get('/news?limit=3').then((r) => setNews(r.data.articles)).catch(() => {});
  }, []);

  const campusPartners = partners.filter((p) => p.kind === 'campus');
  const recruiters = partners.filter((p) => p.kind === 'recruiter').slice(0, 8);

  return (
    <div className="home-page">
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Industry-led degrees</span>
            <h1>
              A degree that holds weight.
              <br />
              Skills that <em>get you hired.</em>
            </h1>
            <p>
              Edge Institute of Technology pairs the validity of a recognized
              partner campus with MentriQ's project-first, mentor-driven
              training — so you don't just graduate, you get ready.
            </p>
            <div className="hero-actions">
              <Link to="/admissions" className="btn btn-primary btn-lg">Apply for 2027 →</Link>
              <Link to="/programs" className="btn btn-ghost btn-lg">Explore programs</Link>
            </div>
            <div className="hero-stats">
              {stats.map((s) => (
                <div className="hstat" key={s.value}>
                  <b>{s.value}</b>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-aside">
            <div className="hero-image-wrap">
              <img src="/HeroSectionGirl.jpeg" alt="Edge Institute student" className="hero-image" />
              <div className="hero-badge hero-badge-top">
                <b>95%</b>
                <span>Placement rate</span>
              </div>
              <div className="hero-badge hero-badge-bottom">
                <b>1400+</b>
                <span>Placement partners</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="premium section" aria-label="Why Edge programs">
        <div className="container">
          <div className="premium-top">
            <div className="premium-art">
              <svg viewBox="0 0 420 360" role="img" aria-label="Graduation cap and diploma illustration">
                <defs>
                  <linearGradient id="pgNavy" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#1c3a63" />
                    <stop offset="1" stopColor="#0b1f3a" />
                  </linearGradient>
                  <linearGradient id="pgGold" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#f0c25c" />
                    <stop offset="1" stopColor="#c08a24" />
                  </linearGradient>
                  <linearGradient id="pgCream" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#fffdf7" />
                    <stop offset="1" stopColor="#f3e7c8" />
                  </linearGradient>
                </defs>
                <rect x="26" y="22" width="368" height="316" rx="64" fill="url(#pgNavy)" />
                <rect x="40" y="36" width="340" height="288" rx="52" fill="none" stroke="rgba(242,163,60,0.18)" strokeWidth="1.5" />
                <circle cx="210" cy="186" r="118" fill="rgba(79,179,255,0.1)" />
                <circle cx="210" cy="180" r="98" fill="none" stroke="rgba(242,163,60,0.28)" strokeWidth="3" strokeDasharray="6 12" />

                <g transform="rotate(-12 128 216)">
                  <rect x="92" y="120" width="72" height="150" rx="18" fill="url(#pgCream)" stroke="#e6d3a2" strokeWidth="1.5" />
                  <rect x="92" y="120" width="72" height="28" rx="14" fill="url(#pgGold)" />
                  <rect x="92" y="242" width="72" height="28" rx="14" fill="url(#pgGold)" />
                  <circle cx="128" cy="195" r="18" fill="url(#pgGold)" stroke="#8a6a1c" strokeWidth="3" />
                  <circle cx="128" cy="195" r="7" fill="none" stroke="#8a6a1c" strokeWidth="2" />
                </g>

                <polygon points="104,186 214,118 324,186 214,254" fill="url(#pgGold)" />
                <path d="M98 186 Q214 116 330 186" fill="none" stroke="#f8df9e" strokeWidth="4" strokeLinecap="round" />
                <polygon points="214,118 324,186 214,254 104,186" fill="none" stroke="#8a6a1c" strokeWidth="2" opacity="0.35" />
                <circle cx="214" cy="186" r="8" fill="#8a6a1c" stroke="#f8df9e" strokeWidth="2" />
                <rect x="176" y="248" width="76" height="30" rx="11" fill="#173458" stroke="#173458" strokeWidth="1" />
                <ellipse cx="214" cy="278" rx="42" ry="12" fill="#0e1b30" />
                <line x1="324" y1="186" x2="336" y2="266" stroke="#8a6a1c" strokeWidth="4" />
                <circle cx="336" cy="269" r="5" fill="#c08a24" />
                <path d="M319 268 h34 v20 q-17 10 -34 0 z" fill="url(#pgGold)" />

                <g fill="#f0c25c">
                  <path d="M78 118 l5 12 12 5 -12 5 -5 12 -5-12 -12-5 12-5 z" />
                  <path d="M342 92 l4 9 9 4 -9 4 -4 9 -4-9 -9-4 9-4 z" />
                  <path d="M86 306 l4 9 9 4 -9 4 -4 9 -4-9 -9-4 9-4 z" />
                  <path d="M336 302 l3 7 7 3 -7 3 -3 7 -3-7 -7-3 7-3 z" />
                </g>
              </svg>
            </div>

            <div className="premium-right">
              <h2 className="premium-title">Your Dream Career Starts with the Right Program</h2>
              <div className="premium-features">
                <div className="premium-feature">
                  <span className="premium-feature-ic">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l1.9 4.7L18.5 9.5l-4.6 1.8L12 16l-1.9-4.7L5.5 9.5l4.6-1.8z" /><path d="M18.5 15.5l.9 2.1 2.1.9-2.1.9-.9 2.1-.9-2.1-2.1-.9 2.1-.9z" /><path d="M6 16.5l.7 1.6 1.6.7-1.6.7L6 21l-.7-1.5-1.6-.7 1.6-.7z" /></svg>
                  </span>
                  <div>
                    <b>AI-Integrated Learning</b>
                    <span>Core subjects taught with applied AI tools, labs and projects.</span>
                  </div>
                </div>
                <div className="premium-feature">
                  <span className="premium-feature-ic">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M2 4h6a4 4 0 0 1 4 4v12a3 3 0 0 0-3-3H2z" /><path d="M22 4h-6a4 4 0 0 0-4 4v12a3 3 0 0 1 3-3h7z" /></svg>
                  </span>
                  <div>
                    <b>Future-Ready Curriculum</b>
                    <span>Engineered around what 2027 industry actually needs from graduates.</span>
                  </div>
                </div>
                <div className="premium-feature">
                  <span className="premium-feature-ic">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="m12 2 9 5-9 5-9-5 9-5z" /><path d="m3 12 9 5 9-5" /><path d="m3 17 9 5 9-5" /></svg>
                  </span>
                  <div>
                    <b>5+ Career Tracks &amp; Specializations</b>
                    <span>Pick one path or combine tracks across your degree.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="premium-programs">
            <h3 className="premium-programs-title">Programs offered</h3>
            <div className="premium-program-row">
              {[
                { code: 'MBA', name: 'Master of Business Administration' },
                { code: 'MCA', name: 'Master of Computer Applications' },
                { code: 'BBA', name: 'Bachelor of Business Administration' },
                { code: 'BCA', name: 'Bachelor of Computer Applications' },
                { code: 'B.Tech', name: 'Bachelor of Technology' },
              ].map((p) => (
                <div className="premium-program-card" key={p.code}>
                  <span className="pbadge"><DegreeIcon code={p.code} size={26} /></span>
                  <b>{p.code}</b>
                  <span>{p.name}</span>
                </div>
              ))}
            </div>
            <div className="premium-programs-cta">
              <Link to="/admissions" className="btn btn-navy">Check Eligibility →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="placement section" aria-label="Placement opportunity program">
        <div className="container">
          <div className="placement-card">
            <div className="placement-overlay" aria-hidden="true" />
            <div className="placement-left">
              <span className="place-eyebrow eyebrow">Careers beyond graduation</span>
              <h2 className="place-heading">Building Careers That Go Beyond the Classroom.</h2>

              <div className="place-stats">
                <div className="place-stat">
                  <b>₹30 LPA</b>
                  <span>Highest Package</span>
                </div>
                <div className="place-stat">
                  <b>50+</b>
                  <span>Partner Campus</span>
                </div>
                <div className="place-stat">
                  <b>1,400+</b>
                  <span>Recruiters Network</span>
                </div>
                <div className="place-stat">
                  <b>125,000+</b>
                  <span>Student Community</span>
                </div>
              </div>

              <div className="place-guarantee">
                <span className="place-guarantee-ic">✦</span>
                <p>Get 400+ placement opportunities or your a year fee back</p>
              </div>

              <div className="place-program">
                <span className="place-program-tag">POP</span>
                <b>Placement Opportunity Program</b>
              </div>
            </div>

            <div className="placement-right">
              <div className="place-media">
                <img src="/FingerBoy.png" alt="Edge student holding books and wearing a backpack" className="place-img" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="financing section" aria-label="Education financing">
        <div className="container">
          <div className="financing-card">
            <div className="financing-left">
              <span className="financing-label">Easy Fee-Payment</span>
              <h2 className="financing-heading">Invest in Your Future. Build Your Career.</h2>
              <p className="financing-sub">
                Flexible EMI plans and merit-based scholarships make your degree
                affordable — so money never stands between you and the career you want.
              </p>
              <Link to="/admissions" className="btn btn-white btn-lg">
                Check Eligibility Now
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M13 6l6 6-6 6" /></svg>
              </Link>
              <p className="financing-terms">Terms &amp; conditions apply</p>
            </div>

            <div className="financing-right">
              <div className="financing-feature">
                <span className="financing-feature-ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="2" y="5" width="20" height="14" rx="2" /><path d="M2 10h20" /><path d="M6 15h2" /></svg>
                </span>
                <div className="fin-text">
                  <b>0% Cost EMI available</b>
                  <span>Pay in easy instalments with zero extra cost on select plans.</span>
                </div>
              </div>
              <div className="financing-feature">
                <span className="financing-feature-ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="9" r="5" /><path d="M9 13l-2 7 5-2.5L17 20l-2-7" /></svg>
                </span>
                <div className="fin-text">
                  <b>Up to 100% scholarship available</b>
                  <span>Merit-based scholarships built into your fee plan.</span>
                </div>
              </div>
              <div className="financing-feature">
                <span className="financing-feature-ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><path d="M9.5 9.5l1.6 4.4L15.5 15l-1.6-4.4z" /></svg>
                </span>
                <div className="fin-text">
                  <b>Get 400+ assured opportunities with Placement Opportunity Program</b>
                  <span>Assured placement drives backed by our recruiter network.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="programs section">
        <div className="container">
          <SectionHead
            eyebrow="Degree tracks"
            title="Choose the degree that fits your ambition"
            subtitle="Five degrees — B.Tech, BCA, BBA, MCA and MBA — each with industry specializations and project-first teaching."
          />
          <div className="prog-grid">
            {(programs.length ? programs : [null, null, null]).map((p) =>
              p ? <ProgramCard key={p._id} program={p} /> : <div className="skeleton-card" key={`sk-${Math.random()}`} />
            )}
          </div>
          <div className="see-more">
            <Link to="/programs" className="btn btn-outline-dark">View all degrees & specializations</Link>
          </div>
        </div>
      </section>

      <section className="section bg-gray counselling-slot">
        <div className="container apply-layout">
          <div className="apply-copy">
            <SectionHead
              eyebrow="Talk to our team"
              title="Reserve your counselling slot"
              subtitle="Tell us a little about you and our admissions team will reach out to schedule your free counselling session."
              center={false}
            />
            <div className="apply-quick">
              <p><b>Prefer to talk now?</b> Call <a href="tel:+917665531312">+91 7665531312</a> or message us on WhatsApp during business hours.</p>
              <Link to="/contact" className="btn btn-outline-dark">Other ways to reach us</Link>
            </div>
          </div>
          <LeadsForm compact />
        </div>
      </section>

      <section className="outcomes section light-on-dark">
        <div className="container">
          <SectionHead
            eyebrow="The Edge model"
            title="One institute, two strengths"
            subtitle="The credibility of a real degree and the outcomes of a working technology company."
            light
          />
          <div className="outcome-grid">
            {outcomes.map((o) => (
              <div className="outcome-card" key={o.num}>
                <span className="num">{o.num}</span>
                <h4>{o.title}</h4>
                <p>{o.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="partners section bg-gray">
        <div className="container">
          <SectionHead
            eyebrow="Our Campuses"
            title="Where you learn matters"
            subtitle="Campus partners across India with a placement network of 1400+ companies across engineering, data, cloud and security."
          />
          <div className="partner-block">
            <h4 className="block-label">Campus Partners</h4>
            <div className="partner-grid">
              {(campusPartners.length ? campusPartners : [{ name: 'Suresh Gyan Vihar Campus', tagline: 'Jagatpura, Jaipur' }, { name: 'Bhartiya Skill Development Campus', tagline: 'Jaipur', }, { name: 'Jaipur National Campus', tagline: 'Jagatpura, Jaipur' }]).map((p) => (
                <div className="partner-card" key={p.name}>
                  <b>{p.name}</b>
                  <span>{p.tagline}</span>
                  {p.tags && (
                    <div className="tag-row">
                      {p.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="partner-block">
            <h4 className="block-label">Placement Partners</h4>
            <div className="recruiter-row">
              {(recruiters.length ? recruiters : [
                'Infotech Systems Ltd', 'Nimbus CloudWorks', 'DataVista Analytics',
                'SecureNet Solutions', 'Pulse Media', 'Vertex Fintech',
              ]).map((p) => (
                <span className="recruiter-chip" key={typeof p === 'string' ? p : p.name}>
                  {typeof p === 'string' ? p : p.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials section">
        <div className="container">
          <SectionHead eyebrow="Success stories" title="From campus to career" />
          <div className="testimonial-grid">
            {(testimonials.length ? testimonials : [null, null, null]).map((t) =>
              t ? (
                <figure className="testimonial-card" key={t._id}>
                  <blockquote>“{t.quote}”</blockquote>
                  <figcaption>
                    <b>{t.name}</b>
                    <span>{t.role}{t.company ? ` · ${t.company}` : ''}</span>
                    <em>{t.program}</em>
                  </figcaption>
                </figure>
              ) : (
                <figure className="skeleton-card" key={`sk-${Math.random()}`} />
              )
            )}
          </div>
        </div>
      </section>

      <section className="faq-section section">
        <div className="container faq-layout">
          <div className="faq-intro">
            <span className="eyebrow">Questions, answered</span>
            <h2>Before you apply</h2>
            <p>
              The most common questions students and families ask. Something
              else on your mind? Our counselling team is one call away.
            </p>
            <Link to="/contact" className="btn btn-outline-dark">Ask a question</Link>
          </div>
          <FaqList faqs={faqs.slice(0, 5)} />
        </div>
      </section>

      {news.length > 0 && (
        <section className="insights section">
          <div className="container">
            <SectionHead eyebrow="Inside Edge" title="News, stories and guidance" />
            <div className="news-grid">
              {news.map((a) => (
                <Link to={`/insights/${a.slug}`} className="news-card" key={a._id}>
                  <span className="news-tag">{a.category}</span>
                  <h4>{a.title}</h4>
                  <p>{a.excerpt}</p>
                  <span className="news-meta">
                    {new Date(a.publishDate).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' })} · {a.readMinutes} min read
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand />
    </div>
  );
}