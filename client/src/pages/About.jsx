import { Link } from 'react-router-dom';
import SectionHead from '../components/SectionHead.jsx';
import CtaBand from '../components/CtaBand.jsx';

const model = [
  {
    step: '01',
    title: 'Enrol at Edge Institute of Technology',
    text: 'Admission, counselling and fee structure are handled entirely by Edge / MentriQ. You deal with one team from day one.',
  },
  {
    step: '02',
    title: 'Train under MentriQ mentors',
    text: 'Daily classes, live projects, code reviews, internships and mock interviews — the same model MentriQ runs for thousands of learners.',
  },
  {
    step: '03',
    title: 'Graduate with a partner campus degree',
    text: 'Your final degree is conferred by a recognized partner campus — valid nationwide for higher studies and government exams.',
  },
];

const values = [
  { title: 'Outcomes over ornament', text: 'We measure success by whether you can build, deploy and get hired — not by how many slides you sat through.' },
  { title: 'Mentors who do the work', text: 'Your teachers are working professionals with live projects and clients. No textbook-only faculty.' },
  { title: 'Radical transparency', text: 'Full fee structures, clear eligibility and no hidden charges. We share the real picture before you enrol.' },
  { title: 'Built on honesty', text: 'We partner with recognized campuses for the degree — and we are upfront that Edge itself is the training and delivery centre.' },
];

export default function About() {
  return (
    <div className="about-page">
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">About Edge</span>
          <h1>An institute built at the edge of industry</h1>
          <p>
            Edge Institute of Technology is the degree delivery arm of MentriQ
            Technologies. We combine the credibility of a recognized
            partner campus with a training model obsessed with one thing: making
            you genuinely employable.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container about-model">
          <SectionHead
            eyebrow="How it works"
            title="One institute, two strengths"
            subtitle="We don't run as a standalone self-registered campus. Instead, we pair recognized partner campuses with our own industry-led teaching."
            center={false}
          />
          <div className="model-grid">
            {model.map((m) => (
              <div className="model-card" key={m.step}>
                <span className="model-step">{m.step}</span>
                <h4>{m.title}</h4>
                <p>{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-gray">
        <div className="container">
          <SectionHead eyebrow="What we stand for" title="The principles behind the institute" />
          <div className="value-grid">
            {values.map((v) => (
              <div className="value-card" key={v.title}>
                <h4>{v.title}</h4>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container two-col-text">
          <div>
            <span className="eyebrow">Who we are</span>
            <h2>The team behind your training</h2>
            <p>
              MentriQ Technologies has spent years building an industry-grade
              training model — live projects, daily code reviews, internships and
              placement support. Edge Institute of Technology turns that proven
              model into a full, recognized degree pathway.
            </p>
            <p>
              The same mentors who run MentriQ\u2019s training practises are the ones
              teaching Edge classrooms. You learn from people who build, lead and
              hire in the real world.
            </p>
          </div>
          <div>
            <span className="eyebrow">Our Campus</span>
            <h2>A space built for innovation</h2>
            <p>
              Our centre in Sanganer, Jaipur is set up as a working technology
              space: dedicated labs for AI and cyber security, deployment
              environments for cloud students, and project rooms for entrepreneur
              cohorts.
            </p>
            <p>
              We invite you to visit, meet the mentors and see the work first-hand
              — before you make any decision.
            </p>
            <div className="campus-facilities">
              {['AI & Cyber Labs', 'Cloud Deployment', 'Project Rooms', 'Mentor Hub'].map((f) => (
                <span className="campus-chip" key={f}>{f}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Come see the Edge model for yourself"
        text="Book a guided campus visit or a counselling session and meet the people who will be training you."
      />
    </div>
  );
}