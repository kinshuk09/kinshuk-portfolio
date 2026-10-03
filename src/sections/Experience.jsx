import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import Timeline from '../components/Timeline';
import ExperienceCard from '../components/ExperienceCard';
import { experiences } from '../data/profile';
const milestones = [
  ['2015', 'Enterprise applications', 'genpact'],
  ['2019', 'Advertising technology', 'taboola'],
  ['2020', 'Adobe / Marketing technology', 'adobe'],
  ['2025+', 'Architecture & platform transformation', 'wipro'],
];
export default function Experience() {
  const [selected, setSelected] = useState('adobe');
  const current = experiences.find((e) => e.id === selected);
  return (
    <section
      id="experience"
      tabIndex={-1}
      className="section section-anchor experience-section"
      aria-labelledby="experience-title"
    >
      <div className="container">
        <div className="heading-row">
          <SectionHeading
            number="04"
            eyebrow="THE CAREER JOURNEY"
            title={<span id="experience-title">Built through experience.</span>}
          >
            A progression from enterprise applications to the architecture of customer engagement.
          </SectionHeading>
          <span className="section-side-label">2015 — PRESENT</span>
        </div>
        <div className="experience-layout">
          <Timeline selected={selected} onSelect={setSelected} />
          <div
            role="tabpanel"
            tabIndex={0}
            id="career-panel"
            aria-labelledby={`career-tab-${selected}`}
            className="experience-panel"
          >
            <ExperienceCard experience={current} />
          </div>
        </div>
        <motion.div
          className="career-progression"
          initial={false}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="micro-label">THE EVOLUTION</p>
          <div className="progression-track">
            {milestones.map(([year, label, id]) => (
              <button
                className={selected === id ? 'milestone milestone-active' : 'milestone'}
                key={year}
                onClick={() => {
                  setSelected(id);
                  document.getElementById('experience').scrollIntoView({
                    behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
                      ? 'instant'
                      : 'smooth',
                  });
                }}
              >
                <span className="milestone-year">{year}</span>
                <span className="milestone-point" />
                <span className="milestone-label">{label}</span>
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
