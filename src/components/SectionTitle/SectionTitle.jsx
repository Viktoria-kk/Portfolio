import './SectionTitle.scss';

function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="section-title reveal">
      {eyebrow && <span>{eyebrow}</span>}
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}

export default SectionTitle;
