/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from 'react';
import { FiActivity, FiBox, FiCloud, FiCode, FiCpu, FiGitBranch, FiGlobe, FiLayers, FiZap, FiClock, FiDownload, FiFolder, FiSearch, FiServer, FiShield, FiMessageSquare, FiCheck, FiArrowRight } from 'react-icons/fi';

const systems = [
  { name: 'Cloud', icon: FiCloud, color: '#a8f578', label: 'Built across boundaries', detail: 'Multi-region AWS infrastructure', command: 'terraform apply', nodes: ['us-east-1', 'eu-west-1', 'ap-south-1'] },
  { name: 'Delivery', icon: FiGitBranch, color: '#bc9dff', label: 'From commit to confidence', detail: 'Repeatable CI/CD & automation', command: 'git push origin main', nodes: ['build', 'test', 'deploy'] },
  { name: 'Reliability', icon: FiActivity, color: '#71e2ff', label: 'See the whole picture', detail: 'Observability & incident response', command: 'observe --all-systems', nodes: ['metrics', 'logs', 'traces'] },
];
export function SystemPlayground() {
  const [active, setActive] = useState(0);
  const [pulse, setPulse] = useState(0);
  const system = systems[active];
  const Icon = system.icon;
  return <div className="system-playground" style={{ '--system-color': system.color }}>
    <div className="playground-topline"><span><i/> INTERACTIVE SYSTEM MAP</span><span>AP—01</span></div>
    <div className="orbital-stage" key={`${active}-${pulse}`}>
      <div className="orbital-haze"/><div className="orbital-ring ring-a"/><div className="orbital-ring ring-b"/><div className="orbital-ring ring-c"/>
      <svg className="orbital-lines" viewBox="0 0 500 360" aria-hidden="true"><path d="M250 180 L95 88 M250 180 L403 95 M250 180 L390 278 M250 180 L105 278"/>{[[95,88],[403,95],[390,278],[105,278]].map(([x,y],i) => <circle key={i} r="3"><animateMotion dur={`${2+i*.4}s`} repeatCount="indefinite" path={`M250 180 L${x} ${y}`}/></circle>)}</svg>
      <button className="system-core" aria-label="Send a pulse through the system" onClick={() => setPulse(pulse + 1)}><div className="core-shine"/><Icon/><span>{system.name.toUpperCase()}</span><small>CLICK TO PULSE</small></button>
      <div className="satellite satellite-a"><FiGlobe/><span>{system.nodes[0]}</span><i/></div><div className="satellite satellite-b"><FiLayers/><span>{system.nodes[1]}</span><i/></div><div className="satellite satellite-c"><FiBox/><span>{system.nodes[2]}</span><i/></div><div className="satellite satellite-d"><FiZap/><span>automated</span><i/></div>
      <div className="signal-wave"/><div className="orbital-caption"><span>{system.label}</span><small>{system.detail}</small></div>
    </div>
    <div className="system-switcher" aria-label="Explore infrastructure areas">{systems.map((item,index) => <button key={item.name} aria-pressed={active === index} onClick={() => setActive(index)} className={active === index ? 'selected' : ''}><item.icon/>{item.name}</button>)}</div>
    <div className="terminal-line"><span>❯</span><code key={system.command}>{system.command}</code><b/> <span className="terminal-result">ready ✓</span></div>
  </div>;
}

const projectCovers = {
  'Operations Dashboard': { type: 'dashboard', accent: '#86c9ff', icon: FiLayers, label: 'EC2 / DNS / COMPONENTS / SCHEDULING', className: 'cover-dashboard' },
  'AI Bruno (Ongoing)': { type: 'assistant', accent: '#c1a0ff', icon: FiCpu, label: 'LANGCHAIN / TOOLS / SYSTEM INSIGHTS', className: 'cover-ai' },
  'Server Migration in AWS': { type: 'migration', accent: '#ffbd87', icon: FiCloud, label: 'CROSS-REGION AWS MIGRATION', className: 'cover-cloud' },
  'Datadog Configuration': { type: 'observability', accent: '#ba9fff', icon: FiActivity, label: 'APM / LOGS / SYNTHETICS', className: 'cover-ai' },
  'GitLab Pipeline Migration': { type: 'pipeline', accent: '#ff9cbe', icon: FiGitBranch, label: 'BAMBOO → GITLAB CI/CD', className: 'cover-devops' },
  'Monitoring Tool': { type: 'health', accent: '#8bf0bf', icon: FiActivity, label: 'REACT / FASTAPI / REAL-TIME HEALTH', className: 'cover-monitoring' },
  'FTP File Downloader': { type: 'transfer', accent: '#f2df8a', icon: FiDownload, label: 'DOWNLOAD / VALIDATE / BACK UP', className: 'cover-automation' },
  'Component Watcher': { type: 'watcher', accent: '#77dce8', icon: FiShield, label: 'PROCESS MONITORING / AUTO-RESTART', className: 'cover-monitoring' },
  'Component Inventory': { type: 'inventory', accent: '#a6b8ff', icon: FiBox, label: 'DISCOVER / SEARCH / MANAGE', className: 'cover-dashboard' },
  'Instance Scheduler': { type: 'scheduler', accent: '#ffc18d', icon: FiClock, label: 'LAMBDA / CLOUDWATCH / EC2', className: 'cover-cloud' },
};

export function ProjectArtwork({ project }) {
  const art = projectCovers[project.title];
  if (!art) return <div className="project-artwork"><FiLayers/></div>;
  return <div className={`project-artwork project-specific ${art.className} artwork-${art.type}`} style={{ '--art-accent': art.accent }} role="img" aria-label={`${project.title}: ${art.label.toLowerCase()} illustration`}>
    <div className="artwork-mesh"/><span className="art-label">{art.label}</span>
    {art.type === 'dashboard' && <div className="ops-art"><div className="ops-header"><FiLayers/><span>Operations console</span><i/></div><div className="ops-grid">{[[FiServer,'EC2 instances'],[FiGlobe,'Route53 DNS'],[FiBox,'Components'],[FiClock,'Schedules']].map(([Item,label]) => <div key={label}><Item/><span>{label}</span><b>●</b></div>)}</div><div className="ops-bottom"><FiActivity/><span>Infrastructure overview</span><div>{[20,35,26,55,40,70,60,85,70,95].map((h,i) => <i key={i} style={{height:`${h}%`}}/>)}</div></div></div>}
    {art.type === 'assistant' && <div className="assistant-art"><div className="assistant-brain"><div className="neural-orb"><div/><div/><div/><FiCpu/></div></div><div className="chat-message"><FiMessageSquare/><span>Check the infrastructure health</span></div><div className="chat-response"><span><FiZap/> Tool-connected assistant</span><div><FiSearch/> Analyze logs <FiArrowRight/> <FiActivity/> Inspect metrics</div><div className="chat-lines"><i/><i/></div></div></div>}
    {art.type === 'migration' && <div className="migration-art"><div className="migration-globe"/><div className="migration-region"><FiServer/><span>eu-west-1</span><small>Ireland</small></div><div className="migration-link"><span>AMI TRANSFER</span><div><i/><i/><i/></div><FiArrowRight/></div><div className="migration-region"><FiCloud/><span>us-east-1</span><small>N. Virginia</small></div><div className="migration-note"><FiShield/> Security hardening <span>+</span> Disaster recovery</div></div>}
    {art.type === 'observability' && <div className="observability-art"><div className="trace-row"><FiActivity/><span>request trace</span><div><i/><i/><i/></div></div><div className="observe-panels"><div><span>APM</span><svg viewBox="0 0 150 70"><path d="M0 55 L15 50 L28 58 L40 32 L52 40 L67 20 L83 38 L95 10 L110 25 L125 15 L150 4"/></svg></div><div><span>LOG EXPLORER</span>{['INFO  service.ready','INFO  request.complete','WARN  latency.threshold','INFO  check.passed'].map(text => <code key={text}>{text}</code>)}</div></div><div className="synthetic-check"><FiGlobe/><span>Synthetic checks</span><FiCheck/><FiCheck/><FiCheck/></div></div>}
    {art.type === 'pipeline' && <div className="pipeline-art"><div className="pipeline-migration"><span>Bamboo / Bitbucket</span><FiArrowRight/><strong><FiGitBranch/> GitLab</strong></div><div className="pipeline-stages">{[[FiCode,'Commit'],[FiBox,'Build'],[FiShield,'Test'],[FiCloud,'Deploy']].map(([Item,label],index) => <div key={label}><span className="pipeline-step"><Item/><i><FiCheck/></i></span><span>{label}</span>{index < 3 && <b>···</b>}</div>)}</div><div className="pipeline-tools"><span>Terraform</span><span>Packer</span><span>Ansible</span></div></div>}
    {art.type === 'health' && <div className="health-art"><div className="health-title"><FiActivity/><span>Component health monitor</span><b>LIVE</b></div><div className="health-rows">{[['API service','8000'],['Web frontend','443'],['Database','5432']].map(([label,port]) => <div key={label}><span className="health-dot"/><span>{label}</span><code>:{port}</code><svg viewBox="0 0 90 24"><path d="M0 17 L20 17 L27 8 L34 21 L43 3 L50 17 L90 17"/></svg></div>)}</div><span className="health-caption">COMPONENTS + PORTS + INSTANT ALERTS</span></div>}
    {art.type === 'transfer' && <div className="transfer-art"><div className="transfer-endpoint"><FiServer/><span>FTP source</span></div><div className="transfer-stream">{[0,1,2].map(i => <span key={i} style={{animationDelay:`${i*.6}s`}}><FiFolder/></span>)}<div/></div><div className="transfer-endpoint"><FiFolder/><span>Local archive</span></div><div className="transfer-checks"><span><FiCheck/> File comparison</span><span><FiShield/> ISIN validation</span><span><FiDownload/> Backup</span></div></div>}
    {art.type === 'watcher' && <div className="watcher-art"><div className="watcher-radar"><div/><div/><div/><FiShield/><i/><i/><i/></div><div className="watcher-processes"><span>PROCESS WATCHER</span><div><i/> process.pid <b>running</b></div><div><i/> worker.pid <b>running</b></div><div className="restart-process"><FiZap/> Auto-restart <FiArrowRight/><FiCheck/></div><small>AWS SECRETS / DATADOG</small></div></div>}
    {art.type === 'inventory' && <div className="inventory-art"><div className="inventory-search"><FiSearch/><span>Search components...</span><kbd>⌘ K</kbd></div><div className="inventory-table"><div><span>COMPONENT</span><span>VERSION</span><span>SOURCE</span></div>{[['api-service','v2.4','Git'],['feed-worker','v1.8','Artifact'],['config-bundle','v3.1','Cloud']].map(([name,version,source]) => <div key={name}><span><FiBox/>{name}</span><span>{version}</span><span>{source}</span></div>)}</div><div className="inventory-caption"><FiFolder/> Directory scan <FiArrowRight/><FiBox/> Component discovery</div></div>}
    {art.type === 'scheduler' && <div className="scheduler-art"><div className="scheduler-clock"><div/><FiClock/><span>cron schedule</span><code>0 8 * * MON-FRI</code></div><div className="scheduler-flow"><span><FiZap/> Lambda</span><div/><span><FiServer/> EC2 lifecycle</span><div className="schedule-toggle"><span>START</span><i/><span>STOP</span></div><small>DEV · UAT · PROD</small></div></div>}
    <span className="art-corner">{project.category} <span>↗</span></span>
  </div>;
}

export function MotionEffects() {
  const glow = useRef(null);
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('revealed'); observer.unobserve(entry.target); }
    }), { threshold: .07 });
    document.querySelectorAll('.section-heading, .project-card, .expertise-card, .experience-row, .certification-section, .contact-section').forEach(element => { if (!reduced) element.classList.add('reveal'); observer.observe(element); });
    let frame;
    const move = event => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        if (glow.current) {glow.current.style.left = `${event.clientX}px`;glow.current.style.top = `${event.clientY}px`;}
        const card = event.target.closest('.project-card, .expertise-card, .system-playground');
        if (card) {const rect = card.getBoundingClientRect();card.style.setProperty('--mx', `${event.clientX-rect.left}px`);card.style.setProperty('--my', `${event.clientY-rect.top}px`);}
      });
    };
    if (!reduced) window.addEventListener('pointermove', move, {passive:true});
    return () => {observer.disconnect();window.removeEventListener('pointermove',move);cancelAnimationFrame(frame);};
  }, []);
  return <div ref={glow} className="pointer-glow" aria-hidden="true"/>;
}
