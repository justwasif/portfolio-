import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, MeshTransmissionMaterial, Sparkles } from '@react-three/drei';
import { useMemo, useRef, useState } from 'react';
import './App.css';

const wins = [
  { award: '1st Place', event: 'Road to Devcon · IIT Roorkee', title: 'DEADLIGHT', copy: 'A censorship-resistant dead man’s switch where ciphertext lives in contract state and silence triggers permissionless release.', tone: 'cyan', repo: 'https://github.com/amsorrytola/deadlight', live: 'https://amsorrytola.github.io/deadlight/' },
  { award: '1st + 3rd', event: 'Syntax Error 2025', title: 'Onryo', copy: 'An isometric mystery game with procedural terrain, AI-generated NPC dialogue and an impostor hidden in the forest.', tone: 'red', repo: 'https://github.com/ayushi8463-lgtm/Syntax-Error-2025' },
  { award: '3rd + 3rd', event: 'StackTooDeep v3.0', title: 'Ghee Khatam', copy: 'A multiplayer strategy game using Zero-Knowledge proofs to validate hidden-state moves without revealing the map.', tone: 'violet', repo: 'https://github.com/Ibrahim2750mi/StackTooDeep2025' },
  { award: '3rd Place', event: 'IBM Qiskit Fall Fest 2025', title: 'Dead & Alive 4.0', copy: 'A quantum-computing hackathon achievement, adding quantum systems to an already Web3-heavy builder journey.', tone: 'pink' },
];

const projects = [
  { no: '01', kind: 'WEB3 / ZK', title: 'Ghee Khatam', desc: 'Trustless multiplayer strategy with ZK move validation, real-time game state, token economy and NFT rewards.', tech: 'React · Phaser · Node · Solidity · Circom · SnarkJS', link: 'https://github.com/Ibrahim2750mi/StackTooDeep2025' },
  { no: '02', kind: 'ON-CHAIN SECURITY', title: 'DEADLIGHT', desc: 'The chain itself enforces the embargo. Guardian shares cannot open the vault before the heartbeat deadline.', tech: 'Solidity · Foundry · React · TypeScript · AES-256-GCM', link: 'https://github.com/amsorrytola/deadlight', live: 'https://amsorrytola.github.io/deadlight/' },
  { no: '03', kind: 'GAME / AI', title: 'Onryo', desc: 'Procedural forest exploration, interrogation mechanics and Groq-powered NPC dialogue built for a hackathon.', tech: 'Python · Arcade · Groq AI · Procedural Generation', link: 'https://github.com/ayushi8463-lgtm/Syntax-Error-2025' },
];

function Orb() {
  const ref = useRef();
  useFrame((_, delta) => { if (ref.current) { ref.current.rotation.x += delta * .12; ref.current.rotation.y += delta * .18; } });
  return <Float speed={1.4} rotationIntensity={.25} floatIntensity={.7}><mesh ref={ref}><icosahedronGeometry args={[1.65, 2]} /><MeshTransmissionMaterial backside thickness={1.4} chromaticAberration={.08} anisotropy={.25} distortion={.12} distortionScale={.4} temporalDistortion={.08} roughness={.12} color="#8eeeff" /></mesh></Float>;
}

function Scene() { return <Canvas camera={{ position: [0, 0, 6], fov: 38 }} dpr={[1, 1.6]}><ambientLight intensity={.7} /><pointLight position={[3, 2, 4]} intensity={8} color="#72e7ff" /><pointLight position={[-3, -1, 2]} intensity={5} color="#9b75ff" /><Sparkles count={90} scale={7} size={1.4} speed={.25} opacity={.5} /><Orb /><Environment preset="city" /></Canvas>; }

function App() {
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState('all');
  const filtered = active === 'all' ? projects : projects.filter(p => p.kind.includes(active));
  const scroll = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  return <div className="site">
    <header className="nav wrap"><a className="logo" href="#top">W<span>.</span></a><button className="menu" onClick={() => setMenu(!menu)} aria-label="Menu">☰</button><nav className={menu ? 'open' : ''}><a href="#work" onClick={() => setMenu(false)}>Work</a><a href="#wins" onClick={() => setMenu(false)}>Wins</a><a href="#about" onClick={() => setMenu(false)}>About</a><a href="#contact" onClick={() => setMenu(false)}>Contact</a><a className="nav-cta" href="https://github.com/justwasif" target="_blank">GitHub ↗</a></nav></header>

    <main id="top">
      <section className="hero wrap"><div className="hero-copy reveal"><div className="eyebrow"><i /> AVAILABLE FOR BUILDS · IIT ROORKEE</div><h1>I build things<br /><em>worth showing.</em></h1><p>Mohammad Wasif — developer, hackathon winner and systems enthusiast exploring <b>Rust, blockchain, ZK, AI agents and distributed systems.</b></p><div className="hero-actions"><button className="solid" onClick={() => scroll('work')}>See selected work <span>↓</span></button><a className="ghost" href="https://www.linkedin.com/in/mohammed-wasif-ansari-1b439538b/" target="_blank">LinkedIn ↗</a></div><div className="micro"><span>04</span> hackathons <span>·</span> <span>02</span> outright wins <span>·</span> <span>∞</span> things left to build</div></div><div className="hero-art"><div className="orb-glow" /><Scene /><div className="code-float c1">ZK_PROOF · VALID</div><div className="code-float c2">BUILD → SHIP → REPEAT</div></div></section>

      <section id="wins" className="section wrap"><div className="section-top"><div><small>01 / RECEIPTS</small><h2>Winning is nice.<br /><span>Building is better.</span></h2></div><p>Four hackathon achievements across blockchain, games and quantum computing. No inflated claims — just the work.</p></div><div className="wins-grid">{wins.map((w,i)=><article className={`win ${w.tone}`} key={w.title}><div className="win-number">0{i+1}</div><div className="award">{w.award}</div><h3>{w.title}</h3><div className="event">{w.event}</div><p>{w.copy}</p>{w.repo && <a className="arrow" href={w.repo} target="_blank">View project <span>↗</span></a>}</article>)}</div></section>

      <section id="work" className="section work wrap"><div className="section-top"><div><small>02 / SELECTED WORK</small><h2>Projects with<br /><span>actual problems.</span></h2></div><div className="filters"><button className={active==='all'?'active':''} onClick={()=>setActive('all')}>All</button><button className={active==='WEB3'?'active':''} onClick={()=>setActive('WEB3')}>Web3</button><button className={active==='ON-CHAIN'?'active':''} onClick={()=>setActive('ON-CHAIN')}>On-chain</button><button className={active==='GAME'?'active':''} onClick={()=>setActive('GAME')}>Game</button></div></div><div className="projects-grid">{filtered.map(p=><article className="project" key={p.no}><div className="project-head"><span>{p.no}</span><small>{p.kind}</small></div><h3>{p.title}</h3><p>{p.desc}</p><div className="tech">{p.tech}</div><div className="project-links"><a href={p.link} target="_blank">GitHub ↗</a>{p.live&&<a href={p.live} target="_blank">Live demo ↗</a>}</div></article>)}</div></section>

      <section id="about" className="section wrap"><div className="about-grid"><div><small>03 / ABOUT</small><h2>Curious by default.<br /><span>Competitive by deadline.</span></h2></div><div className="about-copy"><p>I’m a student at <b>IIT Roorkee</b> who enjoys going deeper than the tutorial. I like understanding why systems work — memory, networks, cryptography, blockchains and the trade-offs behind products.</p><p>Right now I’m pushing hard on <b>Rust + DSA, Ethereum, ZK, DeFi, AI agents and systems.</b> Hackathons are where I pressure-test what I learn.</p><div className="skills">{['Rust','Solidity','Foundry','React','Node.js','Python','ZK Proofs','Ethereum','AI Agents','System Design','MongoDB','Linux / NixOS'].map(s=><span key={s}>{s}</span>)}</div></div></div></section>

      <section id="contact" className="contact wrap"><div className="contact-inner"><small>04 / CONTACT</small><h2>Have a weird idea?</h2><p>Good. Those are usually the interesting ones.</p><div className="contact-actions"><a className="solid" href="mailto:wasif.iitr.ansari@gmail.com">wasif.iitr.ansari@gmail.com ↗</a><a className="ghost" href="https://github.com/justwasif" target="_blank">GitHub ↗</a><a className="ghost" href="https://x.com/wasif_genz" target="_blank">X ↗</a></div></div></section>
    </main><footer className="wrap"><span>© 2026 Mohammad Wasif</span><span>Designed to feel like a portfolio, not a résumé.</span></footer>
  </div>;
}
export default App;
