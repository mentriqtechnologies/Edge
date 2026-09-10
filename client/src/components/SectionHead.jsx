export default function SectionHead({ eyebrow, title, subtitle, light = false, center = true }) {
  return (
    <div className={`section-head ${light ? 'light-on-dark' : ''} ${center ? 'center' : ''}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      {title && <h2>{title}</h2>}
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}