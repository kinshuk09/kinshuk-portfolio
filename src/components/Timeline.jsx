import { experiences } from '../data/profile';
import useTabKeys from '../hooks/useTabKeys';
export default function Timeline({ selected, onSelect }) {
  const keys = useTabKeys(experiences, selected, onSelect, 'vertical');
  return (
    <div
      className="career-tabs"
      role="tablist"
      aria-label="Select an employer"
      aria-orientation="vertical"
      onKeyDown={keys}
    >
      {experiences.map((e) => (
        <button
          key={e.id}
          role="tab"
          id={`career-tab-${e.id}`}
          aria-controls="career-panel"
          aria-selected={selected === e.id}
          tabIndex={selected === e.id ? 0 : -1}
          onClick={() => onSelect(e.id)}
          className={`career-tab ${selected === e.id ? 'selected' : ''}`}
        >
          <span className="timeline-dot" />
          <span className="career-period">{e.period}</span>
          <strong>{e.company}</strong>
          <span className="career-role">{e.role}</span>
          {e.id === 'wipro' && <span className="current-label">CURRENT</span>}
        </button>
      ))}
    </div>
  );
}
