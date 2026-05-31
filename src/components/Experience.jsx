import { useInView } from 'react-intersection-observer';
import { experience } from '../data/portfolioData';

function WorkItem({ title, desc, tags }) {
  return (
    <div className="work-item">
      <div className="wi-bullet" />
      <div className="wi-body">
        <div className="wi-title">{title}</div>
        <p className="wi-desc" dangerouslySetInnerHTML={{ __html: desc }} />
        <div className="wi-tags">
          {tags.map(t => <span key={t}>{t}</span>)}
        </div>
      </div>
    </div>
  );
}

function TimelineItem({ item }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });
  return (
    <div className={`tl-item reveal ${inView ? 'visible' : ''}`} ref={ref}>
      <div className="tl-dot"><div className="tl-pulse" /></div>
      <div className="tl-card">
        <div className="tl-header">
          <div className={`company-badge ${item.badgeClass}`}>{item.badgeChar}</div>
          <div className="tl-meta">
            <h3 className="tl-role">{item.role}</h3>
            <div className="tl-company-row">
              <a
                href={item.companyUrl}
                target="_blank"
                rel="noopener"
                className="tl-company-link"
              >
                {item.company}
              </a>
              {item.certificate && (
                <a
                  href={item.certificate}
                  target="_blank"
                  rel="noopener"
                  className="tl-cert-link"
                >
                  View Certificate →
                </a>
              )}
            </div>
            <div className="tl-period">
              {item.period}
              {item.current && <span className="tl-live">Current</span>}
            </div>
          </div>
        </div>
        <div className="tl-items">
          {item.items.map(wi => <WorkItem key={wi.title} {...wi} />)}
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });
  return (
    <section id="experience" className="section" style={{ background: 'var(--bg-alt)' }}>
      <div className="container">
        <div className="section-eyebrow">Experience</div>
        <h2 className={`section-title reveal ${inView ? 'visible' : ''}`} ref={ref}>
          Work <span className="accent">History</span>
        </h2>
        <p className="section-sub">2 years of production engineering across AI, data, and enterprise systems.</p>
        <div className="timeline">
          {experience.map(exp => <TimelineItem key={exp.id} item={exp} />)}
        </div>
      </div>
    </section>
  );
}
