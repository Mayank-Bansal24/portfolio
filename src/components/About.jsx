import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { stats } from '../data/portfolioData';

function StatCard({ value, unit, label, detail, decimals }) {
  const [displayed, setDisplayed] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (!inView) return;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    let step = 0;
    const iv = setInterval(() => {
      step++;
      current = Math.min(current + increment, value);
      setDisplayed(+current.toFixed(decimals));
      if (step >= steps) clearInterval(iv);
    }, 1800 / steps);
    return () => clearInterval(iv);
  }, [inView, value, decimals]);

  return (
    <div className="stat-card" ref={ref}>
      <div className="sc-num-row">
        <span className="sc-num">{displayed.toFixed(decimals)}</span>
        {unit && <span className="sc-unit">{unit}</span>}
      </div>
      <div className="sc-label">{label}</div>
      <div className="sc-detail">{detail}</div>
    </div>
  );
}

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const chips = [
    'Distributed Systems', 'AI / LLM Engineering', 'Real-time Pipelines',
    'Competitive Programming', 'Enterprise Architecture', 'IIT Mandi',
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-eyebrow">About</div>
        <div className="about-grid">
          <div className={`about-left reveal ${inView ? 'visible' : ''}`} ref={ref}>
            <h2 className="section-title">Background &amp; <span className="accent">Expertise</span></h2>
            <p className="section-sub">IIT Mandi CS graduate, competitive programmer, backend engineer.</p>
            <p className="about-lead">
              I specialise in building scalable distributed systems and AI-powered solutions.
              Graduated from <strong>IIT Mandi</strong> with a B.Tech in Computer Science
              and Engineering, and a <strong>Minor in Management</strong>.
            </p>
            <p className="about-body">
              At <strong>Nucleus Software</strong>, I work at the intersection of
              enterprise-scale systems and modern AI — engineering a Low-Code Integration
              Platform that cut 60-day integration cycles to <strong>under 3 hours</strong>,
              shipping production RAG chatbots, and architecting real-time data lakehouses
              using Kafka, Spark, and Apache Iceberg.
            </p>
            <p className="about-body">
              Active competitive programmer over 2+ years — <strong>Codeforces Specialist (1514)</strong>,{' '}
              <strong>Codechef 4★ (1809)</strong>, ICPC Asia Amritapuri participant.
            </p>
            <div className="chips">
              {chips.map(c => <span key={c} className="chip">{c}</span>)}
            </div>
          </div>
          <div className="about-right">
            <div className="stat-cards">
              {stats.map(s => <StatCard key={s.label} {...s} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
