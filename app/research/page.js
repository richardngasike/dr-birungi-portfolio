import './Research.css';

export default function ResearchPage() {
  const interests = [
    "Fiscal sustainability of HIV and health programs",
    "Development assistance for health (DAH) trends",
    "Future health financing scenarios (2030–2050)",
    "Economic impact of pandemics and climate change on health systems",
    "Public finance management for universal health coverage",
    "Resource mobilization strategies in low-income settings"
  ];

  return (
    <div className="research-page section">
      <div className="container">
        <h1>Research Focus</h1>
        <p className="lead">
          Exploring the economics of sustainable health financing in a changing world.
        </p>

        <div className="research-grid">
          <div className="research-main">
            <h2>Current Research Themes</h2>
            <ul className="research-list">
              {interests.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <h2>Ongoing Work</h2>
            <p>
              Leading global analyses on the future financing needs for HIV in the context of SDG transitions, 
              climate-health nexus, and the end of traditional donor funding models.
            </p>
            <p>
              Collaborating with The Lancet Commissions, IHME (Global Burden of Disease), and WHO on long-term 
              health expenditure projections and fiscal space modeling.
            </p>
          </div>

          <div className="research-sidebar">
            <div className="card">
              <h3>Google Scholar</h3>
              <p>24,000+ citations<br/>78+ publications</p>
              <a href="https://scholar.google.com/citations?user=YOUR_ID" target="_blank" className="btn small">
                View Profile
              </a>
            </div>
            <div className="card">
              <h3>ResearchGate</h3>
              <p>Research items: 80+<br/>Reads: 50,000+</p>
              <a href="https://www.researchgate.net/profile/Charles-Birungi" target="_blank" className="btn small">
                View Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}