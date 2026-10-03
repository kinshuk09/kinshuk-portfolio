import SectionHeading from '../components/SectionHeading';
import Icon from '../components/Icon';
export default function About() {
  return (
    <section className="section about-section" aria-labelledby="about-title">
      <div className="container about-layout">
        <div>
          <SectionHeading
            number="02"
            eyebrow="THE PERSPECTIVE"
            title={
              <span id="about-title">
                Marketing fluency.
                <br />
                Engineering depth.
              </span>
            }
          />
          <p className="about-lead">
            The most useful solutions live at the intersection of{' '}
            <span>marketing, data, engineering and customer experience.</span>
          </p>
          <p className="body-copy">
            I bring 11+ years across enterprise technology and investment banking, including 6+
            years in campaign automation. My work spans solution design, hands-on platform
            engineering, infrastructure and integration.
          </p>
          <p className="body-copy">
            From translating business requirements to working with client, data and engineering
            teams, I connect the big picture with the details that make it work.
          </p>
          <div className="experience-facts">
            <div>
              <strong>
                11<span>+</span>
              </strong>
              <p>years in enterprise technology</p>
            </div>
            <div>
              <strong>
                6<span>+</span>
              </strong>
              <p>years in campaign automation</p>
            </div>
          </div>
        </div>
        <div
          className="intersection-diagram"
          aria-label="Marketing, data, engineering, and customer experience come together in solution design"
        >
          <div className="intersection-lines" aria-hidden="true" />
          <div className="intersection-center">
            <Icon name="Network" size={26} />
            <span>
              SOLUTION
              <br />
              DESIGN
            </span>
          </div>
          {[
            ['marketing', 'Marketing', 'Users', 'Business goals & audiences'],
            ['data', 'Data', 'Database', 'Context & customer signals'],
            ['engineering', 'Engineering', 'Code2', 'Platforms & integrations'],
            ['experience', 'Experience', 'Radio', 'Connected customer journeys'],
          ].map(([id, title, icon, sub]) => (
            <div className={`intersection-quadrant quadrant-${id}`} key={id}>
              <Icon name={icon} size={24} />
              <h3>{title}</h3>
              <p>{sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
