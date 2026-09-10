const paths = {
  MBA: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M3 11h18" />
      <path d="M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2" />
      <path d="M8 15h2" />
      <path d="M14 15h2" />
    </svg>
  ),
  BBA: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 17l9 4 9-4" />
      <path d="M3 17V9l9-4 9 4v8" />
      <path d="M13 5c0 1.5 1 3 3 3" />
      <circle cx="16" cy="8" r="3" />
    </svg>
  ),
  BCA: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="13" rx="2" />
      <path d="M8 21h8" />
      <path d="M12 17v4" />
      <polyline points="9 9 6.5 11.5 9 14" />
      <polyline points="15 9 17.5 11.5 15 14" />
    </svg>
  ),
  MCA: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <polyline points="9.5 8 7 10.5 9.5 13" />
      <polyline points="14.5 8 17 10.5 14.5 13" />
      <line x1="12" y1="15.5" x2="12" y2="16.5" />
    </svg>
  ),
  BTECH: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="7" y="7" width="10" height="10" rx="2" />
      <path d="M12 2v3" />
      <path d="M12 19v3" />
      <path d="M2 12h3" />
      <path d="M19 12h3" />
      <circle cx="12" cy="12" r="2.5" />
    </svg>
  ),
};

const DEFAULT = 'BTECH';

export default function DegreeIcon({ code = '', size = 22, style = {} }) {
  const key = (code || '').toUpperCase().replace(/[^A-Z]/g, '');
  const lookup = key.startsWith('MBA') ? 'MBA' : key.startsWith('BBA') ? 'BBA' : key.startsWith('BCA') ? 'BCA' : key.startsWith('MCA') ? 'MCA' : DEFAULT;
  return (
    <span className="degree-icon" style={{ width: size, height: size, ...style }} aria-hidden="true">
      {paths[lookup] || paths[DEFAULT]}
    </span>
  );
}