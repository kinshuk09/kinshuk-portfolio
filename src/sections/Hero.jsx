import { useRef } from 'react';
import { motion, useReducedMotion, useMotionValue, useSpring } from 'framer-motion';
import {
  Download,
  Linkedin,
  Mail,
  MapPin,
  Plus,
  Database,
  Workflow,
  Radio,
  ChevronDown,
} from 'lucide-react';
import { profile } from '../data/profile';
export default function Hero() {
  const reduced = useReducedMotion();
  const ref = useRef(null);
  const x = useMotionValue(0),
    y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 80, damping: 25 }),
    sy = useSpring(y, { stiffness: 80, damping: 25 });
  function move(e) {
    if (reduced || e.pointerType !== 'mouse') return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - r.left - r.width / 2) * 0.017);
    y.set((e.clientY - r.top - r.height / 2) * 0.017);
  }
  return (
    <section id="home" tabIndex={-1} className="hero section-anchor" aria-labelledby="hero-title">
      <div className="hero-grid" aria-hidden="true" />
      <div className="container hero-layout">
        <div className="hero-copy">
          <div className="eyebrow hero-eyebrow">
            <span className="small-line" />
            MARKETING TECHNOLOGY CONSULTANT
          </div>
          <p className="hero-name">KINSHUK GOEL</p>
          <h1 id="hero-title">
            Designing the systems behind <span>intelligent customer engagement.</span>
          </h1>
          <p className="hero-summary">
            I connect customer data, marketing platforms and engineering to turn complex
            requirements into meaningful customer experiences.
          </p>
          <p className="hero-specialties">
            Solution Design <span>•</span> Customer Engagement <span>•</span> Marketing Automation
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#architecture">
              Explore My Work
            </a>
            <a className="button button-secondary" href={profile.resume} download>
              <Download size={17} />
              Download Resume
            </a>
          </div>
          <div className="hero-socials">
            <a
              className="icon-button"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="Connect with Kinshuk on LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a className="icon-button" href={`mailto:${profile.email}`} aria-label="Email Kinshuk">
              <Mail size={19} />
            </a>
            <span className="social-divider" />
            <span className="location">
              <MapPin size={14} />
              {profile.location}
            </span>
          </div>
        </div>
        <div
          ref={ref}
          className="hero-visual"
          onPointerMove={move}
          onPointerLeave={() => {
            x.set(0);
            y.set(0);
          }}
        >
          <div className="portrait-orbit orbit-one" aria-hidden="true" />
          <div className="portrait-orbit orbit-two" aria-hidden="true" />
          <div className="portrait-coordinate" aria-hidden="true">
            01 / THE HUMAN BEHIND THE SYSTEMS
          </div>
          <Plus className="portrait-cross cross-one" size={16} aria-hidden="true" />
          <Plus className="portrait-cross cross-two" size={16} aria-hidden="true" />
          <div className="portrait-wrap">
            <img
              className="portrait"
              src="/kinshuk-800.webp"
              srcSet="/kinshuk-480.webp 480w, /kinshuk-800.webp 800w, /kinshuk-1200.webp 1200w"
              sizes="(max-width: 680px) 90vw, (max-width: 1080px) 55vw, 480px"
              width="800"
              height="1092"
              alt="Kinshuk Goel, Marketing Technology Consultant"
              fetchPriority="high"
              decoding="async"
            />
            <div className="portrait-shade" />
          </div>
          <motion.div className="portrait-label label-data" style={{ x: sx, y: sy }}>
            <span className="mini-icon">
              <Database size={16} />
            </span>
            <div>
              <span className="micro-label">IT STARTS WITH</span>
              <strong>Customer data</strong>
            </div>
          </motion.div>
          <motion.div className="portrait-label label-journey" style={{ x: sx, y: sy }}>
            <span className="mini-icon violet">
              <Workflow size={16} />
            </span>
            <div>
              <span className="micro-label">CONNECTED THROUGH</span>
              <strong>Intelligent journeys</strong>
            </div>
          </motion.div>
          <div className="portrait-caption">
            <span className="caption-icon">
              <Radio size={18} />
            </span>
            <div>
              <span className="micro-label">DESIGNED FOR</span>
              <strong>Better customer experiences.</strong>
            </div>
          </div>
        </div>
      </div>
      <div className="container hero-bottom">
        <p>
          DATA <span>—</span> PLATFORMS <span>—</span> EXPERIENCES
        </p>
        <a href="#ecosystem" aria-label="Scroll to the customer engagement ecosystem">
          <span>EXPLORE THE CONNECTIONS</span>
          <ChevronDown size={16} />
        </a>
      </div>
    </section>
  );
}
