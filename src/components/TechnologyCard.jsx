import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import Icon from './Icon';
export default function TechnologyCard({ group, index, open, onToggle }) {
  return (
    <motion.article
      className={`technology-card ${open ? 'is-open' : ''}`}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <button onClick={onToggle} aria-expanded={open} aria-controls={`technologies-${group.id}`}>
        <span className="capability-top">
          <Icon name={group.icon} size={25} />
          <span>0{index + 1}</span>
        </span>
        <h3>{group.title}</h3>
        <p>{group.subtitle}</p>
        <span className="capability-bottom">
          <span>{open ? 'Close capabilities' : 'Explore capabilities'}</span>
          {open ? <Minus size={17} /> : <Plus size={17} />}
        </span>
      </button>
      <div id={`technologies-${group.id}`} hidden={!open} className="capability-expanded">
        <p>{group.description}</p>
        <div className="tag-list">
          {group.tags.map((tag) => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
