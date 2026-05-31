import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { projects } from '../data/portfolioData';

function VideoModal({ src, title, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <span className="modal-title">{title} — Demo</span>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>
        <video
          className="modal-video"
          src={src}
          controls
          autoPlay
          playsInline
          controlsList="nodownload nofullscreen"
          disablePictureInPicture
          onContextMenu={e => e.preventDefault()}
        />
      </div>
    </div>
  );
}

function ProjectCard({ proj }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 });
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      <div className={`proj-card reveal ${inView ? 'visible' : ''}`} ref={ref}>
        <div className="proj-top">
          <div className="proj-title-row">
            <h3 className="proj-name">{proj.title}</h3>
            {proj.atWork && <span className="proj-at-work">Professional</span>}
          </div>
          <div className="proj-actions-row">
            {proj.video && (
              <button className="proj-demo-btn" onClick={() => setShowVideo(true)}>
                ▶ Demo
              </button>
            )}
            {!proj.atWork && proj.github && (
              <a href={proj.github} target="_blank" rel="noopener" aria-label="GitHub" className="proj-gh-link">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>
            )}
          </div>
        </div>
        <p className="proj-desc">{proj.desc}</p>
        <div className="proj-tags">
          {proj.tags.map(t => <span key={t}>{t}</span>)}
        </div>
        <div className="proj-metrics">
          {proj.metrics.map(m => (
            <div key={m} className="pm">
              <span className="pm-dot">◆</span>{m}
            </div>
          ))}
        </div>
      </div>
      {showVideo && (
        <VideoModal
          src={proj.video}
          title={proj.title}
          onClose={() => setShowVideo(false)}
        />
      )}
    </>
  );
}

export default function Projects() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-eyebrow">Projects</div>
        <h2 className={`section-title reveal ${inView ? 'visible' : ''}`} ref={ref}>
          Selected <span className="accent">Work</span>
        </h2>
        <p className="section-sub">Production systems and personal projects.</p>
        <div className="projects-grid">
          {projects.map(p => <ProjectCard key={p.id} proj={p} />)}
        </div>
      </div>
    </section>
  );
}
