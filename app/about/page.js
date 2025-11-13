import './About.css';

export default function AboutPage() {
  return (
    <div className="about-page section">
      <div className="container">
        <h1>About Dr. Charles Birungi</h1>
        <div className="about-content">
          <p className="lead">
            Health Economist | Global Lead, Macroeconomics & Fiscal Policy at UNAIDS
          </p>

          <div className="bio-section">
            <h2>Professional Journey</h2>
            <p>
              With over two decades of experience at the intersection of macroeconomics, public finance, and global health, 
              I currently serve as the <strong>Global Lead for Macroeconomics and Fiscal Policy</strong> at UNAIDS, 
              where I shape sustainable financing strategies for HIV responses worldwide.
            </p>
            <p>
              My work focuses on fiscal space analysis, development assistance for health, health expenditure projections, 
              and ensuring that low- and middle-income countries can sustainably fund their health priorities in the face 
              of competing demands and global economic shifts.
            </p>
          </div>

          <div className="education-section">
            <h2>Education</h2>
            <ul className="education-list">
              <li>PhD in Health Economics — University College London (UCL)</li>
              <li>MSc in Health Economics, Policy and Management — London School of Economics (LSE)</li>
              <li>MSc in Health Services Management — Uganda Martyrs University</li>
              <li>BA in Economics — Makerere University, Kampala</li>
            </ul>
          </div>

          <div className="expertise">
            <h2>Areas of Expertise</h2>
            <div className="tags">
              {['Health Financing', 'Fiscal Space Analysis', 'HIV Economics', 'Global Health Policy', 'Development Assistance', 'Economic Modeling', 'Public Finance', 'Sustainability Transitions'].map(tag => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </div>

          <a href="/contact" className="btn">Contact Me</a>
        </div>
      </div>
    </div>
  );
}