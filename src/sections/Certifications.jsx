import { GraduationCap } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import CertificationCard from '../components/CertificationCard';
import { certifications } from '../data/profile';
export default function Certifications() {
  return (
    <section
      id="certifications"
      tabIndex={-1}
      className="section section-anchor certifications-section"
      aria-labelledby="certifications-title"
    >
      <div className="container">
        <SectionHeading
          number="07"
          eyebrow="CREDENTIALS"
          title={<span id="certifications-title">Depth, backed by discipline.</span>}
        />
        <div className="certification-grid">
          {certifications.map((cert, i) => (
            <CertificationCard cert={cert} index={i} key={cert.title} />
          ))}
        </div>
        <div className="education">
          <span className="education-icon">
            <GraduationCap size={26} />
          </span>
          <div>
            <span className="micro-label">EDUCATION</span>
            <h3>Bachelor of Technology in Information Technology</h3>
            <p>Uttar Pradesh Technical University</p>
          </div>
          <span className="education-date">2010 — 2014</span>
        </div>
      </div>
    </section>
  );
}
