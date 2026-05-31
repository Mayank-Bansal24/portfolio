import { useInView } from 'react-intersection-observer';
import { personal } from '../data/portfolioData';

const contactLinks = [
  { id: 'email',    icon: '✉',  label: 'Email',    value: personal.email,               href: `mailto:${personal.email}`,    cls: '',   external: false },
  { id: 'phone',    icon: '✆',  label: 'Phone',    value: personal.phone,               href: `tel:${personal.phone}`,       cls: 'ph', external: false },
  { id: 'linkedin', icon: 'in', label: 'LinkedIn', value: 'mayank-bansal-395067228',    href: personal.linkedin,             cls: 'li', external: true  },
  { id: 'github',   icon: 'gh', label: 'GitHub',   value: 'Mayank-Bansal24',            href: personal.github,               cls: 'gh', external: true  },
];

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="contact" className="section" style={{ background: 'var(--bg-alt)' }}>
      <div className="container">
        <div className="section-eyebrow">Contact</div>
        <h2 className={`section-title reveal ${inView ? 'visible' : ''}`} ref={ref}>
          Get In <span className="accent">Touch</span>
        </h2>
        <p className="section-sub">
          Open to backend, AI/data engineering, and distributed systems roles. Response time under 24 hours.
        </p>

        <div className="contact-links">
          {contactLinks.map(l => (
            <a
              key={l.id}
              id={`contact-${l.id}`}
              href={l.href}
              className={`clink ${l.cls}`}
              {...(l.external ? { target: '_blank', rel: 'noopener' } : {})}
            >
              <div className="clink-icon">{l.icon}</div>
              <div className="clink-text">
                <div className="clink-label">{l.label}</div>
                <div className="clink-val">{l.value}</div>
              </div>
              <span className="clink-arrow">→</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
