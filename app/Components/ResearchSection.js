'use client';
import { motion } from 'framer-motion';
import './ResearchSection.css';

export default function ResearchSection() {
  const researchAreas = [
    {
      title: "Fiscal Sustainability of HIV Responses",
      desc: "Analyzing long-term funding gaps and domestic resource mobilization strategies post-2030."
    },
    {
      title: "Development Assistance for Health (DAH)",
      desc: "Tracking global aid flows and transition risks for middle-income countries."
    },
    {
      title: "Future Health Expenditure Projections",
      desc: "Modeling health spending needs through 2040–2050 under different economic scenarios."
    },
    {
      title: "Climate Change & Health Financing",
      desc: "Exploring the fiscal implications of climate-related diseases on health budgets."
    },
    {
      title: "Public Finance for Universal Health Coverage",
      desc: "Identifying fiscal space creation mechanisms in low- and middle-income settings."
    },
    {
      title: "Economic Evaluation of Global Health Initiatives",
      desc: "Cost-effectiveness and return-on-investment analyses of large-scale health programs."
    }
  ];

  return (
    <section className="research-section section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2>Research Focus</h2>
          <p className="subtitle">
            Advancing the economics of sustainable health systems worldwide
          </p>
        </motion.div>

        <div className="research-grid">
          {researchAreas.map((area, index) => (
            <motion.div
              key={index}
              className="research-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="card-icon">
                <span>{String(index + 1).padStart(2, '0')}</span>
              </div>
              <h3>{area.title}</h3>
              <p>{area.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="research-cta"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <a href="/research" className="btn">Explore All Research</a>
          <a href="/publications" className="btn btn-outline">View Publications</a>
        </motion.div>
      </div>
    </section>
  );
}