import { useEffect, useState } from 'react';
export default function useActiveSection(ids) {
  const [active, setActive] = useState('home');
  useEffect(() => {
    const update = () => {
      let current = ids[0];
      for (const id of ids)
        if (document.getElementById(id)?.getBoundingClientRect().top <= 160) current = id;
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 30)
        current = ids.at(-1);
      setActive(current);
    };
    let frame = 0;
    const onScroll = () => {
      if (!frame)
        frame = requestAnimationFrame(() => {
          update();
          frame = 0;
        });
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(frame);
    };
  }, [ids]);
  return active;
}
