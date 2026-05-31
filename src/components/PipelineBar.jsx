import { useEffect, useState } from 'react';

const STAGES = ['INGEST', 'BRONZE', 'SILVER', 'GOLD', 'STREAM', 'METRICS', 'SINK'];
const SECTION_IDS = ['hero', 'about', 'experience', 'projects', 'skills', 'achievements', 'contact'];

export default function PipelineBar() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      for (let i = SECTION_IDS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTION_IDS[i]);
        if (el && window.scrollY >= el.offsetTop - 200) {
          setActive(i);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="pipeline-bar">
      <div className="pipeline-track">
        <div className="pipeline-flow" style={{ width: `${((active) / (STAGES.length - 1)) * 100}%` }} />
      </div>
      <div className="pipeline-stages">
        {STAGES.map((s, i) => (
          <a
            key={s}
            href={`#${SECTION_IDS[i]}`}
            className={`p-stage ${i === active ? 'active' : ''} ${i < active ? 'done' : ''}`}
            title={SECTION_IDS[i]}
          >
            {s}
          </a>
        ))}
      </div>
    </div>
  );
}
