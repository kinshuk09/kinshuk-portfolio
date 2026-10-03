import { useState } from 'react';
import { motion } from 'framer-motion';
import { Info, ChevronRight, CircleDashed, SlidersHorizontal } from 'lucide-react';
import { scenarios } from '../data/architecture';
import Icon from '../components/Icon';
import ArchitectureNode from '../components/ArchitectureNode';
import SectionHeading from '../components/SectionHeading';
import useTabKeys from '../hooks/useTabKeys';
export default function ArchitectMode() {
  const [selected, setSelected] = useState('real-time');
  const scenario = scenarios.find((s) => s.id === selected);
  const keys = useTabKeys(scenarios, selected, setSelected);
  return (
    <section
      id="architecture"
      tabIndex={-1}
      className="section section-anchor architect-section"
      aria-labelledby="architect-title"
    >
      <div className="container">
        <div className="heading-row">
          <SectionHeading
            number="06"
            eyebrow="INTERACTIVE EXPLORATION"
            title={
              <span id="architect-title">
                Think in systems.
                <br />
                <span className="accent-text">Enter Architect Mode.</span>
              </span>
            }
          >
            Choose a challenge. Explore the connections, decisions and dependencies behind the
            experience.
          </SectionHeading>
          <span className="architect-mode-badge">
            <SlidersHorizontal size={15} />
            ARCHITECT MODE
          </span>
        </div>
        <div className="architect-console">
          <div className="console-topbar">
            <span className="console-title">
              <span className="console-dots" aria-hidden="true">
                <i />
                <i />
                <i />
              </span>
              THE SOLUTION WORKSPACE
            </span>
            <span className="console-version">PATTERN EXPLORER / 01</span>
          </div>
          <div
            className="scenario-tabs"
            role="tablist"
            aria-label="Architecture scenario"
            onKeyDown={keys}
          >
            {scenarios.map((s) => (
              <button
                role="tab"
                key={s.id}
                id={`scenario-tab-${s.id}`}
                aria-selected={selected === s.id}
                aria-controls="scenario-panel"
                tabIndex={selected === s.id ? 0 : -1}
                onClick={() => setSelected(s.id)}
              >
                <Icon name={s.icon} size={17} />
                <span>{s.title}</span>
              </button>
            ))}
          </div>
          <div
            id="scenario-panel"
            aria-labelledby={`scenario-tab-${selected}`}
            role="tabpanel"
            tabIndex={0}
            className="scenario-panel"
          >
            <div className="scenario-description">
              <div>
                <div className="eyebrow">
                  <CircleDashed size={13} />
                  {scenario.title}
                </div>
                <h3>{scenario.headline}</h3>
                <p>{scenario.description}</p>
              </div>
              <span className="scenario-counter">
                {String(scenarios.findIndex((s) => s.id === selected) + 1).padStart(2, '0')}
                <small> / 05</small>
              </span>
            </div>
            <motion.ol
              key={scenario.id}
              className={`scenario-flow nodes-${scenario.nodes.length}`}
              initial={{ opacity: 1, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              aria-label={`${scenario.title} architecture steps`}
            >
              {scenario.nodes.map(([title, subtitle, icon], i) => (
                <li key={title}>
                  <ArchitectureNode
                    title={title}
                    subtitle={subtitle}
                    icon={icon}
                    index={i}
                    active={i === 2}
                  />
                  {i < scenario.nodes.length - 1 && (
                    <span className="scenario-connection" aria-hidden="true">
                      <ChevronRight size={15} />
                    </span>
                  )}
                </li>
              ))}
            </motion.ol>
            <div className="pattern-note">
              <Info size={14} />
              <p>{scenario.note}</p>
            </div>
            <div className="design-considerations">
              {scenario.considerations.map(([title, text], i) => (
                <div key={title}>
                  <span className="consideration-number">0{i + 1}</span>
                  <h4>{title}</h4>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="console-footer">
            <span className="tiny-square" />
            ILLUSTRATIVE CAPABILITY PATTERNS · BASED ON RESUME EXPERIENCE
          </div>
        </div>
      </div>
    </section>
  );
}
