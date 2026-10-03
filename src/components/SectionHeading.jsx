export default function SectionHeading({ number, eyebrow, title, children, className = '' }) {
  return (
    <div className={`section-heading ${className}`}>
      <div className="eyebrow">
        <span className="section-number">{number}</span>
        {eyebrow}
      </div>
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </div>
  );
}
