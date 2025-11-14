'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import './AboutSection.css';

export default function AboutSection() {
  return (
    <section className="about-section section">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>About Me</h2>
          <p className="section-subtitle">
            Global Leader in Health Economics & Sustainable Financing
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="about-grid">
          {/* Left: Text + Stats */}
          <div className="about-content">
            <motion.div
              className="about-text"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p>
                I am a health economist with over <strong>20 years</strong> of experience in global health financing, macroeconomics, and policy translation. 
                Currently, I serve as the <strong>Global Lead for Macroeconomics and Fiscal Policy at UNAIDS</strong>.
              </p>
              <p>
                My work focuses on ensuring sustainable financing for HIV responses, analyzing development assistance for health, and projecting future health spending in low- and middle-income countries.
              </p>
              <p>
                I hold a <strong>PhD in Health Economics from University College London (UCL)</strong>, an MSc from the London School of Economics (LSE), and degrees from Uganda Martyrs University and Makerere University.
              </p>

              <div className="about-actions">
                <Link href="/about" className="btn">Read Full Bio</Link>
                <Link href="/contact" className="btn btn-outline">Get in Touch</Link>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="about-stats"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
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
            </motion.div>
          </div>

          {/* Right: Professional Photo with Elegant Frame */}
          <motion.div
            className="about-image-wrapper"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.3 }}
            whileHover={{ y: -10 }}
          >
            <div className="photo-frame">
              <Image
                src="/images/charles4.jpg"
                alt="Dr. Charles Birungi"
                width={600}
                height={600}
                className="about-photo"
                priority
              />
              <div className="frame-accent"></div>
            </div>
            <div className="photo-caption">
  “No country ever developed on grants and loans alone. Sustainable growth begins the day a nation decides to finance its own priorities with its own resources.”{' '}
  <span className="author"> - by Dr. Charles Birungi</span>
</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}