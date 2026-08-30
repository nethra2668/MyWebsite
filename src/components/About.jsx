export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="section-heading reveal">
          <p className="eyebrow">About Me</p>
          <h2>Student with a growing interest in AI, analytics, and impact-driven technology.</h2>
        </div>

        <div className="about-grid">
          <div className="about-text reveal">
            <p>
              I am a 3rd semester Artificial Intelligence &amp; Data Science student at Reva University,
              Bengaluru. I am interested in data analysis, Python, data visualization, artificial
              intelligence and solving real-world problems using technology.
            </p>
            <p>
              I am building a strong foundation in analytics, problem solving, and intelligent systems
              while exploring how data can drive better decisions and smarter solutions.
            </p>
          </div>

          <aside className="info-card reveal" aria-label="Personal information card">
            <h3>Profile</h3>
            <ul>
              <li><span>Name</span><strong>V P Nethra Sri</strong></li>
              <li><span>Education</span><strong>AI &amp; Data Science</strong></li>
              <li><span>Semester</span><strong>3rd Semester</strong></li>
              <li><span>University</span><strong>Reva University</strong></li>
              <li><span>Location</span><strong>Bengaluru</strong></li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
