import { useEffect, useState } from 'react';
import { personal } from '../data/portfolioData';

const TYPEWRITER_WORDS = personal.typewriterWords;

function TerminalBoot() {
  const [lines, setLines] = useState([]);
  const outputs = [
    <><span className="t-key">name</span><span className="t-colon">:</span> <span className="t-val">"Mayank Bansal"</span></>,
    <><span className="t-key">role</span><span className="t-colon">:</span> <span className="t-val">"Senior Software Engineer"</span></>,
    <><span className="t-key">company</span><span className="t-colon">:</span> <span className="t-val">"Nucleus Software Exports"</span></>,
    <><span className="t-key">education</span><span className="t-colon">:</span> <span className="t-val">"IIT Mandi — B.Tech CSE"</span></>,
    <><span className="t-key">focus</span><span className="t-colon">:</span> [<span className="t-val">"Backend"</span>, <span className="t-val">"AI/LLM"</span>, <span className="t-val">"Data Eng."</span>]</>,
    <><span className="t-key">cf_rating</span><span className="t-colon">:</span> <span className="t-num">1514</span><span className="t-dim">,</span>&nbsp;<span className="t-key">cc_rating</span><span className="t-colon">:</span> <span className="t-num">1809</span></>,
  ];

  useEffect(() => {
    let i = 0;
    const iv = setInterval(() => {
      if (i < outputs.length) {
        setLines(prev => [...prev, outputs[i]]);
        i++;
      } else {
        clearInterval(iv);
      }
    }, 380);
    return () => clearInterval(iv);
  }, []); // eslint-disable-line

  return (
    <div className="hero-terminal">
      <div className="terminal-topbar">
        <div className="terminal-dots">
          <span className="tdot" /><span className="tdot" /><span className="tdot" />
        </div>
        <span className="terminal-title">profile.json</span>
      </div>
      <div className="terminal-body">
        <div className="t-line"><span className="t-brace">{'{'}</span></div>
        {lines.map((l, idx) => (
          <div key={idx} className="t-line t-output">
            &nbsp;&nbsp;{l}<span className="t-dim">{idx < outputs.length - 1 ? ',' : ''}</span>
          </div>
        ))}
        {lines.length === outputs.length && (
          <div className="t-line"><span className="t-brace">{'}'}</span></div>
        )}
        {lines.length < outputs.length && (
          <div className="t-line"><span className="t-cursor-blink">_</span></div>
        )}
      </div>
    </div>
  );
}

export default function Hero() {
  const [typed, setTyped] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = TYPEWRITER_WORDS[wordIdx];
    let timeout;
    if (!deleting && charIdx < word.length) {
      timeout = setTimeout(() => { setTyped(word.slice(0, charIdx + 1)); setCharIdx(c => c + 1); }, 65);
    } else if (!deleting && charIdx === word.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => { setTyped(word.slice(0, charIdx - 1)); setCharIdx(c => c - 1); }, 38);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setWordIdx(i => (i + 1) % TYPEWRITER_WORDS.length);
    }
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx]);

  return (
    <section id="hero" className="hero">
      <div className="hero-left">
        <div className="hero-eyebrow">
          <span className="eyebrow-dot" />
          IIT Mandi &nbsp;·&nbsp; Noida, India &nbsp;·&nbsp; Open to opportunities
        </div>
        <h1 className="hero-name">
          Mayank<br />
          <span className="hero-name-accent">Bansal</span>
        </h1>
        <div className="hero-typerow">
          <span className="hero-static">Building&nbsp;</span>
          <span className="hero-typed">{typed}</span>
          <span className="hero-cursor">|</span>
        </div>
        <p className="hero-sub">
          Backend engineer with 2 years at Nucleus Software — shipping production RAG
          pipelines, event-driven microservices, and real-time data lakehouses.
          IIT Mandi CS graduate and competitive programmer.
        </p>
        <div className="hero-actions">
          <a href="#experience" className="btn-primary">View Experience</a>
          <a href="mailto:bansalmk24@gmail.com" className="btn-secondary">bansalmk24@gmail.com</a>
        </div>
        <div className="hero-links">
          <a href="https://github.com/Mayank-Bansal24" target="_blank" rel="noopener" className="hlink">GitHub</a>
          <span className="hlink-sep">·</span>
          <a href="https://www.linkedin.com/in/mayank-bansal-395067228/" target="_blank" rel="noopener" className="hlink">LinkedIn</a>
          <span className="hlink-sep">·</span>
          <a href="https://codeforces.com/profile/Mayank_Bansal" target="_blank" rel="noopener" className="hlink">Codeforces</a>
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-profile-card">
          <div className="profile-photo-wrap">
            <img
              src="/profilepic.jpeg"
              alt="Mayank Bansal"
              className="profile-photo"
              onContextMenu={e => e.preventDefault()}
              draggable={false}
            />
          </div>
          <div className="profile-info">
            <div className="profile-name">Mayank Bansal</div>
            <div className="profile-role">Senior Software Engineer</div>
            <div className="profile-org">Nucleus Software Exports Ltd.</div>
          </div>
          <div className="profile-badges">
            <span className="pbadge">IIT Mandi</span>
            <span className="pbadge">CF 1514</span>
            <span className="pbadge">2 YOE</span>
          </div>
        </div>
        <TerminalBoot />
      </div>
    </section>
  );
}
