import { useEffect, useRef, useState } from 'react';
import { FiArrowUpRight, FiArrowDown, FiArrowRight, FiDownload, FiGithub, FiLinkedin, FiMenu, FiX, FiLayers, FiCloud, FiTerminal, FiActivity } from 'react-icons/fi';
import { projects } from './config/projects';
import { experiences } from './config/experience';
import { toolsAndPlatforms } from './config/skills';
import TechnologyTags from './components/TechnologyTags';
import { certifications } from './config/certifications';
import { siteConfig } from './config/site';
import { SystemPlayground, ProjectArtwork, MotionEffects } from './components/InteractiveVisuals';

const navigation = [['projects', 'Work'], ['skills', 'Expertise'], ['experience', 'Experience'], ['contact', 'Contact']];
const expertise = [
  [FiCloud, 'Cloud infrastructure', 'Resilient by architecture.', 'Scalable AWS infrastructure, multi-region deployments, and disaster recovery built for real-world demands.', ['AWS', 'GCP', 'Terraform']],
  [FiTerminal, 'DevOps & automation', 'Less repetition. More momentum.', 'From infrastructure as code to streamlined CI/CD, turning complex operations into repeatable workflows.', ['GitLab', 'Ansible', 'Python']],
  [FiActivity, 'Site reliability', 'Confidence in every release.', 'Observability, incident response, and performance optimization that keep critical systems running.', ['Datadog', 'Kubernetes', 'Docker']],
];
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState('All');
  const [expanded, setExpanded] = useState(false);
  const [selected, setSelected] = useState(null);
  const dialog = useRef(null);
  const cvUrl = `${import.meta.env.BASE_URL}${siteConfig.cvPath}`;
  const filtered = projects.filter(p => filter === 'All' || p.category === filter);
  useEffect(() => {
    if (selected) dialog.current?.showModal();
    else dialog.current?.close();
    const previousOverflow = document.body.style.overflow;
    if (selected) document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = previousOverflow; };
  }, [selected]);
  return <>
    <MotionEffects/>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header"><a className="wordmark" href="#home" aria-label="Ashan Pathiranage home">ashan<span>.</span></a>
      <nav className={menuOpen ? 'navigation is-open' : 'navigation'} aria-label="Main navigation">{navigation.map(([id, label]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>)}</nav>
      <a className="nav-contact" href={`mailto:${siteConfig.email}`}>Let’s talk <FiArrowUpRight/></a>
      <button className="menu-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <FiX/> : <FiMenu/>}</button>
    </header>
    <main id="main">
      <section id="home" className="hero container">
        <div className="hero-copy"><div className="eyebrow"><span className="status-dot"/> CLOUD ENGINEER. SYSTEMS THINKER. BUILDER.</div>
          <div className="hero-kicker">A LITTLE CURIOSITY. A LOT OF POSSIBILITY.</div><h1>I make complex<br/>systems feel<br/><span className="hero-gradient">effortless<svg viewBox="0 0 410 26" aria-hidden="true"><path d="M4 19 Q160 -5 400 12"/></svg></span><span className="hero-period">.</span></h1>
          <p className="intro">Hi, I’m <strong>Ashan Pathiranage</strong> <span className="wave">↗</span></p>
          <p className="hero-description">Site Reliability Engineer & Associate Team Lead.<br className="desktop-break"/> I build cloud infrastructure that scales, automate what slows us down, and keep the systems that matter running.</p>
          <div className="hero-actions"><a className="button primary" href="#projects">Explore my work <FiArrowUpRight/></a><a className="text-link" href={cvUrl} download>Download CV <FiDownload/></a></div>
          <div className="hero-meta"><span>BASED IN COLOMBO, SRI LANKA</span><span className="meta-line"/><a href="https://github.com/ashankaushanka96" target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub/></a><a href={siteConfig.linkedInUrl} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin/></a></div>
        </div><SystemPlayground/>
        <a className="scroll-cue" href="#impact"><FiArrowDown/> A little less downtime. A lot more possibility.</a>
      </section>
      <div className="ticker" aria-hidden="true"><div>{[0,1].map(i => <span key={i}>CLOUD NATIVE <b><svg viewBox="0 0 100 100" aria-hidden="true"><path d="M50 5v90M5 50h90M18 18l64 64M18 82l64-64" fill="none" stroke="currentColor" strokeWidth="14"/></svg></b> ALWAYS OBSERVING <b><svg viewBox="0 0 100 100" aria-hidden="true"><path d="M50 5v90M5 50h90M18 18l64 64M18 82l64-64" fill="none" stroke="currentColor" strokeWidth="14"/></svg></b> BUILT TO SCALE <b><svg viewBox="0 0 100 100" aria-hidden="true"><path d="M50 5v90M5 50h90M18 18l64 64M18 82l64-64" fill="none" stroke="currentColor" strokeWidth="14"/></svg></b> HUMAN AT HEART <b><svg viewBox="0 0 100 100" aria-hidden="true"><path d="M50 5v90M5 50h90M18 18l64 64M18 82l64-64" fill="none" stroke="currentColor" strokeWidth="14"/></svg></b> </span>)}</div></div><section id="impact" className="impact container" aria-label="Career impact">{[['5+', 'Years building reliable systems'], ['99.9%', 'Infrastructure availability'], ['300+', 'Servers managed'], ['4', 'AWS regions supported']].map(([value, label]) => <div key={value}><strong>{value}<span>↗</span></strong><p>{label}</p></div>)}</section>
      <section id="projects" className="section container"><div className="section-heading"><div><div className="eyebrow">01 / SELECTED WORK</div><h2>Less theory.<br/><span>More <em>ship it.</em></span></h2></div><p>A selection of infrastructure, automation, and software projects that turn operational challenges into better systems.</p></div>
        <div className="filter-row" aria-label="Filter projects">{['All', 'Cloud', 'DevOps', 'Monitoring', 'Automation', 'Full-Stack', 'AI/ML'].map(category => <button key={category} className={filter === category ? 'filter active' : 'filter'} aria-pressed={filter === category} onClick={() => {setFilter(category); setExpanded(false);}}>{category === 'All' ? 'All projects' : category}</button>)}</div>
        <div className="project-grid">{(expanded ? filtered : filtered.slice(0, 4)).map((project) => <button className="project-card" aria-label={`Explore ${project.title}`} key={project.title} onClick={() => setSelected(project)}><div className="project-image"><ProjectArtwork project={project}/><span className="project-open"><FiArrowUpRight/></span>{project.status === 'In Progress' && <span className="progress-label">In progress</span>}</div><div className="project-info"><span className="eyebrow">{project.category}</span><h3>{project.title.replace(' (Ongoing)', '')}</h3><p>{project.short_description}</p></div></button>)}</div>
        {filtered.length > 4 && <div className="center"><button className="button secondary" onClick={() => setExpanded(!expanded)}>{expanded ? 'Show selected projects' : `View all ${filtered.length} projects`} <FiArrowRight/></button></div>}
      </section>
      <section id="skills" className="expertise-section"><div className="container section"><div className="section-heading"><div><div className="eyebrow">02 / THE TOOLKIT</div><h2>Complex challenges.<br/><span>Practical solutions.</span></h2></div><p>Deep infrastructure experience, a builder’s mindset, and the right tools for the job.</p></div><div className="expertise-grid">{expertise.map(([Icon, title, subtitle, description, tags]) => <article className="expertise-card" key={title}><Icon className="expertise-icon"/><h3>{title}</h3><h4>{subtitle}</h4><p>{description}</p><TechnologyTags technologies={tags}/></article>)}</div><div className="tool-strip">{toolsAndPlatforms.map(tool => <div key={tool.title}><img src={tool.image} alt="" loading="lazy"/><span>{tool.title}</span></div>)}</div></div></section>
      <section id="experience" className="section container"><div className="section-heading"><div><div className="eyebrow">03 / THE JOURNEY</div><h2>Growing systems.<br/><span>Growing with them.</span></h2></div><p>From engineering foundations to leading SRE initiatives. A journey built on curiosity and continuous improvement.</p></div><div className="timeline">{experiences.map((experience, index) => <article className="experience-row" key={experience.role}><div className="experience-date"><span>{experience.duration}</span>{index === 0 && <span className="current-label"><span className="status-dot"/> CURRENT ROLE</span>}</div><div className="experience-content"><span className="company">{experience.company} <span> / {experience.location}</span></span><h3>{experience.role}</h3><p>{experience.responsibilities[0]}</p><details><summary>Role details <FiArrowDown/></summary><ul>{experience.responsibilities.slice(1).map(item => <li key={item}>{item}</li>)}</ul></details><TechnologyTags technologies={experience.technologies}/></div><span className="experience-number">0{index + 1}</span></article>)}</div></section>
      <section id="certifications" className="certification-section container"><div className="cert-heading"><div className="eyebrow">ALWAYS LEARNING</div><h2>Backed by knowledge.<br/><span>Proven in practice.</span></h2></div><div className="certifications">{certifications.map(cert => <a href={cert.certLink} target="_blank" rel="noreferrer" key={cert.title}><img src={cert.logo} alt="" loading="lazy"/><div><span>{cert.issuer}</span><h3>{cert.title}</h3></div><FiArrowUpRight/></a>)}</div></section>
      <section id="contact" className="contact-section container"><div className="eyebrow"><span className="status-dot"/> GOOD SYSTEMS START WITH A CONVERSATION</div><h2>Your next big thing.<br/><span>Let’s make it happen.</span><FiArrowUpRight/></h2><div className="contact-bottom"><a className="contact-email" href={`mailto:${siteConfig.email}`}>{siteConfig.email} <FiArrowUpRight/></a><a className="text-link" href={cvUrl} download>Get my resume <FiDownload/></a></div></section>
    </main><footer className="site-footer container"><a className="wordmark" href="#home">ashan<span>.</span></a><span>© {new Date().getFullYear()} Ashan Pathiranage</span><div><a href="https://github.com/ashankaushanka96" target="_blank" rel="noreferrer">GitHub <FiArrowUpRight/></a><a href={siteConfig.linkedInUrl} target="_blank" rel="noreferrer">LinkedIn <FiArrowUpRight/></a><a href="#home">Back to top ↑</a></div></footer>
    <dialog aria-labelledby="project-dialog-title" ref={dialog} className="project-dialog" onClose={() => setSelected(null)} onClick={event => {if (event.target === dialog.current) setSelected(null);}}>
      {selected && <div className="dialog-shell">
        <header className="dialog-toolbar"><span className="dialog-toolbar-label"><FiLayers/> PROJECT EXPLORER</span><button className="dialog-close" aria-label="Close project details" onClick={() => setSelected(null)}><FiX/></button></header>
        <div className="dialog-content">
          <div className="dialog-meta"><span className="dialog-category">{selected.category}</span><span className={`dialog-status ${selected.status === 'In Progress' ? 'is-progress' : ''}`}><span className="status-dot"/>{selected.status}</span></div>
          <h2 id="project-dialog-title">{selected.title.replace(' (Ongoing)', '')}</h2>
          <p className="dialog-summary">{selected.short_description}</p>
          <div className="dialog-section-heading"><span className="eyebrow">UNDER THE HOOD</span><h3>What went into it</h3></div>
          <ol className="dialog-features">{selected.description.map((item,index) => <li key={item}><span className="feature-index">{String(index + 1).padStart(2, '0')}</span><p>{item}</p></li>)}</ol>
        </div>
        <footer className="dialog-footer"><span>Explore the work <FiArrowUpRight/></span><div>{selected.repoUrl && <a className="button primary" href={selected.repoUrl} target="_blank" rel="noreferrer"><FiGithub/> View source</a>}{selected.demoUrl && <a className="button secondary" href={selected.demoUrl} target="_blank" rel="noreferrer">Live demo <FiArrowUpRight/></a>}{!selected.repoUrl && !selected.demoUrl && <a className="button secondary" href={`mailto:${siteConfig.email}`}>Ask about this project <FiArrowUpRight/></a>}</div></footer>
      </div>}
    </dialog>
  </>;
}
