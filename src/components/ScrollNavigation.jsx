/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from 'react';

export default function ScrollNavigation({ items }) {
  const [pastHero, setPastHero] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');
  const panel = useRef(null);
  const handle = useRef(null);

  useEffect(() => {
    const heroObserver = new IntersectionObserver(([entry]) => {
      const past = entry.boundingClientRect.bottom <= 0;
      setPastHero(past);
      if (!past) setOpen(false);
    }, { threshold: 0 });
    heroObserver.observe(document.getElementById('home'));
    const sectionObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) setActive(entry.target.id); });
    }, { rootMargin: '-15% 0px -60% 0px', threshold: 0 });
    items.forEach(([id]) => {
      const section = document.getElementById(id);
      if (section) sectionObserver.observe(section);
    });
    const dismiss = event => { if (!panel.current?.contains(event.target)) setOpen(false); };
    window.addEventListener('pointerdown', dismiss);
    return () => {
      heroObserver.disconnect();
      sectionObserver.disconnect();
      window.removeEventListener('pointerdown', dismiss);
    };
  }, [items]);

  const close = () => {
    setOpen(false);
    if (panel.current?.querySelector('nav')?.contains(document.activeElement)) document.activeElement.blur();
  };

  if (!pastHero) return null;
  return <div ref={panel} className={`section-drawer ${open ? 'is-open' : ''}`}
    onPointerEnter={event => { if (event.pointerType === 'mouse') setOpen(true); }}
    onPointerLeave={event => { if (event.pointerType === 'mouse' && !panel.current?.contains(document.activeElement)) setOpen(false); }}
    onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false); }}
    onKeyDown={event => { if (event.key === 'Escape') { close(); handle.current?.focus(); } }}>
    <nav id="section-drawer-links" aria-label="Section navigation" {...(!open ? { inert: '' } : {})} aria-hidden={!open}>
      {items.map(([id, label]) => <a key={id} href={`#${id}`} aria-current={active === id ? 'location' : undefined} onClick={close}>{label}</a>)}
    </nav>
    <button ref={handle} className="section-drawer-handle" aria-label={open ? 'Close section navigation' : 'Open section navigation'} aria-expanded={open} aria-controls="section-drawer-links"
      onClick={() => setOpen(!open)}>
      <span/>
    </button>
  </div>;
}
