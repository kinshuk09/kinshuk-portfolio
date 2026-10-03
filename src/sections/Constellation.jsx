import { useState } from 'react';
import Icon from '../components/Icon';
const techs = [
  ['ACC', 'Adobe Campaign Classic'],
  ['AJO', 'Adobe Journey Optimizer'],
  ['Braze', 'Braze'],
  ['Iterable', 'Iterable'],
  ['Fabric', 'Microsoft Fabric'],
  ['Databricks', 'Databricks'],
  ['AWS', 'Amazon Web Services'],
  ['Hightouch', 'Hightouch'],
  ['REST', 'REST APIs'],
  ['Webhooks', 'Webhooks'],
  ['JavaScript', 'JavaScript'],
  ['SQL', 'SQL'],
  ['SDKs', 'Mobile SDK integration'],
];
export default function Constellation() {
  const [active, setActive] = useState(null);
  return (
    <section className="constellation-section" aria-label="Technology constellation">
      <div className="container">
        <div className="constellation-intro">
          <p className="eyebrow">MANY PLATFORMS. ONE CONNECTED PERSPECTIVE.</p>
        </div>
        <div className="constellation">
          <div className="constellation-rings" aria-hidden="true">
            <i />
            <i />
            <i />
          </div>
          <svg
            className="constellation-lines"
            viewBox="0 0 1100 410"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {techs.map(([name], i) => {
              const a = (i / techs.length) * 2 * Math.PI;
              return (
                <line
                  className={active === i ? 'line-active' : ''}
                  key={name}
                  x1="550"
                  y1="205"
                  x2={550 + 450 * Math.cos(a)}
                  y2={205 + 165 * Math.sin(a)}
                />
              );
            })}
          </svg>
          <div className="constellation-core">
            <Icon name="Network" size={30} />
            <h2>
              Marketing Technology
              <br />
              Architecture
            </h2>
            <p>{active === null ? 'The connections are the expertise.' : techs[active][1]}</p>
          </div>
          <div className="constellation-nodes">
            {techs.map(([name, full], i) => {
              const a = (i / techs.length) * 2 * Math.PI;
              return (
                <button
                  key={name}
                  style={{
                    '--x': `${50 + 40.9 * Math.cos(a)}%`,
                    '--y': `${50 + 40.2 * Math.sin(a)}%`,
                    '--delay': `${i * 0.3}s`,
                  }}
                  className={`constellation-node ${active === i ? 'constellation-active' : ''}`}
                  onPointerEnter={() => setActive(i)}
                  onPointerLeave={() => setActive(null)}
                  onFocus={() => setActive(i)}
                  onBlur={() => setActive(null)}
                  onClick={() => setActive(i)}
                  aria-label={`${name}: ${full}`}
                >
                  {name}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
