import { Building2, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
export default function ExperienceCard({ experience }) {
  const e = experience;
  return (
    <motion.article
      key={e.id}
      className={`experience-card experience-${e.id}`}
      initial={{ opacity: 1, y: 4 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="experience-card-top">
        <span className={`company-mark mark-${e.id}`} aria-hidden="true">
          {e.monogram}
        </span>
        <div>
          <h3>{e.fullCompany || e.company}</h3>
          <p>{e.role}</p>
        </div>
        {e.id === 'adobe' && <span className="adobe-label">ENTERPRISE EXPERIENCE</span>}
      </div>
      <div className="experience-meta">
        <span>
          <Building2 size={13} />
          {e.date}
        </span>
        <span>
          <MapPin size={13} />
          {e.context}
        </span>
      </div>
      <div className="experience-story">
        <div className="eyebrow">{e.theme}</div>
        <p className="experience-intro">{e.intro}</p>
        <ul>
          {e.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      </div>
      <div className="tag-list">
        {e.tags.map((t) => (
          <span className="tag" key={t}>
            {t}
          </span>
        ))}
      </div>
    </motion.article>
  );
}
