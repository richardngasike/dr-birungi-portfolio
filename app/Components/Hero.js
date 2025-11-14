'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Dr. Charles Birungi
          </motion.h1>
          <motion.p
            className="hero-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Global Lead, Macroeconomics & Fiscal Policy
          </motion.p>
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            UNAIDS | PhD Health Economics (UCL)
          </motion.p>
          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9 }}
          >
            <a href="/contact" className="btn">Get in Touch</a>
            <a href="/publications" className="btn btn-outline">View Publications</a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          whileHover={{ scale: 1.05, rotate: 2 }}
        >
          <Image
            src="/images/charles-birungi.png"
            alt="Dr. Charles Birungi"
            width={400}
            height={400}
            className="profile-img"
            priority
          />
        </motion.div>
      </div>
      

      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <span>↓</span>
      </motion.div>
    </section>
  );
}