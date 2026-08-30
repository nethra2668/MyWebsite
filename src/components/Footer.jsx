import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>© 2026 V P Nethra Sri. Built with React.js.</p>

        <div className="footer-links" aria-label="Footer navigation">
          {footerLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <div className="footer-social" aria-label="Footer social links">
          <a href="#" aria-label="GitHub placeholder">
            <FaGithub />
          </a>
          <a href="#" aria-label="LinkedIn placeholder">
            <FaLinkedinIn />
          </a>
          <a href="mailto:nethrasri@gmail.com" aria-label="Email Nethra Sri">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}
