import { useEffect, useRef, useState } from 'react';
import { FiArrowUpRight, FiChevronDown } from 'react-icons/fi';
import { contactChannels } from '../config/contact';

export default function ContactOptions() {
  const [open, setOpen] = useState(false);
  const container = useRef(null);
  const button = useRef(null);
  useEffect(() => {
    if (!open) return;
    const dismiss = event => {
      if (!container.current?.contains(event.target)) setOpen(false);
    };
    const escape = event => {
      if (event.key === 'Escape') { setOpen(false); button.current?.focus(); }
    };
    document.addEventListener('pointerdown', dismiss);
    document.addEventListener('keydown', escape);
    return () => {
      document.removeEventListener('pointerdown', dismiss);
      document.removeEventListener('keydown', escape);
    };
  }, [open]);
  return <div ref={container} className="contact-menu" onBlur={event => {
    if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
  }}>
    <button ref={button} className="nav-contact" aria-expanded={open} aria-controls="contact-options" onClick={() => setOpen(!open)}>Let’s talk <FiChevronDown aria-hidden="true" className={open ? 'is-open' : ''}/></button>
    {open && <nav id="contact-options" className="contact-options" aria-label="Choose a contact channel">
      <p>HOW WOULD YOU LIKE TO CONNECT?</p>
      {contactChannels.map(({ label, detail, icon: Icon, href }) => <a key={label} href={href} {...(href.startsWith('https:') ? { target: '_blank', rel: 'noreferrer' } : {})} onClick={() => setOpen(false)}>
        <span className="contact-channel-icon"><Icon aria-hidden="true"/></span>
        <span><strong>{label}</strong><small>{detail}</small></span>
        <FiArrowUpRight aria-hidden="true"/>
      </a>)}
    </nav>}
  </div>;
}
