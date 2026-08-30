import { FaCode, FaChartBar, FaBrain, FaGlobe, FaTools } from 'react-icons/fa';
import { skillCategories } from '../data/skills';

const iconMap = {
  code: FaCode,
  chart: FaChartBar,
  brain: FaBrain,
  globe: FaGlobe,
  tool: FaTools,
};

export default function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <div className="section-heading reveal">
          <p className="eyebrow">Skills</p>
          <h2>Core strengths and learning areas.</h2>
        </div>

        <div className="skills-grid">
          {skillCategories.map(({ title, icon, items }) => {
            const Icon = iconMap[icon];

            return (
              <div key={title} className="skill-category reveal">
                <div className="category-top">
                  <span className="skill-icon"><Icon /></span>
                  <h3>{title}</h3>
                </div>

                <div className="tag-list">
                  {items.map((item) => (
                    <span key={item} className="skill-tag">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
