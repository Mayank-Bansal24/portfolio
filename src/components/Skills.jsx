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
      <div className="skill-group-header">
        {category}
        {supplementary && <span className="skill-supplementary-tag">supplementary</span>}
      </div>
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

  const primary = skills.filter(s => !s.supplementary);
  const secondary = skills.filter(s => s.supplementary);

  return (
    <section id="skills" className="section" style={{ background: 'var(--bg-alt)' }}>
      <div className="container">
        <div className="section-eyebrow">Skills</div>
        <h2 className={`section-title reveal ${inView ? 'visible' : ''}`} ref={ref}>
          Technical <span className="accent">Stack</span>
        </h2>
        <p className="section-sub">
          Backend-focused engineer across distributed systems, data pipelines, and AI tooling.
        </p>

        <div className="skills-grid">
          {primary.map((cat, i) => (
            <SkillGroup
              key={cat.category}
              category={cat.category}
              items={cat.items}
              delay={i * 60}
            />
          ))}
        </div>

        {secondary.length > 0 && (
          <div className="skills-supplementary-row">
            {secondary.map((cat, i) => (
              <SkillGroup
                key={cat.category}
                category={cat.category}
                items={cat.items}
                delay={i * 60}
                supplementary
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
