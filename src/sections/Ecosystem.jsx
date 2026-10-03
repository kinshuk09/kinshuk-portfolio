import { useState } from 'react';
import { ChevronRight, Info, Plus } from 'lucide-react';
import Icon from '../components/Icon';
import SectionHeading from '../components/SectionHeading';
import { lifecycle } from '../data/architecture';
export default function Ecosystem() {
  const [selected, setSelected] = useState(1);
  const [hover, setHover] = useState(null);
  const active = hover ?? selected;
  const item = lifecycle[active];
  return (
    <section id="ecosystem" className="section ecosystem-section" aria-labelledby="ecosystem-title">
      <div className="container">
        <div className="heading-row">
          <SectionHeading
            number="01"
            eyebrow="THE CONNECTED ECOSYSTEM"
            title={
              <span id="ecosystem-title">
                From customer data
                <br />
                to customer experience.
              </span>
            }
          >
            Great engagement is a system. Every connection matters.
          </SectionHeading>
          <div className="interaction-hint">
            <span className="hint-symbol">
              <Plus size={13} />
            </span>
            Explore each layer
          </div>
        </div>
        <div className="ecosystem-board" onMouseLeave={() => setHover(null)}>
          <div className="board-toolbar">
            <span>
              <span className="tiny-square" /> CUSTOMER ENGAGEMENT ARCHITECTURE
            </span>
            <span>06 CONNECTED LAYERS</span>
          </div>
          <div className="lifecycle-grid">
            {lifecycle.map((stage, i) => (
              <div
                className={`lifecycle-stage ${active === i ? 'stage-active' : ''} ${Math.abs(active - i) === 1 ? 'stage-connected' : ''}`}
                key={stage.id}
              >
                <button
                  className="stage-button"
                  onMouseEnter={() => setHover(i)}
                  onFocus={() => setHover(i)}
                  onBlur={() => setHover(null)}
                  onClick={() => {
                    setSelected(i);
                    setHover(null);
                  }}
                  aria-pressed={selected === i}
                  aria-controls="lifecycle-detail"
                >
                  <span className="stage-meta">
                    <span>0{i + 1}</span>
                    <Icon name={stage.icon} size={20} />
                  </span>
                  <strong>{stage.title}</strong>
                  <span className="stage-subtitle">{stage.short}</span>
                  <span className="stage-mobile-toggle" aria-hidden="true">
                    {active === i ? '•' : '›'}
                  </span>
                </button>
                <ul className="stage-technologies">
                  {stage.technologies.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                {i < lifecycle.length - 1 && (
                  <span
                    className={`stage-connector ${active === i || active === i + 1 ? 'connector-active' : ''}`}
                    aria-hidden="true"
                  >
                    <ChevronRight size={15} />
                  </span>
                )}
              </div>
            ))}
          </div>
          <div className="lifecycle-detail" id="lifecycle-detail">
            <div className="detail-icon">
              <Icon name={item.icon} size={22} />
            </div>
            <div>
              <p className="micro-label">
                LAYER 0{active + 1} / {item.title.toUpperCase()}
              </p>
              <p>{item.detail}</p>
              <span className="detail-focus">{item.focus}</span>
            </div>
          </div>
          <div className="board-footnote">
            <Info size={13} />
            <p>
              Illustrative architecture patterns based on hands-on experience. Platforms represent
              alternatives, not one client deployment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
