'use client';
import { motion } from 'framer-motion';
import './PublicationsList.css';

const featuredPublications = [
  {
    title: "Global, regional, and national cancer incidence, mortality, years of life lost...",
    journal: "JAMA Oncology",
    year: "2017",
    citations: "8,813"
  },
  {
    title: "Global burden of 369 diseases and injuries in 204 countries and territories...",
    journal: "The Lancet",
    year: "2021",
    citations: "5,200+"
  },
  {
    title: "Future and potential spending on health 2015–40: development assistance for health...",
    journal: "The Lancet",
    year: "2019",
    citations: "1,800+"
  },
  {
    title: "Financing global health security and pandemic preparedness: economic implications...",
    journal: "The Lancet Global Health",
    year: "2023",
    citations: "1,200+"
  },
  {
    title: "Fiscal space for domestic funding of health and other social services in 187 countries...",
    journal: "Health Policy and Planning",
    year: "2022",
    citations: "980+"
  }
];

export default function PublicationsList() {
  return (
    <section className="publications-section section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2>Featured Publications</h2>
          <p className="subtitle">
            Highly cited research in The Lancet, JAMA, and leading global health journals
          </p>
        </motion.div>

        <div className="publications-grid">
          {featuredPublications.map((pub, index) => (
            <motion.article
              key={index}
              className="pub-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="pub-rank">
                <span>#{index + 1}</span>
              </div>

              <div className="pub-content">
                <h3>{pub.title}</h3>
                <div className="pub-meta">
                  <span className="journal">{pub.journal}</span>
                  <span className="year">{pub.year}</span>
                  <span className="citations">
                    {pub.citations} citations
                  </span>
                </div>
              </div>

              <div className="pub-badge">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="publications-cta"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <a href="/publications" className="btn">
            View All 78+ Publications
          </a>
          <a
            href="https://scholar.google.com/citations?user=YOUR_ID_HERE"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            Google Scholar Profile
          </a>
        </motion.div>
      </div>
    </section>
  );
}