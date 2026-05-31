import { useInView } from 'react-intersection-observer';
import { skills } from '../data/portfolioData';

function SkillGroup({ category, items, delay, supplementary }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div
      className={`skill-group reveal ${supplementary ? 'skill-group--supplementary' : ''} ${inView ? 'visible' : ''}`}
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="skill-group-header">{category}</div>
      <div className="skill-pills">
        {items.map(item => (
          <span key={item} className={`skill-pill ${supplementary ? 'skill-pill--dim' : ''}`}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="skills" className="section" style={{ background: 'var(--bg-alt)' }}>
      <div className="container">
        <div className="section-eyebrow">Skills</div>
        <h2 className={`section-title reveal ${inView ? 'visible' : ''}`} ref={ref}>
          Technical <span className="accent">Stack</span>
        </h2>
        <p className="section-sub">
          Backend-focused across distributed systems, data pipelines, and AI tooling.
        </p>
        <div className="skills-grid">
          {skills.map((cat, i) => (
            <SkillGroup
              key={cat.category}
              category={cat.category}
              items={cat.items}
              delay={i * 60}
              supplementary={cat.supplementary}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
