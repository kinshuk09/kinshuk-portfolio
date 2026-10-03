import { useEffect } from 'react';
export default function useScrollReveal() {
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (media.matches || !('IntersectionObserver' in window)) return;
    const items = [...document.querySelectorAll('.section > .container, .career-progression')];
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries)
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
      },
      { threshold: 0.06 },
    );
    for (const item of items) {
      if (item.getBoundingClientRect().top > window.innerHeight) {
        item.classList.add('reveal-ready');
        observer.observe(item);
      }
    }
    const revealAll = () => {
      if (media.matches) {
        items.forEach((item) => item.classList.add('revealed'));
        observer.disconnect();
      }
    };
    media.addEventListener('change', revealAll);
    return () => {
      observer.disconnect();
      media.removeEventListener('change', revealAll);
      items.forEach((item) => item.classList.remove('reveal-ready', 'revealed'));
    };
  }, []);
}
