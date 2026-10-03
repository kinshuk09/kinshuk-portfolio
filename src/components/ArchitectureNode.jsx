import Icon from './Icon';
export default function ArchitectureNode({ title, subtitle, icon, index, active = false }) {
  return (
    <div className={`architecture-node ${active ? 'node-active' : ''}`}>
      <div className="node-top">
        <Icon name={icon} size={21} />
        <span>{String(index + 1).padStart(2, '0')}</span>
      </div>
      <strong>{title}</strong>
      <span className="node-subtitle">{subtitle}</span>
    </div>
  );
}
