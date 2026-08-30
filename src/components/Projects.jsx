import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-heading reveal">
          <p className="eyebrow">Projects</p>
          <h2>Selected work in progress.</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.title} className="project-card reveal">
              <div className="project-header">
                <span className="project-tag">{project.tag}</span>
                <h3>{project.title}</h3>
              </div>

              <p>{project.description}</p>

              <div className="project-tags">
                {project.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <div className="project-actions">
                <a href={project.github} className="btn btn-secondary btn-small">
                  <FaGithub /> GitHub
                </a>
                <a href={project.live} className="btn btn-primary btn-small">
                  <FaExternalLinkAlt /> Live Demo
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
