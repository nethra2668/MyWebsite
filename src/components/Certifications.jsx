import { FaExternalLinkAlt, FaFileAlt } from 'react-icons/fa';
import { certifications } from '../data/certifications';

export default function Certifications() {
  return (
    <section id="certifications" className="section cert-section">
      <div className="container">
        <div className="section-heading reveal">
          <p className="eyebrow">Certifications</p>
          <h2>Learning milestones and achievements.</h2>
        </div>

        <div className="cert-grid">
          {certifications.map((cert) => (
            <article key={cert.id} className={`cert-card reveal ${cert.accent}`}>
              <div className="cert-topline">
                <span className="badge">{cert.organization}</span>
                <span className="cert-date">{cert.date}</span>
              </div>

              <h3>{cert.name}</h3>

              <p className="cert-meta">{cert.organization}</p>

              <p className="cert-description">{cert.description}</p>

              <div className="cert-actions">
                {cert.verificationUrl ? (
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary btn-small"
                  >
                    View Certificate <FaExternalLinkAlt />
                  </a>
                ) : (
                  <button type="button" className="btn btn-secondary btn-small" aria-label={`View certificate for ${cert.name}`}>
                    View Certificate <FaFileAlt />
                  </button>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
