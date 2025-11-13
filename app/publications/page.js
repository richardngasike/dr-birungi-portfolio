import './Publications.css';

const publications = [
  { title: "Global, regional, and national cancer incidence...", journal: "JAMA Oncology", year: 2017, citations: "8,813" },
  { title: "Global burden of 369 diseases and injuries...", journal: "The Lancet", year: 2021, citations: "5,200+" },
  { title: "Future health spending projections 2015–2040", journal: "The Lancet Global Health", year: 2019, citations: "1,200+" },
  { title: "Financing needs for HIV in 2030", journal: "The Lancet HIV", year: 2023, citations: "850+" },
  { title: "Fiscal space for health in sub-Saharan Africa", journal: "Health Policy and Planning", year: 2022, citations: "420+" }
];

export default function PublicationsPage() {
  return (
    <div className="publications-page section">
      <div className="container">
        <h1>Selected Publications</h1>
        <p className="lead">Highly cited research in global health economics</p>

        <div className="publications-list">
          {publications.map((pub, i) => (
            <div key={i} className="pub-item">
              <h3>{pub.title}</h3>
              <p className="meta">
                <strong>{pub.journal}</strong> • {pub.year} • <em>{pub.citations} citations</em>
              </p>
            </div>
          ))}
        </div>

        <div className="full-list">
          <a href="https://scholar.google.com/citations?user=YOUR_ID" target="_blank" className="btn">
            View All 78+ Publications on Google Scholar
          </a>
        </div>
      </div>
    </div>
  );
}