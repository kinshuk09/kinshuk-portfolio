import { useState } from 'react';
import { expertise } from '../data/profile';
import TechnologyCard from '../components/TechnologyCard';
import SectionHeading from '../components/SectionHeading';
export default function Expertise() {
  const [open, setOpen] = useState('platforms');
  return (
    <section
      id="expertise"
      tabIndex={-1}
      className="section section-anchor expertise-section"
      aria-labelledby="expertise-title"
    >
      <div className="container">
        <SectionHeading
          number="03"
          eyebrow="EXPERTISE"
          title={<span id="expertise-title">The toolkit. The thinking behind it.</span>}
        >
          Platform knowledge is the starting point. Knowing how it all connects is the difference.
        </SectionHeading>
        <div className="expertise-grid">
          {expertise.map((group, i) => (
            <TechnologyCard
              key={group.id}
              group={group}
              index={i}
              open={open === group.id}
              onToggle={() => setOpen(open === group.id ? null : group.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
