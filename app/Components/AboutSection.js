import './AboutSection.css';

export default function AboutSection() {
  return (
    <section className="about-section section">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-grid">
          <div className="about-text">
            <p>
              I am a health economist with over 20 years of experience in global health financing, macroeconomics, and policy translation. 
              Currently, I serve as the <strong>Global Lead for Macroeconomics and Fiscal Policy at UNAIDS</strong>.
            </p>
            <p>
              My work focuses on ensuring sustainable financing for HIV responses, analyzing development assistance for health, and projecting future health spending in low- and middle-income countries.
            </p>
            <p>
              I hold a PhD in Health Economics from University College London (UCL), an MSc from the London School of Economics (LSE), and degrees from Uganda Martyrs University and Makerere University.
            </p>
            <a href="/about" className="btn">Full Bio</a>
          </div>
          <div className="about-stats">
            <div className="stat">
              <h3>24K+</h3>
              <p>Citations</p>
            </div>
            <div className="stat">
              <h3>78+</h3>
              <p>Publications</p>
            </div>
            <div className="stat">
              <h3>20+</h3>
              <p>Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}