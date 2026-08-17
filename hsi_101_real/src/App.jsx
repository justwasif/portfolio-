import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, MeshTransmissionMaterial, Sparkles } from '@react-three/drei';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import { useRef, useState } from 'react';
import './App.css';

const wins = [
  { award: 'WINNER · 2026', event: 'Road to Devcon · IIT Roorkee', title: 'DEADLIGHT', copy: 'A censorship-resistant dead man’s switch where ciphertext lives in contract state and silence triggers permissionless release.', tone: 'cyan', repo: 'https://github.com/amsorrytola/deadlight' },
  { award: '1ST + 3RD · 2025', event: 'Syntax Error 2025', title: 'Onryo', copy: 'An isometric mystery game with procedural terrain, AI-generated NPC dialogue and an impostor hidden in the forest.', tone: 'red', repo: 'https://github.com/ayushi8463-lgtm/Syntax-Error-2025' },
  { award: '3RD + 3RD · 2025', event: 'StackTooDeep v3.0', title: 'Ghee Khatam', copy: 'A multiplayer strategy game using Zero-Knowledge proofs to validate hidden-state moves without revealing the map.', tone: 'violet', repo: 'https://github.com/Ibrahim2750mi/StackTooDeep2025' },
  { award: '3RD · 2025', event: 'Dead & Alive 4.0 · IBM Qiskit Fall Fest', title: 'Dead & Alive 4.0', copy: 'A quantum-computing hackathon achievement adding quantum systems to an already Web3-heavy builder journey.', tone: 'pink' },
];

const projects = [
  { no: '01', kind: 'WEB3 / ZK', title: 'Ghee Khatam', desc: 'Trustless multiplayer strategy with ZK move validation, real-time game state, token economy and NFT rewards.', tech: 'React · Phaser · Node · Solidity · Circom · SnarkJS', link: 'https://github.com/Ibrahim2750mi/StackTooDeep2025' },
  { no: '02', kind: 'ON-CHAIN SECURITY', title: 'DEADLIGHT', desc: 'The chain itself enforces the embargo. Guardian shares cannot open the vault before the heartbeat deadline.', tech: 'Solidity · Foundry · React · TypeScript · AES-256-GCM', link: 'https://github.com/amsorrytola/deadlight', live: 'https://amsorrytola.github.io/deadlight/' },
  { no: '03', kind: 'GAME / AI', title: 'Onryo', desc: 'Procedural forest exploration, interrogation mechanics and Groq-powered NPC dialogue built for a hackathon.', tech: 'Python · Arcade · Groq AI · Procedural Generation', link: 'https://github.com/ayushi8463-lgtm/Syntax-Error-2025' },
];

function Orb() {
  const ref = useRef();
  useFrame((state, delta) => { if (ref.current) { ref.current.rotation.x = state.pointer.y * .12 + ref.current.rotation.x + delta * .04; ref.current.rotation.y += delta * .14; } });
  return <Float speed={1.25} rotationIntensity={.2} floatIntensity={.65}><mesh ref={ref}><icosahedronGeometry args={[1.65, 3]} /><MeshTransmissionMaterial backside thickness={1.5} chromaticAberration={.1} anisotropy={.3} distortion={.13} distortionScale={.45} temporalDistortion={.08} roughness={.1} color="#8eeeff" /></mesh></Float>;
}
function Scene() { return <Canvas camera={{ position: [0,0,6], fov: 38 }} dpr={[1,1.6]}><ambientLight intensity={.65}/><pointLight position={[3,2,4]} intensity={9} color="#72e7ff"/><pointLight position={[-3,-1,2]} intensity={6} color="#9b75ff"/><Sparkles count={100} scale={7} size={1.3} speed={.25} opacity={.5}/><Orb/><Environment preset="city"/></Canvas>; }
function Reveal({ children, delay=0, className='' }) { return <motion.div className={className} initial={{opacity:0,y:26}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.16}} transition={{duration:.65,delay,ease:[.22,1,.36,1]}}>{children}</motion.div>; }

export default function App() {
  const [menu,setMenu]=useState(false); const [active,setActive]=useState('all');
  const {scrollYProgress}=useScroll(); const progress=useSpring(scrollYProgress,{stiffness:120,damping:30,restDelta:.001}); const artY=useTransform(scrollYProgress,[0,1],[0,-140]);
  const filtered=active==='all'?projects:projects.filter(p=>p.kind.includes(active));
  const scroll=id=>document.getElementById(id)?.scrollIntoView({behavior:'smooth'});
  return <div className="site">
    <motion.div className="progress" style={{scaleX:progress}} />
    <header className="nav wrap"><a className="logo" href="#top">W<span>.</span></a><button className="menu" onClick={()=>setMenu(!menu)}>☰</button><nav className={menu?'open':''}>{['work','wins','about','contact'].map(x=><a key={x} href={`#${x}`} onClick={()=>setMenu(false)}>{x}</a>)}<a className="nav-cta" href="https://github.com/justwasif" target="_blank">GitHub ↗</a></nav></header>
    <main id="top">
      <section className="hero wrap"><div className="hero-copy"><Reveal><div className="eyebrow"><i/> AVAILABLE FOR BUILDS · IIT ROORKEE</div></Reveal><Reveal delay={.05}><h1>I build things<br/><em>worth showing.</em></h1></Reveal><Reveal delay={.1}><p>Mohammad Wasif — developer, hackathon winner and systems enthusiast exploring <b>Rust, blockchain, ZK, AI agents and distributed systems.</b></p></Reveal><Reveal delay={.15}><div className="hero-actions"><button className="solid" onClick={()=>scroll('work')}>See selected work <span>↓</span></button><a className="ghost" href="https://www.linkedin.com/in/mohammed-wasif-ansari-1b439538b/" target="_blank">LinkedIn ↗</a></div></Reveal><Reveal delay={.2}><div className="micro"><span>04</span> hackathons <span>·</span> <span>02</span> outright wins <span>·</span> <span>∞</span> things left to build</div></Reveal></div><motion.div className="hero-art" style={{y:artY}}><div className="orb-glow"/><Scene/><motion.div className="code-float c1" animate={{y:[0,-8,0]}} transition={{duration:4,repeat:Infinity,ease:'easeInOut'}}>ZK_PROOF · VALID</motion.div><motion.div className="code-float c2" animate={{y:[0,7,0]}} transition={{duration:5,repeat:Infinity,ease:'easeInOut'}}>BUILD → SHIP → REPEAT</motion.div></motion.div></section>

      <section id="wins" className="section wrap"><Reveal><div className="section-top"><div><small>01 / RECEIPTS</small><h2>Winning is nice.<br/><span>Building is better.</span></h2></div><p>Four hackathon achievements across blockchain, games and quantum computing. No inflated claims — just the work.</p></div></Reveal><div className="wins-grid">{wins.map((w,i)=><Reveal key={w.title} delay={i*.06}><motion.article className={`win ${w.tone}`} whileHover={{y:-7,scale:1.012}} transition={{type:'spring',stiffness:280,damping:22}}><div className="win-number">0{i+1}</div><div className="award">{w.award}</div><h3>{w.title}</h3><div className="event">{w.event}</div><p>{w.copy}</p>{w.repo&&<a className="arrow" href={w.repo} target="_blank">View project <span>↗</span></a>}</motion.article></Reveal>)}</div></section>

      <section id="work" className="section work wrap"><Reveal><div className="section-top"><div><small>02 / SELECTED WORK</small><h2>Projects with<br/><span>actual problems.</span></h2></div><div className="filters">{[['all','All'],['WEB3','Web3'],['ON-CHAIN','On-chain'],['GAME','Game']].map(([k,l])=><button key={k} className={active===k?'active':''} onClick={()=>setActive(k)}>{l}</button>)}</div></div></Reveal><div className="projects-grid">{filtered.map((p,i)=><Reveal key={p.no} delay={i*.07}><motion.article className="project" layout whileHover={{y:-6}} transition={{type:'spring',stiffness:260,damping:22}}><div className="project-head"><span>{p.no}</span><small>{p.kind}</small></div><h3>{p.title}</h3><p>{p.desc}</p><div className="tech">{p.tech}</div><div className="project-links"><a href={p.link} target="_blank">GitHub ↗</a>{p.live&&<a href={p.live} target="_blank">Live demo ↗</a>}</div></motion.article></Reveal>)}</div></section>

      <section id="about" className="section wrap"><div className="about-grid"><Reveal><div><small>03 / ABOUT</small><h2>Curious by default.<br/><span>Competitive by deadline.</span></h2></div></Reveal><Reveal delay={.08}><div className="about-copy"><p>I’m a student at <b>IIT Roorkee</b> who enjoys going deeper than the tutorial. I like understanding why systems work — memory, networks, cryptography, blockchains and the trade-offs behind products.</p><p>Right now I’m pushing hard on <b>Rust + DSA, Ethereum, ZK, DeFi, AI agents and systems.</b> Hackathons are where I pressure-test what I learn.</p><div className="skills">{['Rust','Solidity','Foundry','React','Node.js','Python','ZK Proofs','Ethereum','AI Agents','System Design','MongoDB','Linux / NixOS'].map(s=><span key={s}>{s}</span>)}</div></div></Reveal></div></section>

      <section id="contact" className="contact wrap"><Reveal><div className="contact-inner"><small>04 / CONTACT</small><h2>Have a weird idea?</h2><p>Good. Those are usually the interesting ones.</p><div className="contact-actions"><a className="solid" href="mailto:wasif.iitr.ansari@gmail.com">wasif.iitr.ansari@gmail.com ↗</a><a className="ghost" href="https://github.com/justwasif" target="_blank">GitHub ↗</a><a className="ghost" href="https://x.com/wasif_genz" target="_blank">X ↗</a></div></div></Reveal></section>
    </main><footer className="wrap"><span>© 2026 Mohammad Wasif</span><span>Code · Learn · Build · Repeat</span></footer>
  </div>;
}
