'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import './About.css';

const faqs = [
  {
    q: "What is fiscal space in global health?",
    a: "The budgetary room that allows a government to increase spending on health without jeopardizing fiscal stability — my core area of work at UNAIDS."
  },
  {
    q: "Can low-income countries sustain their HIV response without donors?",
    a: "Yes — but only through deliberate domestic resource mobilization, efficient allocation, and progressive taxation. Emergency financing is not a strategy."
  },
  {
    q: "Why did you choose health economics?",
    a: "Because economics is the study of choices under scarcity — and no sector faces tougher choices than health in resource-constrained settings."
  }
];

export default function AboutPage() {
  const [showPasswordPrompt, setShowPasswordPrompt] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const correctPassword = "241020"; // Change this to your desired 6-digit code

  const handleDownload = () => {
    setShowPasswordPrompt(true);
    setPassword('');
    setError('');
  };

  const submitPassword = () => {
    if (password === correctPassword) {
      const link = document.createElement('a');
      link.href = '/documents/charlescv.pdf';
      link.download = 'Dr_Charles_Birungi_CV.pdf';
      link.click();
      setShowPasswordPrompt(false);
    } else {
      setError('Incorrect password');
    }
  };

  return (
    <>
      {/* Hero Section with Portrait */}
      <section className="about-hero">
        <div className="container">
          <motion.div className="hero-grid" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            <motion.div className="hero-text" initial={{ x: -100 }} animate={{ x: 0 }} transition={{ duration: 0.8 }}>
              <h1>Dr. Charles Birungi</h1>
              <p className="title">Global Lead, Macroeconomics & Fiscal Policy</p>
              <p className="org">UNAIDS • Geneva, Switzerland</p>
              <blockquote>
                “No country ever developed on grants and loans alone. Sustainable growth begins the day a nation decides to finance its own priorities with its own resources.”
                <span className="author">— Dr. Charles Birungi</span>
              </blockquote>
            </motion.div>

            <motion.div
              className="hero-image"
              initial={{ x: 100, scale: 0.9 }}
              animate={{ x: 0, scale: 1 }}
              transition={{ duration: 0.8 }}
              whileHover={{ y: -15 }}
            >
              <div className="portrait-frame">
                <Image
                  src="/images/charles-birungi.png"
                  alt="Dr. Charles Birungi"
                  width={500}
                  height={620}
                  className="portrait"
                  priority
                />
                <div className="frame-accent"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Professional Journey */}
      <section className="section journey">
        <div className="container">
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            Professional Journey
          </motion.h2>
          <div className="timeline">
            <div className="的最佳 timeline-item">
              <div className="year">2020 — Present</div>
              <div className="content">
                <h3>Global Lead, Macroeconomics & Fiscal Policy</h3>
                <p>UNAIDS Headquarters, Geneva</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="year">2015 — 2020</div>
              <div className="content">
                <h3>Senior Health Economist</h3>
                <p>World Bank & WHO Consultant</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="year">2010 — 2015</div>
              <div className="content">
                <h3>PhD Researcher & Lecturer</h3>
                <p>University College London (UCL)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="section education">
        <div className="container">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            Academic Background
          </motion.h2>
          <div className="education-grid">
            {[
              { degree: "PhD Health Economics", school: "University College London (UCL)", year: "2015" },
              { degree: "MSc Health Economics & Policy", school: "London School of Economics (LSE)", year: "2010" },
              { degree: "MSc Health Services Management", school: "Uganda Martyrs University", year: "2008" },
              { degree: "BA Economics", school: "Makerere University", year: "2005" }
            ].map((edu, i) => (
              <motion.div
                key={i}
                className="edu-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <h3>{edu.degree}</h3>
                <p>{edu.school}</p>
                <span>{edu.year}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section gallery">
        <div className="container">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            In Action
          </motion.h2>
          <div className="gallery-grid">
            {['charles4.jpg', 'charlesbirungi3.jpeg', 'signature.png'].map((img, i) => (
              <motion.div
                key={i}
                className="gallery-item"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              >
                <Image src={`/images/${img}`} alt="" width={400} height={500} className="gallery-img" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section faq">
        <div className="container">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            Frequently Asked Questions
          </motion.h2>
          <div className="faq-list">
            {faqs.map((item, i) => (
              <motion.details
                key={i}
                className="faq-item"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA with Secure Download Button */}
      <section className="section cta">
        <div className="container">
          <motion.div
            className="cta-box"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2>Let’s Connect</h2>
            <p>Available for speaking, advisory roles, and policy consultations.</p>
            <div className="cta-buttons">
              <Link href="/contact" className="btn">Get in Touch</Link>
              <Link href="/publications" className="btn btn-outline">View Publications</Link>
              <button onClick={handleDownload} className="btn btn-download">
                Download CV
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Password Prompt Modal */}
      {showPasswordPrompt && (
        <div className="password-modal-overlay" onClick={() => setShowPasswordPrompt(false)}>
          <motion.div
            className="password-modal"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <h3>Download CV</h3>
            <p className="modal-note">
              Request password to download CV from birungi
            </p>
            <input
              type="password"
              maxLength="6"
              placeholder="Enter 6-digit password"
              value={password}
              onChange={(e) => setPassword(e.target.value.replace(/\D/g, '').slice(0, 6))}
              onKeyDown={(e) => e.key === 'Enter' && submitPassword()}
              autoFocus
            />
            {error && <p className="error">{error}</p>}
            <div className="modal-buttons">
              <button onClick={submitPassword} className="btn">Download</button>
              <button onClick={() => setShowPasswordPrompt(false)} className="btn btn-outline">Cancel</button>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}