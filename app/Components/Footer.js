import Image from 'next/image';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">

        {/* Column 1: Brand & Tagline */}
        <div className="footer-brand">
          <h3>Dr. Charles Birungi</h3>
          <p className="tagline">
            Global Lead – Macroeconomics & Fiscal Policy<br />
            UNAIDS | PhD Health Economics (UCL)
          </p>
          <p className="motto">
            Advancing sustainable health financing for a healthier world.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/research">Research</a></li>
            <li><a href="/publications">Publications</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Column 3: Professional Profiles */}
        <div className="footer-profiles">
          <h4>Academic & Professional</h4>
          <ul>
            <li><a href="https://scholar.google.com/citations?user=XXXXX" target="_blank" rel="noopener">Google Scholar (24K+ citations)</a></li>
            <li><a href="https://www.researchgate.net/profile/Charles-Birungi" target="_blank" rel="noopener">ResearchGate (78+ publications)</a></li>
            <li><a href="https://orcid.org/0000-0002-XXXX-XXXX" target="_blank" rel="noopener">ORCID</a></li>
            <li><a href="https://www.linkedin.com/in/charles-birungi" target="_blank" rel="noopener">LinkedIn</a></li>
          </ul>
        </div>

        {/* Column 4: Connect & WhatsApp */}
        <div className="footer-connect">
          <h4>Connect With Me</h4>
          <div className="social-icons">
            <a href="https://twitter.com/C_Birungi" target="_blank" rel="noopener" aria-label="X (Twitter)">
              <svg viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/charles-birungi" target="_blank" rel="noopener" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="https://wa.me/256772342377" target="_blank" rel="noopener" aria-label="WhatsApp">
              <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004c-2.06 0-4.092-.708-5.849-2.101l-.419-.25-4.342.899.913-4.284-.213-.337c-1.508-1.79-2.237-4.053-2.237-6.305 0-6.608 5.382-11.99 12-11.99 3.207 0 6.227 1.252 8.5 3.525 2.273 2.273 3.525 5.293 3.525 8.5 0 6.608-5.382 11.99-12 11.99zm4.529-18.84c-2.76-2.76-6.45-3.28-9.52-2.48-6.74 1.76-10.98 8.62-9.22 15.36l.88 3.48 3.58-.92c3.32 1.92 7.32 2.16 10.68.64 6.74-1.76 10.98-8.62 9.22-15.36-1.2-3.66-3.82-6.72-7.68-8.52"/></svg>
            </a>
          </div>

          <div className="whatsapp-direct">
            <a href="https://wa.me/256772342377" target="_blank" rel="noopener" className="whatsapp-btn">
              <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004c-2.06 0-4.092-.708-5.849-2.101l-.419-.25-4.342.899.913-4.284-.213-.337c-1.508-1.79-2.237-4.053-2.237-6.305 0-6.608 5.382-11.99 12-11.99 3.207 0 6.227 1.252 8.5 3.525 2.273 2.273 3.525 5.293 3.525 8.5 0 6.608-5.382 11.99-12 11.99zm4.529-18.84c-2.76-2.76-6.45-3.28-9.52-2.48-6.74 1.76-10.98 8.62-9.22 15.36l.88 3.48 3.58-.92c3.32 1.92 7.32 2.16 10.68.64 6.74-1.76 10.98-8.62 9.22-15.36-1.2-3.66-3.82-6.72-7.68-8.52"/></svg>
              <span>+256 772 342 377</span>
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; 2025 Dr. Charles Birungi. All rights reserved.</p>
          <p className="built-by">
            Health Economist | UNAIDS Global Lead | Alumnus: UCL • LSE • Makerere
          </p>
        </div>
      </div>
    </footer>
  );
}