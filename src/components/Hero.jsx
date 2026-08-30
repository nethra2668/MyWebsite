import { FaGithub, FaLinkedinIn, FaEnvelope, FaArrowRight } from 'react-icons/fa';

export default function Hero() {
  return (
    <section id="home" className="hero section">
      <div className="container hero-layout">
        <div className="hero-copy reveal">
          <p className="eyebrow">Hi, I'm V P Nethra Sri</p>
          <h1>AI &amp; Data Science Enthusiast</h1>
          <p className="lead">
            3rd Semester AI &amp; Data Science student passionate about Python, data analysis,
            visualization, and building intelligent solutions.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View My Work <FaArrowRight />
            </a>
            <a href="#contact" className="btn btn-secondary">
              Contact Me
            </a>
          </div>

          <div className="social-links" aria-label="Social links">
            <a href="#" aria-label="GitHub placeholder link">
              <FaGithub />
            </a>
            <a href="#" aria-label="LinkedIn placeholder link">
              <FaLinkedinIn />
            </a>
            <a href="mailto:nethrasri@gmail.com" aria-label="Email Nethra Sri">
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="hero-visual reveal" aria-hidden="true">
          <div className="orb orb-1" />
          <div className="orb orb-2" />
          <div className="orb orb-3" />
          <div className="data-panel">
            <div className="panel-header">
              <span className="dot dot-red" />
              <span className="dot dot-yellow" />
              <span className="dot dot-green" />
            </div>
            <div className="chart-bars">
              <span style={{ height: '24%' }} />
              <span style={{ height: '52%' }} />
              <span style={{ height: '76%' }} />
              <span style={{ height: '44%' }} />
              <span style={{ height: '86%' }} />
              <span style={{ height: '62%' }} />
            </div>
            <div className="metric-row">
              <div>
                <strong>Python</strong>
                <span>Core focus</span>
              </div>
              <div>
                <strong>AI</strong>
                <span>Learning</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
