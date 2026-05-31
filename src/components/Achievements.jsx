import { useInView } from 'react-intersection-observer';
import { achievements } from '../data/portfolioData';

function CPCard({ ach }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <div className={`ach-card ${ach.colorClass} reveal ${inView ? 'visible' : ''}`} ref={ref}>
      <div className="ach-top">
        <div className="ach-platform">{ach.platform}</div>
        <div className={`ach-badge ${ach.badgeClass}`}>{ach.badgeText}</div>
      </div>
      <div className="ach-rating">{ach.rating}</div>
      <div className="ach-rank">{ach.rank}</div>
      <ul className="ach-highlights">
        {ach.highlights.map(h => <li key={h}>{h}</li>)}
      </ul>
      {ach.link && (
        <a href={ach.link} target="_blank" rel="noopener" className="ach-link">{ach.linkText}</a>
      )}
    </div>
  );
}

function MilestoneCard({ ach }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <div className={`ach-card milestone-card reveal ${inView ? 'visible' : ''}`} ref={ref}>
      <div className="ms-title">{ach.title}</div>
      <div className="ms-rank">{ach.rankDisplay}</div>
      <div className="ms-sub">{ach.sub}</div>
      {ach.link && (
        <a href={ach.link} target="_blank" rel="noopener" className="ach-link" style={{ marginTop: '0.5rem' }}>
          {ach.linkText}
        </a>
      )}
    </div>
  );
}

export default function Achievements() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });
  return (
    <section id="achievements" className="section">
      <div className="container">
        <div className="section-eyebrow">Achievements</div>
        <h2 className={`section-title reveal ${inView ? 'visible' : ''}`} ref={ref}>
          Competitive <span className="accent">Programming</span>
        </h2>
        <p className="section-sub">Ranked across major global platforms.</p>
        <div className="ach-grid">
          {achievements.map(a =>
            a.type === 'cp'
              ? <CPCard key={a.id} ach={a} />
              : <MilestoneCard key={a.id} ach={a} />
          )}
        </div>
      </div>
    </section>
  );
}
