import { Download, Linkedin, Mail } from 'lucide-react';
import { profile } from '../data/profile';
export default function Contact() {
  return (
    <section
      id="contact"
      tabIndex={-1}
      className="section section-anchor contact-section"
      aria-labelledby="contact-title"
    >
      <div className="container">
        <div className="contact-box">
          <div className="eyebrow">THE NEXT CONNECTION</div>
          <h2 id="contact-title">
            Let’s build better
            <br />
            <span>customer experiences.</span>
          </h2>
          <p>
            Marketing technology transformation. Solution architecture. Customer engagement.
            <br className="desktop-break" /> Let’s talk about the systems that bring it all
            together.
          </p>
          <div className="contact-actions">
            <a
              className="button button-primary"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={17} />
              Connect on LinkedIn
            </a>
            <a className="button button-secondary" href={`mailto:${profile.email}`}>
              <Mail size={17} />
              Send Email
            </a>
            <a className="button contact-download" href={profile.resume} download>
              <Download size={17} />
              Download Resume
            </a>
          </div>
          <a className="contact-email" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
        </div>
      </div>
    </section>
  );
}
