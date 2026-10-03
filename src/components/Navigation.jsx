import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Download, Menu, X } from 'lucide-react';
import { navigation, profile } from '../data/profile';
import useActiveSection from '../hooks/useActiveSection';
const ids = navigation.map(([id]) => id);
export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(ids);
  const toggle = useRef(null);
  const menu = useRef(null);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const keyboard = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        toggle.current?.focus();
      }
      if (e.key === 'Tab') {
        const items = [toggle.current, ...menu.current.querySelectorAll('a')];
        const first = items[0],
          last = items.at(-1);
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    const mq = window.matchMedia('(min-width: 1080px)');
    const close = () => {
      if (mq.matches) setOpen(false);
    };
    mq.addEventListener('change', close);
    document.addEventListener('keydown', keyboard);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener('keydown', keyboard);
      mq.removeEventListener('change', close);
    };
  }, [open]);
  function navigate(event, id) {
    setOpen(false);
    requestAnimationFrame(() => document.getElementById(id)?.focus({ preventScroll: true }));
  }
  return (
    <header className={`site-header ${scrolled || open ? 'is-scrolled' : ''}`}>
      <div className="nav-inner container">
        <a className="wordmark" href="#home" onClick={() => setOpen(false)}>
          kg<span>.</span>
          <span className="wordmark-name">KINSHUK GOEL</span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              className={active === id ? 'active' : ''}
              aria-current={active === id ? 'location' : undefined}
            >
              {label}
            </a>
          ))}
        </nav>
        <a className="button nav-resume" href={profile.resume} download>
          <Download size={15} /> <span>Download Resume</span>
        </a>
        <button
          ref={toggle}
          className="menu-toggle icon-button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            ref={menu}
            id="mobile-nav"
            className="mobile-nav"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            {navigation.map(([id, label], i) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => navigate(e, id)}
                aria-current={active === id ? 'location' : undefined}
              >
                <span>0{i + 1}</span>
                {label}
              </a>
            ))}
            <a href={profile.resume} download onClick={() => setOpen(false)}>
              <Download size={20} />
              Download Resume
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
