import { FaEnvelope, FaPhoneAlt, FaLinkedinIn, FaGithub } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-layout">
        <div className="contact-copy reveal">
          <p className="eyebrow">Let&apos;s Connect</p>
          <h2>Open to learning, collaboration, and opportunities.</h2>

          <div className="contact-list">
            <a href="mailto:nethrasri1207@gmail.com">
              <FaEnvelope />
              <span>nethrasri1207@gmail.com</span>
            </a>
            <a href="tel:+916385900912">
              <FaPhoneAlt />
              <span>+91 6385900912</span>
            </a>
            <a href="#" aria-label="LinkedIn placeholder">
              <FaLinkedinIn />
              <span>LinkedIn Placeholder</span>
            </a>
            <a href="#" aria-label="GitHub placeholder">
              <FaGithub />
              <span>GitHub Placeholder</span>
            </a>
          </div>
        </div>

        <div className="contact-form-card reveal">
          <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
            <div className="field-row">
              <label>
                <span>Name</span>
                <input type="text" name="name" placeholder="Your name" />
              </label>
            </div>

            <div className="field-row">
              <label>
                <span>Email</span>
                <input type="email" name="email" placeholder="Your email" />
              </label>
            </div>

            <div className="field-row">
              <label>
                <span>Message</span>
                <textarea name="message" rows="5" placeholder="Write a message..." />
              </label>
            </div>

            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
