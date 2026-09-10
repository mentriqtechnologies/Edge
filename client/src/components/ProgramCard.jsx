import { Link } from 'react-router-dom';
import DegreeIcon from './DegreeIcon.jsx';

const codeColor = (code = '') => {
  const palettes = ['#0e7490', '#7c3aed', '#b45309', '#be123c', '#15803d', '#1d4ed8'];
  let h = 0;
  for (let i = 0; i < code.length; i += 1) h = (h * 31 + code.charCodeAt(i)) >>> 0;
  return { background: palettes[h % palettes.length] };
};

export default function ProgramCard({ program }) {
  const color = codeColor(program.code);
  const specs = program.specializations || [];
  const openSeats = specs.reduce((n, s) => n + ((s.intake || 0) - (s.seatsFilled || 0)), 0);

  return (
    <div className="prog-card">
      <div className="prog-card-top">
        <div className="prog-avatar" style={{ background: color.background }}>
          <DegreeIcon code={program.shortTitle || program.title} size={26} />
        </div>
        <span className="prog-level">{program.level}</span>
      </div>
      <h4>{program.title}</h4>
      <p>{program.summary}</p>

      {specs.length > 0 && (
        <div className="spec-chips">
          {specs.map((s) => (
            <Link to={`/programs/${program.slug}/${s.slug}`} className="spec-chip" key={s.slug}>
              {s.name}
            </Link>
          ))}
        </div>
      )}

      <div className="prog-tags">
        <span>{program.duration}</span>
        <span>{specs.length} specializations</span>
        <span>{openSeats > 0 ? `${openSeats} seats open` : 'Waitlist'}</span>
      </div>
      <Link to={`/programs/${program.slug}`} className="prog-link">
        View degree & specializations <span aria-hidden>→</span>
      </Link>
    </div>
  );
}