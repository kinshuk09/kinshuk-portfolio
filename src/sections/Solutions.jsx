import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import Icon from '../components/Icon';
import SectionHeading from '../components/SectionHeading';
import { solutions } from '../data/profile';
export default function Solutions() {
  const [open, setOpen] = useState(0);
  return (
    <section className="section solutions-section" aria-labelledby="solutions-title">
      <div className="container">
        <SectionHeading
          number="05"
          eyebrow="WHAT I SOLVE"
          title={<span id="solutions-title">Complexity in. Clarity out.</span>}
        >
          Practical capabilities shaped by implementation, integration and close collaboration.
        </SectionHeading>
        <div className="solutions-grid">
          {solutions.map((s, i) => (
            <article key={s.title} className={`solution-card ${open === i ? 'solution-open' : ''}`}>
              <button
                aria-expanded={open === i}
                aria-controls={`solution-${i}`}
                onClick={() => setOpen(open === i ? null : i)}
              >
                <div className="solution-top">
                  <span>0{i + 1}</span>
                  <Icon name={s.icon} size={24} />
                </div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <span className="solution-toggle">
                  {open === i ? 'Close approach' : 'Explore approach'}
                  {open === i ? <Minus size={17} /> : <Plus size={17} />}
                </span>
              </button>
              <div hidden={open !== i} id={`solution-${i}`} className="solution-detail">
                <p>{s.detail}</p>
                <div className="tag-list">
                  {s.tags.map((t) => (
                    <span className="tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
