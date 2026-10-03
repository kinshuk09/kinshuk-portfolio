import Icon from './Icon';
export default function CertificationCard({ cert, index }) {
  return (
    <article className={`certification-card ${index === 0 ? 'master-card' : ''}`}>
      <div className="cert-top">
        <span className="cert-symbol">
          <Icon name={cert.icon} size={23} />
        </span>
        <span>{cert.issuer.toUpperCase()}</span>
      </div>
      <p className="cert-level">{cert.level}</p>
      <h3>{cert.title}</h3>
      <div className="cert-footer">
        <span className="cert-line" />
        <span>{cert.issuer === 'Adobe' ? 'ADOBE CERTIFICATION' : 'AWS CERTIFICATION'}</span>
      </div>
    </article>
  );
}
